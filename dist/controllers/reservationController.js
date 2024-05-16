"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReservationsByDate = exports.createReservation = void 0;
const reservation_1 = __importDefault(require("../models/reservation"));
const user_1 = __importDefault(require("../models/user"));
const filterValidReservations_1 = require("../utils/filterValidReservations");
const createReservation = async (req, res) => {
    try {
        const { userId, date, tableNumber } = req.body;
        const user = await user_1.default.findByPk(userId);
        if (!user)
            return res.status(404).json({ message: "User not found" });
        const reservation = await reservation_1.default.create({ userId, date, tableNumber });
        res.status(201).json(reservation);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
exports.createReservation = createReservation;
const getReservationsByDate = async (req, res) => {
    const { startDate, endDate } = req.query;
    try {
        const reservations = await reservation_1.default.findAll({
            where: {
                date: {
                    $between: [startDate, endDate],
                },
            },
            include: [user_1.default],
        });
        const upcomingReservations = (0, filterValidReservations_1.filterValidReservations)(reservations);
        res.status(200).json(reservations);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getReservationsByDate = getReservationsByDate;
