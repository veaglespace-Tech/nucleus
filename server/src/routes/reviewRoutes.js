"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reviewController_1 = require("../controllers/reviewController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = (0, express_1.Router)();
// Public routes
router.get('/', reviewController_1.getReviews);
router.get('/:id', reviewController_1.getReviewById);
router.post('/', reviewController_1.createReview); // Allow public to create reviews
// Protected routes (Admin only)
router.put('/:id', authMiddleware_1.authenticateToken, reviewController_1.updateReview);
router.delete('/:id', authMiddleware_1.authenticateToken, reviewController_1.deleteReview);
exports.default = router;
