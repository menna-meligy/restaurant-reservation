import { Request, Response } from "express";
import Reservation from "../models/reservationModel";
import User from "../models/userModel";

import { filterValidReservations } from "../utils/filterValidReservations";

export const createReservation = async (req: Request, res: Response) => {
  try {
    const { userId, date, tableNumber } = req.body;
    const user = await User.findByPk(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    const reservation = await Reservation.create({ userId, date, tableNumber });
    res.status(201).json(reservation);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getReservationsByDate = async (req: Request, res: Response) => {
  const { startDate, endDate } = req.query;
  try {
    const reservations = await Reservation.findAll({
      where: {
        date: {
          $between: [startDate, endDate],
        },
      },
      include: [User],
    });
    const upcomingReservations = filterValidReservations(reservations);
    res.status(200).json(reservations);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
