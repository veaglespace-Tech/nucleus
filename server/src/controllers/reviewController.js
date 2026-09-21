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
exports.deleteReview = exports.updateReview = exports.createReview = exports.getReviewById = exports.getReviews = void 0;
const models_1 = require("../models");
const getReviews = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reviews = yield models_1.Review.findAll();
        res.json(reviews);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching reviews' });
    }
});
exports.getReviews = getReviews;
const getReviewById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const review = yield models_1.Review.findByPk(req.params.id);
        if (!review)
            return res.status(404).json({ message: 'Review not found' });
        res.json(review);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching review' });
    }
});
exports.getReviewById = getReviewById;
const createReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const review = yield models_1.Review.create(req.body);
        res.status(201).json(review);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating review' });
    }
});
exports.createReview = createReview;
const updateReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const review = yield models_1.Review.findByPk(req.params.id);
        if (!review)
            return res.status(404).json({ message: 'Review not found' });
        yield review.update(req.body);
        res.json(review);
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating review' });
    }
});
exports.updateReview = updateReview;
const deleteReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const review = yield models_1.Review.findByPk(req.params.id);
        if (!review)
            return res.status(404).json({ message: 'Review not found' });
        yield review.destroy();
        res.json({ message: 'Review deleted' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting review' });
    }
});
exports.deleteReview = deleteReview;
