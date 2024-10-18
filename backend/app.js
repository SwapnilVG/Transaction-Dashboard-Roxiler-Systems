const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'))


mongoose.connect(process.env.MONGO_URI, {
}).then(() => {
    console.log('MongoDB connected');
}).catch((err) => {
    console.error('Connection error', err);
});

app.get("/api", (req, res) => {
    res.send("Hello from the backend!");
  });

const transactionRoutes = require("./routes/transactionRoutes");
app.use("/", transactionRoutes);

module.exports = app;
