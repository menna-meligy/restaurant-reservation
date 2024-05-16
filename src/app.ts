import express from "express";
import userRouter from "./routes/userRoutes";
import reservationRouter from "./routes/reservationRoutes";

const app = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/reservations", reservationRouter);

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the Restaurant Reservation System!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
