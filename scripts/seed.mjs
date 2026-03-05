/**
 * Database seed script for Qoomlee Airline Check-in.
 *
 * This project currently uses a mock API with in-memory data.
 * See /lib/mock-data.ts for the mock booking data.
 *
 * When you integrate a real database, add your seed logic here.
 *
 * Usage: npm run seed
 */

const mockBooking = {
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

console.log("[seed] Qoomlee Airline - Database Seeder");
console.log("[seed] Mock data loaded:");
console.log(JSON.stringify(mockBooking, null, 2));
console.log("[seed] Seed complete. In production, this data would be written to the database.");
