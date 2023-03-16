const express = require("express");

const {
  getTickers,
//   getTicker,
//   getIndex,
//   getBooks,
//   getBooksLite,
//   getCandles,
//   getCandlesHistory
} = require("../controllers/marketControllers");

const router = express.Router();

// router.get("/ticker", getTicker);
router.get("/tickers", getTickers);

// router.get("/index", getIndex);
// router.get("/books", getBooks);

// router.get("/books-lite", getBooksLite);
// router.get("/candles",getCandles);

// router.get("/history",getCandlesHistory);

module.exports = router;
