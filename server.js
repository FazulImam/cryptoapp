const express = require("express");
require("dotenv").config();

const marketRoutes = require("./routes/marketRoutes");
const accountRoutes = require("./routes/accountRoutes");
const tradeRoutes = require("./routes/tradeRoutes");
const subAccountRoutes = require("./routes/subAccountRoutes");
const gridTradingRoutes = require("./routes/GridTradingRoutes");

const app = express();

app.use(express.json());

app.use('/api/v1/account',accountRoutes);
app.use('/api/v1/market',marketRoutes);
app.use("/api/v1/trade",tradeRoutes);
app.use("/api/v1/users",subAccountRoutes)
app.use("/api/v1/tradingBot/grid",gridTradingRoutes); 

app.listen(3000);