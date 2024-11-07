const express = require("express");
const router = express.Router();
const {
  getAllManagements,
  createManagement,
  updateManagement,
  deleteManagement,
} = require("../controllers/managementController");

// Routes
router.get("/", getAllManagements);
router.post("/", createManagement);
router.put("/:id", updateManagement);
router.delete("/:id", deleteManagement);

module.exports = router;
