const express = require("express");
const multer = require("multer");
require("dotenv").config();

const connect = require("./config/connect");

const marketRoutes = require("./routes/marketRoutes");
const accountRoutes = require("./routes/accountRoutes");
const tradeRoutes = require("./routes/tradeRoutes");
const subAccountRoutes = require("./routes/subAccountRoutes");
const gridTradingRoutes = require("./routes/GridTradingRoutes");
const authRoutes = require("./routes/authRoutes");
const protected = require("./utils/protected");

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const app = express();

app.use(express.json());
app.use(multer({storage : fileStorage, fileFilter : fileFilter}).single('image'))
connect();

app.use("/api/v1/account", accountRoutes);
app.use("/api/v1/market", marketRoutes);
app.use("/api/v1/trade", tradeRoutes);
app.use("/api/v1/users", subAccountRoutes);
app.use("/api/v1/tradingBot/grid", gridTradingRoutes);
app.use("/api/v1", authRoutes);

app.use((err, req, res, next) => {
  const status = err.statusCode || 500;
  const message = err.message || "Server Error";
  return res.status(status).json({
    message,
  });
});

app.listen(3000);
