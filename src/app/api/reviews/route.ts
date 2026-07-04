import { NextResponse } from "next/server";
import { db } from "@/db";
import { testimonials } from "@/db/schema";
import { desc } from "drizzle-orm";

export async function POST(request: Request) {
  try {
    const { name, rating, text, treatment, location, image } = await request.json();

    if (!name || !text || !treatment || !location) {
      return NextResponse.json(
        { error: "Please fill in all the review fields." },
        { status: 400 }
      );
    }

    const starRating = Math.max(1, Math.min(5, Number(rating) || 5));

    // Insert user review
    const [newTestimonial] = await db
      .insert(testimonials)
      .values({
        name,
        rating: starRating,
        text,
        treatment,
        location,
        image: image || "https://images.pexels.com/photos/6187423/pexels-photo-6187423.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=120&w=120",
      })
      .returning();

    return NextResponse.json({
      success: true,
      message: "Thank you! Your testimonial has been saved to our guest register.",
      testimonial: newTestimonial,
    });
  } catch (err: any) {
    console.error("Testimonial post error:", err);
    return NextResponse.json({ error: "Failed to post review." }, { status: 500 });
  }
}

export async function GET() {
  try {
    const data = await db
      .select()
      .from(testimonials)
      .orderBy(desc(testimonials.createdAt));

    return NextResponse.json(data);
  } catch (err) {
    console.error("Fetch testimonials error:", err);
    return NextResponse.json({ error: "Failed to load guest reviews." }, { status: 500 });
  }
}
