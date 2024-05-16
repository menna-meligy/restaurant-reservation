// import { Router } from "express";
import express from "express";
import {
  createReservation,
  getReservationsByDate,
} from "../controllers/reservationController";
const router = express.Router();
// const router = Router();

router.post("/", createReservation);
router.get("/", getReservationsByDate);

export default router;
