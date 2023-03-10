const express = require("express");
const {
  order,
  orderMany,
  cancelOrder,
  cancelManyOrder,
  amendOrder,
  amendBatchOrder,
  closePosition,
  orderDetails,
  orderList,
  orderHistoryWeek,
  orderHistoryMonth,
  details,
} = require("../controllers/tradeController");

const router = express.Router();

router.post("/order", order);
router.post("/batch-orders", orderMany);
router.post("/cancel", cancelOrder);
router.post("/cancel-batch-orders", cancelManyOrder);
router.put("/amend-order", amendOrder);
router.post("/amend-batch-orders", amendBatchOrder);
router.post("/close-position", closePosition);
router.post("/order-details", orderDetails);
router.get("/order-pending", orderList);
router.get("/order-history", orderHistoryWeek);
router.get("/order-history-month", orderHistoryMonth);
router.get("/fills",details)

module.exports = router;
