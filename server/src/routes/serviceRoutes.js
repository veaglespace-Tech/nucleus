"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const serviceController_1 = require("../controllers/serviceController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = (0, express_1.Router)();
// Public routes
router.get('/', serviceController_1.getServices);
router.get('/:id', serviceController_1.getServiceById);
// Protected routes (Admin only)
router.post('/', authMiddleware_1.authenticateToken, serviceController_1.createService);
router.put('/:id', authMiddleware_1.authenticateToken, serviceController_1.updateService);
router.delete('/:id', authMiddleware_1.authenticateToken, serviceController_1.deleteService);
exports.default = router;
