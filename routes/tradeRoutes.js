const express = require("express");
const {body} = require("express-validator")
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
  detailsHistory,
  orderAlgo,
  cancelAlgo,
  cancelAdvanceAlgo,
  algoOrdersPending,
  algoOrderDetail,
  algoOrderHistory,
  currencyList,
  easyConvert,
  easyConvertHistory,
  oneClickRepayList,
  oneClickRepay,
  oneClickRepayHistory
} = require("../controllers/tradeController");

const router = express.Router();

router.post("/order", order);
router.post("/batch-orders", orderMany);
router.post("/cancel", cancelOrder);
router.post("/cancel-batch-orders", cancelManyOrder);
router.post("/amend-order", amendOrder);
router.post("/amend-batch-orders", amendBatchOrder);
router.post("/close-position", closePosition);
router.post("/order-details", orderDetails);
router.get("/order-pending", orderList);
router.get("/order-history", orderHistoryWeek);
router.get("/order-history-archive", orderHistoryMonth);
router.get("/fills", details);
router.get("/fills-history", detailsHistory);
router.post("/order-algo", orderAlgo);
router.post("/cancel-algos", cancelAlgo);
router.post("/cancel-advance-algos", cancelAdvanceAlgo);
router.get("/order-algo",algoOrderDetail)
router.get("/orders-algo-pending",algoOrdersPending);
router.get("/orders-algo-history",algoOrderHistory);
router.get("/easy-convert-currency-list",currencyList);
router.post("/easy-convert",easyConvert);
router.get("/easy-convert-history",easyConvertHistory);
router.get("/one-click-repay-currency-list",oneClickRepayList);
router.post("/one-click-repay",oneClickRepay);
router.get("/one-click-repay-history",oneClickRepayHistory)

module.exports = router;
