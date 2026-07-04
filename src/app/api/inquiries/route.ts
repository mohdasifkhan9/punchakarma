import { NextResponse } from "next/server";
import { db } from "@/db";
import { inquiries } from "@/db/schema";

export async function POST(request: Request) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    const [newInquiry] = await db
      .insert(inquiries)
      .values({
        name,
        email,
        phone: phone || "",
        subject: subject || "General Inquiry",
        message,
      })
      .returning();

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been cataloged. Our Wellness Concierge will call you within 3 hours.",
      inquiry: newInquiry,
    });
  } catch (err: any) {
    console.error("Inquiry error:", err);
    return NextResponse.json(
      { error: "Failed to record inquiry. Please call us directly." },
      { status: 500 }
    );
  }
}
