"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterValidReservations = void 0;
const filterValidReservations = (reservations) => reservations.filter((reservation) => reservation.date >= new Date());
exports.filterValidReservations = filterValidReservations;
