const express = require("express");
const connectDB = require("./config/db");
const managementRoutes = require("./routes/managementRoutes");

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api/managements", managementRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
