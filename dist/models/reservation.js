"use strict";
// import { DataTypes } from "sequelize";
// import sequelize from "../config/config";
// import User from "./user";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const Reservation = sequelize.define("Reservation", {
//   date: DataTypes.DATE,
//   tableNumber: DataTypes.INTEGER,
// });
// Reservation.belongsTo(User);
// User.hasMany(Reservation);
// export default Reservation;
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../config/config"));
const user_1 = __importDefault(require("./user"));
class Reservation extends sequelize_1.Model {
}
Reservation.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    date: sequelize_1.DataTypes.DATE,
    tableNumber: sequelize_1.DataTypes.INTEGER,
    userId: "",
}, {
    sequelize: config_1.default,
    modelName: "Reservation",
});
Reservation.belongsTo(user_1.default);
user_1.default.hasMany(Reservation);
exports.default = Reservation;
