import { NextResponse } from "next/server";
import { db } from "@/db";
import { blogStats } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (!slug) {
    return NextResponse.json({ error: "Slug is required" }, { status: 400 });
  }

  try {
    let stats = await db
      .select()
      .from(blogStats)
      .where(eq(blogStats.slug, slug))
      .limit(1);

    if (stats.length === 0) {
      // Create record
      const [newStats] = await db
        .insert(blogStats)
        .values({ slug, likes: 0, views: 1 })
        .returning();
      return NextResponse.json(newStats);
    }

    return NextResponse.json(stats[0]);
  } catch (err) {
    console.error("Blog stats fetch error:", err);
    return NextResponse.json({ likes: 0, views: 0 });
  }
}

export async function POST(request: Request) {
  try {
    const { slug, action } = await request.json();

    if (!slug) {
      return NextResponse.json({ error: "Slug is required" }, { status: 400 });
    }

    let stats = await db
      .select()
      .from(blogStats)
      .where(eq(blogStats.slug, slug))
      .limit(1);

    if (stats.length === 0) {
      const likesVal = action === "like" ? 1 : 0;
      const viewsVal = action === "view" ? 1 : 0;
      const [newStats] = await db
        .insert(blogStats)
        .values({ slug, likes: likesVal, views: viewsVal })
        .returning();
      return NextResponse.json(newStats);
    }

    const current = stats[0];
    let updatedLikes = current.likes;
    let updatedViews = current.views;

    if (action === "like") {
      updatedLikes += 1;
    } else if (action === "view") {
      updatedViews += 1;
    }

    const [updatedStats] = await db
      .update(blogStats)
      .set({ likes: updatedLikes, views: updatedViews })
      .where(eq(blogStats.slug, slug))
      .returning();

    return NextResponse.json(updatedStats);
  } catch (err) {
    console.error("Blog stats increment error:", err);
    return NextResponse.json({ error: "Failed to update statistics" }, { status: 500 });
  }
}
