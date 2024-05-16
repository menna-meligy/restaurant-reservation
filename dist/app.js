"use strict";
// import express from "express";
// import bodyParser from "body-parser";
// import userRoutes from "./routes/user";
// import reservationRoutes from "./routes/reservation";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const app = express();
// const PORT = process.env.PORT || 3000;
// app.use(bodyParser.json());
// app.use("/users", userRoutes);
// app.use("/reservations", reservationRoutes);
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}.`);
// });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes")); // Ensure correct path based on your structure
const reservationRoutes_1 = __importDefault(require("./routes/reservationRoutes")); // Ensure correct path
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/users", userRoutes_1.default);
app.use("/reservations", reservationRoutes_1.default);
app.listen(3000, () => console.log("Server running on http://localhost:3000"));
