"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.login = exports.updateProfile = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const models_1 = require("../models");
const JWT_SECRET = process.env.JWT_SECRET || 'super_secret_key_123';
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const user = yield models_1.User.findOne({ where: { username } });
        if (!user)
            return res.status(401).json({ message: 'Invalid credentials' });
        const isMatch = yield bcrypt_1.default.compare(password, user.dataValues.password);
        if (!isMatch)
            return res.status(401).json({ message: 'Invalid credentials' });
        const token = jsonwebtoken_1.default.sign({ id: user.dataValues.id, username: user.dataValues.username }, JWT_SECRET, { expiresIn: '1d' });
        res.json({ token, user: { id: user.dataValues.id, username: user.dataValues.username } });
    }
    catch (error) {
        res.status(500).json({ message: 'Error during login' });
    }
});
exports.login = login;
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const existingUser = yield models_1.User.findOne({ where: { username } });
        if (existingUser)
            return res.status(400).json({ message: 'Username already exists' });
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        const user = yield models_1.User.create({ username, password: hashedPassword });
        res.status(201).json({ message: 'User created successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating user' });
    }
});
exports.register = register;

const updateProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { currentPassword, newUsername, newPassword } = req.body;
        const userId = req.user.id; // from authenticateToken middleware

        const user = yield models_1.User.findByPk(userId);
        if (!user) return res.status(404).json({ message: 'User not found' });

        // Verify current password
        const isMatch = yield bcrypt_1.default.compare(currentPassword, user.dataValues.password);
        if (!isMatch) return res.status(401).json({ message: 'Incorrect current password' });

        // Update username if provided and different
        if (newUsername && newUsername !== user.dataValues.username) {
            const existingUser = yield models_1.User.findOne({ where: { username: newUsername } });
            if (existingUser) return res.status(400).json({ message: 'Username already taken' });
            user.username = newUsername;
        }

        // Update password if provided
        if (newPassword) {
            user.password = yield bcrypt_1.default.hash(newPassword, 10);
        }

        yield user.save();

        // Sign new token in case username changed
        const token = jsonwebtoken_1.default.sign({ id: user.dataValues.id, username: user.dataValues.username }, JWT_SECRET, { expiresIn: '1d' });

        res.json({ message: 'Profile updated successfully', token, user: { id: user.dataValues.id, username: user.dataValues.username } });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating profile' });
    }
});
exports.updateProfile = updateProfile;
