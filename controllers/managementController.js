const Management = require("../models/Management");

// Get all managements
const getAllManagements = async (req, res) => {
  try {
    const managements = await Management.find();
    res.json(managements);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new management
const createManagement = async (req, res) => {
  const management = new Management({
    name: req.body.name,
    policies: req.body.policies,
  });

  try {
    const newManagement = await management.save();
    res.status(201).json(newManagement);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update management
const updateManagement = async (req, res) => {
  try {
    const management = await Management.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.json(management);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete management
const deleteManagement = async (req, res) => {
  try {
    await Management.findOneAndDelete({ id: req.params.id });
    res.json({ message: "Management deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllManagements,
  createManagement,
  updateManagement,
  deleteManagement,
};
