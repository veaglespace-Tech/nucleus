"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blog = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../config/db");
class Blog extends sequelize_1.Model {
}
exports.Blog = Blog;
Blog.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: sequelize_1.DataTypes.TEXT('long'),
        allowNull: false,
    },
    image: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    showContactBtn: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    }
}, {
    sequelize: db_1.sequelize,
    modelName: 'Blog',
});
