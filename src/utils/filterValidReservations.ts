import Reservation from "../models/reservationModel";

export const filterValidReservations = (reservations: Reservation[]) =>
  reservations.filter((reservation) => reservation.date >= new Date());
