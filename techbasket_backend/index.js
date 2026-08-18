"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
// Load environment variables
dotenv.config();
const app = express();
const PORT = parseInt(process.env.PORT || '5000', 10);
// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Basic Route
app.get('/', (req, res) => {
    res.json({ message: 'Server is running' });
});
// Global Error Handler (Middleware order matters)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});
// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
exports.default = app;
