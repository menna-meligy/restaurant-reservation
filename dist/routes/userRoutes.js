"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { Router } from "express";
const userController_1 = require("../controllers/userController");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// const router = Router();
router.post("/", userController_1.createUser);
router.get("/", userController_1.getAllUsers);
exports.default = router;
