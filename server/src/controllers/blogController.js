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
exports.deleteBlog = exports.updateBlog = exports.createBlog = exports.getBlogById = exports.getBlogs = void 0;
const models_1 = require("../models");
const getBlogs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blogs = yield models_1.Blog.findAll();
        res.json(blogs);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching blogs' });
    }
});
exports.getBlogs = getBlogs;
const getBlogById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blog = yield models_1.Blog.findByPk(req.params.id);
        if (!blog)
            return res.status(404).json({ message: 'Blog not found' });
        res.json(blog);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching blog' });
    }
});
exports.getBlogById = getBlogById;
const createBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blog = yield models_1.Blog.create(req.body);
        res.status(201).json(blog);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating blog' });
    }
});
exports.createBlog = createBlog;
const updateBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blog = yield models_1.Blog.findByPk(req.params.id);
        if (!blog)
            return res.status(404).json({ message: 'Blog not found' });
        yield blog.update(req.body);
        res.json(blog);
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating blog' });
    }
});
exports.updateBlog = updateBlog;
const deleteBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blog = yield models_1.Blog.findByPk(req.params.id);
        if (!blog)
            return res.status(404).json({ message: 'Blog not found' });
        yield blog.destroy();
        res.json({ message: 'Blog deleted' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting blog' });
    }
});
exports.deleteBlog = deleteBlog;
