import { NextResponse } from "next/server";
import { db } from "@/db";
import { subscribers } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email address provided." }, { status: 400 });
    }

    // Check if subscriber already exists
    const existing = await db
      .select()
      .from(subscribers)
      .where(eq(subscribers.email, email))
      .limit(1);

    if (existing.length > 0) {
      return NextResponse.json(
        { error: "This email is already registered in our private records." },
        { status: 400 }
      );
    }

    // Add new subscriber
    await db.insert(subscribers).values({ email });

    return NextResponse.json({ success: true, message: "Successfully subscribed." });
  } catch (err: any) {
    console.error("Newsletter subscription error:", err);
    return NextResponse.json(
      { error: "Failed to store registration. Please try again later." },
      { status: 500 }
    );
  }
}
