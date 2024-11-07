const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("../config/db");

const authRoutes = require("../routes/auth");
const managementRoutes = require("../routes/managementRoutes");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Policies Mgt API" });
});

app.use("/api/auth", authRoutes);
app.use("/api/managements", managementRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
