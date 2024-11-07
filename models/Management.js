const mongoose = require("mongoose");

const policySchema = new mongoose.Schema({
  name: String,
  issueDate: String,
  reviewDate: String,
  institution: String,
  valid: Boolean,
  download: {
    word: Boolean,
    pdf: Boolean,
  },
});

const managementSchema = new mongoose.Schema({
  name: String,
  policies: [policySchema],
});

module.exports = mongoose.model("Management", managementSchema);
