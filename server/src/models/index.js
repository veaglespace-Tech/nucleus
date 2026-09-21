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
Object.defineProperty(exports, "__esModule", { value: true });
exports.initDb = exports.Review = exports.Blog = exports.Service = exports.User = void 0;
const db_1 = require("../config/db");
const User_1 = require("./User");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return User_1.User; } });
const Service_1 = require("./Service");
Object.defineProperty(exports, "Service", { enumerable: true, get: function () { return Service_1.Service; } });
const Blog_1 = require("./Blog");
Object.defineProperty(exports, "Blog", { enumerable: true, get: function () { return Blog_1.Blog; } });
const Review_1 = require("./Review");
Object.defineProperty(exports, "Review", { enumerable: true, get: function () { return Review_1.Review; } });
// Sync all models
const initDb = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db_1.sequelize.sync({ alter: true });
        console.log('Database synced successfully');
    }
    catch (error) {
        console.error('Error syncing database:', error);
    }
});
exports.initDb = initDb;
