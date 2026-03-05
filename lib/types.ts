export interface Passenger {
  id: string;
  firstName: string;
  lastName: string;
  type: "ADT" | "CHD" | "INF";
  seatNumber: string;
}

export interface BookingResponse {
  pnr: string;
  flightNumber: string;
  departure: string;
  arrival: string;
  departureDate: string;
  passengers: Passenger[];
}
