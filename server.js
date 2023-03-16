const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const socketIOclient = require("socket.io-client");
const { WebsocketClient } = require("okx-api");
const multer = require("multer");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const connect = require("./config/connect");

const marketRoutes = require("./routes/marketRoutes");
const accountRoutes = require("./routes/accountRoutes");
const tradeRoutes = require("./routes/tradeRoutes");
const subAccountRoutes = require("./routes/subAccountRoutes");
const gridTradingRoutes = require("./routes/GridTradingRoutes");
const authRoutes = require("./routes/authRoutes");

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
const server = http.createServer(app);
const io = new Server(server);

app.use(cors());
app.use(express.json());
app.use(
  multer({ storage: fileStorage, fileFilter: fileFilter }).single("image")
);
connect();

app.get("/", async (req, res, next) => {
  const response = await axios.get(
    `https://www.okx.com/api/v5/market/tickers?instType=SPOT`
  );
  const data = response.data;
  const tickers = data.data.map((ticker) => {
    return {
      channel: "tickers",
      instId: ticker.instId,
    };
  });

  console.log(tickers)
  io.on("connection", (socket) => {
    // socket.on("Market", (arg) => {
    //   socket.broadcast.emit("Market", arg);
    // });

    const wsClient = new WebsocketClient({
      market: "prod",
    });
    let message = "";
    wsClient.on("update", (data) => {
      message = JSON.stringify(data, null, 2);
      socket.emit("Market", message);
    });

    // wsClient.subscribe({
    //   channel: "tickers",
    //   instId: "BTC-USDT",
    // });

    // Or an array of requests
    wsClient.subscribe(tickers);
  });

  // const socket01 = socketIOclient("http://localhost:3000");

  // socket01.on("connect", () => {
  //   console.log("Connected to server");

  //   const wsClient = new WebsocketClient({
  //     market: "prod",
  //   });
  //   let message = "";
  //   wsClient.on("update", (data) => {
  //     message = JSON.stringify(data, null, 2);
  //     socket01.emit("Market", message);
  //   });

  //   wsClient.subscribe({
  //     channel: "tickers",
  //     instId: "BTC-USDT",
  //   });
  // });

  // Socket 02
  const socket02 = socketIOclient("http://localhost:3000");

  socket02.on("connect", () => {
    console.log("Connected to server");
    socket02.on("Market", (data) => {
      console.log("Received message:", data);
    });
  });
});

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

server.listen(3000);
