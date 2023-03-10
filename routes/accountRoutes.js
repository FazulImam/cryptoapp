const express = require("express");
const {
  getBalance,
  getPosition,
  getPositionHistory,
  getPositionRisk
} = require("../controllers/accountController");

const router = express.Router();

router.get("/balance", getBalance);
router.get("/positions", getPosition);
router.get("/positions-history", getPositionHistory);
router.get("/account-position-risk",getPositionRisk);

module.exports = router;
