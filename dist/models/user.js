"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../config/config"));
const express_validator_1 = require("express-validator");
const userRoutes_1 = __importDefault(require("../routes/userRoutes"));
const userController_1 = require("../controllers/userController");
const User = config_1.default.define("User", {
    name: sequelize_1.DataTypes.STRING,
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
});
userRoutes_1.default.post("/", [
    (0, express_validator_1.check)("email").isEmail().withMessage("Provide a valid email address"),
    (0, express_validator_1.check)("name").not().isEmpty().withMessage("Name is required"),
], userController_1.createUser);
exports.default = User;
