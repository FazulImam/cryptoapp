const express = require("express");

const {gridTradingOrder} = require("../controllers/GridTradingController");

const router = express.Router();

router.post("/order-algo",gridTradingOrder);

module.exports = router;