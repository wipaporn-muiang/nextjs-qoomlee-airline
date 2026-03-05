import { NextResponse } from "next/server";
import { MOCK_BOOKING } from "@/lib/mock-data";

export async function POST(request: Request) {
  const body = await request.json();
  const { lastName, pnr } = body;

  if (!lastName || !pnr) {
    return NextResponse.json(
      { error: "Last name and booking reference are required." },
      { status: 400 }
    );
  }

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  // Mock validation: accept any input and return mock data
  const hasMatch = MOCK_BOOKING.passengers.some(
    (p) => p.lastName.toLowerCase() === lastName.toLowerCase()
  );

  if (
    hasMatch ||
    pnr.toUpperCase() === MOCK_BOOKING.pnr.toUpperCase()
  ) {
    return NextResponse.json(MOCK_BOOKING);
  }

  return NextResponse.json(
    { error: "Booking not found. Please check your details and try again." },
    { status: 404 }
  );
}
