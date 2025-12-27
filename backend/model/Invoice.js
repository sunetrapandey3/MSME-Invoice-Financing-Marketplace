const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
  msmeName: String,
  amount: Number,
  dueDate: String,
  ipfsHash: String,
  status: { type: String, default: "Pending" }
});

module.exports = mongoose.model("Invoice", invoiceSchema);
