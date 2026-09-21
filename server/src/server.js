"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const models_1 = require("./models");
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const serviceRoutes_1 = __importDefault(require("./routes/serviceRoutes"));
const blogRoutes_1 = __importDefault(require("./routes/blogRoutes"));
const reviewRoutes_1 = __importDefault(require("./routes/reviewRoutes"));
// Load env vars
dotenv_1.default.config();
const app = (0, express_1.default)();
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Routes
app.use('/api/auth', authRoutes_1.default);
app.use('/api/services', serviceRoutes_1.default);
app.use('/api/blogs', blogRoutes_1.default);
app.use('/api/reviews', reviewRoutes_1.default);
app.get('/', (req, res) => {
    res.send('Hospital API is running...');
});
const PORT = process.env.PORT || 5000;
// Connect to Database and start server
(0, models_1.initDb)().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
