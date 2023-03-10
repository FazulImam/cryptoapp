const express = require("express");

const {subList} = require("../controllers/subAccountController");

const router = express.Router();

router.get("/subaccount/list",subList);

module.exports = router;