"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = exports.createUser = void 0;
const user_1 = __importDefault(require("../models/user"));
const createUser = async (req, res) => {
    try {
        const { name, email } = req.body;
        const user = await user_1.default.create({ name, email });
        res.status(201).json(user);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
exports.createUser = createUser;
const getAllUsers = async (req, res) => {
    try {
        const users = await user_1.default.findAll();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getAllUsers = getAllUsers;
