import type { BookingResponse } from "./types";

export const MOCK_BOOKING: BookingResponse = {
  pnr: "ABC123",
  flightNumber: "QM 702",
  departure: "Bangkok (BKK)",
  arrival: "Tokyo (NRT)",
  departureDate: "2026-04-15",
  passengers: [
    {
      id: "pax-1",
      firstName: "Alex",
      lastName: "Huum",
      type: "ADT",
      seatNumber: "12A",
    },
    {
      id: "pax-2",
      firstName: "Somsee",
      lastName: "Kuum",
      type: "ADT",
      seatNumber: "12B",
    },
  ],
};
