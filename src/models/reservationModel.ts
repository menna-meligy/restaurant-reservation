import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "../config/config";
import User from "./userModel";

interface ReservationAttributes {
  id: number;
  userId: number;
  date: Date;
  tableNumber: number;
}

interface ReservationCreationAttributes
  extends Optional<ReservationAttributes, "id"> {}

class Reservation extends Model<
  ReservationAttributes,
  ReservationCreationAttributes
> {
  public id!: number;
  public date!: Date;
  public tableNumber!: number;
}

Reservation.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    date: DataTypes.DATE,
    tableNumber: DataTypes.INTEGER,
    userId: "",
  },
  {
    sequelize,
    modelName: "Reservation",
  }
);

Reservation.belongsTo(User);
User.hasMany(Reservation);

export default Reservation;
