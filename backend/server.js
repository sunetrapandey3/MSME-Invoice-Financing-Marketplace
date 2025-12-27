const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/invoices", require("./routes/invoiceRoutes"));

app.listen(5000, () => console.log("Backend running on port 5000 ⚡"));
