const express = require("express");
const Invoice = require("../models/Invoice");
const router = express.Router();

router.post("/upload", async (req, res) => {
  const invoice = await Invoice.create(req.body);
  res.json(invoice);
});

router.get("/", async (req, res) => {
  const invoices = await Invoice.find();
  res.json(invoices);
});

module.exports = router;
