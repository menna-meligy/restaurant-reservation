"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { Router } from "express";
const express_1 = __importDefault(require("express"));
const reservationController_1 = require("../controllers/reservationController");
const router = express_1.default.Router();
// const router = Router();
router.post("/", reservationController_1.createReservation);
router.get("/", reservationController_1.getReservationsByDate);
exports.default = router;
