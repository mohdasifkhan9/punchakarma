import { NextResponse } from "next/server";
import { db } from "@/db";
import { consultations } from "@/db/schema";
import { desc } from "drizzle-orm";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, preferredDate, preferredTime, therapy, condition, message } = body;

    // Validate inputs
    if (!name || !email || !phone || !preferredDate || !preferredTime || !therapy || !condition) {
      return NextResponse.json(
        { error: "Missing required fields. Please ensure all details are filled." },
        { status: 400 }
      );
    }

    // Insert booking
    const [newBooking] = await db
      .insert(consultations)
      .values({
        name,
        email,
        phone,
        preferredDate,
        preferredTime,
        therapy,
        condition,
        message: message || "",
      })
      .returning();

    return NextResponse.json({
      success: true,
      message: "Your elite wellness consultation has been scheduled successfully.",
      booking: newBooking,
    });
  } catch (err: any) {
    console.error("Booking error:", err);
    return NextResponse.json(
      { error: "Internal sanctuary system error. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Return recent bookings for dashboard validation/feedback (hide real emails & phones for privacy)
    const recentBookings = await db
      .select({
        id: consultations.id,
        name: consultations.name,
        preferredDate: consultations.preferredDate,
        preferredTime: consultations.preferredTime,
        therapy: consultations.therapy,
        condition: consultations.condition,
        createdAt: consultations.createdAt,
      })
      .from(consultations)
      .orderBy(desc(consultations.createdAt))
      .limit(10);

    return NextResponse.json(recentBookings);
  } catch (err) {
    console.error("Fetch bookings error:", err);
    return NextResponse.json({ error: "Failed to fetch bookings." }, { status: 500 });
  }
}
