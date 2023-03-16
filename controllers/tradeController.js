const sign = require("../utils/Sign");
const axios = require("axios");
const { validationResult } = require("express-validator");
require("dotenv").config({ path: "../.env" });

// @method   POST
// @route   /api/v1/order

exports.order = async (req, res, next) => {
  try {
    const { query, body } = req;
    const passPhrase = process.env.PASS;
    const apiKey = process.env.API_KEY;
    const timestamp = Date.now() / 1000;
    // getting the query => ?ordId=2510789768709120&instId=BTC-USDT
    const search = req._parsedUrl.search || "";
    const path = `/api/v5/trade/order`;

    const signature = await sign(
      timestamp,
      "POST",
      path + search,
      JSON.stringify(body)
    );

    headers = {
      "OK-ACCESS-KEY": `${apiKey}`,
      "OK-ACCESS-SIGN": signature,
      "OK-ACCESS-TIMESTAMP": timestamp,
      "OK-ACCESS-PASSPHRASE": `${passPhrase}`,
    };

    const response = await axios.post(`https://www.okx.com${path}`, body, {
      headers,
      params: query,
    });

    if (!response) {
      const err = new Error("Resource not found");
      err.statusCode = 404;
      throw err;
    }

    res.json({
      data: response.data,
    });
  } catch (error) {
    next(error);
  }
};

// @method   POST
// @route   /api/v1/batch-orders

exports.orderMany = async (req, res, next) => {
  try {
    const { query, body } = req;
    const passPhrase = process.env.PASS;
    const apiKey = process.env.API_KEY;
    const timestamp = Date.now() / 1000;
    const search = req._parsedUrl.search || "";
    const path = `/api/v5/trade/batch-orders`;

    const signature = await sign(
      timestamp,
      "POST",
      path + search,
      JSON.stringify(body)
    );

    headers = {
      "OK-ACCESS-KEY": `${apiKey}`,
      "OK-ACCESS-SIGN": signature,
      "OK-ACCESS-TIMESTAMP": timestamp,
      "OK-ACCESS-PASSPHRASE": `${passPhrase}`,
    };

    const response = await axios.post(`https://www.okx.com${path}`, body, {
      headers,
      params: query,
    });

    res.json({
      data: response.data,
    });
  } catch (error) {
    next(error);
  }
};

// @method   POST
// @route   /api/v1/cancel

exports.cancelOrder = async (req, res, next) => {
  try {
    const { query, body } = req;
    const passPhrase = process.env.PASS;
    const apiKey = process.env.API_KEY;
    const timestamp = Date.now() / 1000;
    const search = req._parsedUrl.search || "";
    const path = `/api/v5/trade/cancel-order`;

    const signature = await sign(
      timestamp,
      "POST",
      path + search,
      JSON.stringify(body)
    );

    headers = {
      "OK-ACCESS-KEY": `${apiKey}`,
      "OK-ACCESS-SIGN": signature,
      "OK-ACCESS-TIMESTAMP": timestamp,
      "OK-ACCESS-PASSPHRASE": `${passPhrase}`,
    };

    const response = await axios.post(`https://www.okx.com${path}`, body, {
      headers,
      params: query,
    });

    res.json({
      data: response.data,
    });
  } catch (error) {
    next(error);
  }
};

// @method   POST
// @route   /api/v1/cancel-batch-orders

exports.cancelManyOrder = async (req, res, next) => {
  try {
    const { query, body } = req;
    const passPhrase = process.env.PASS;
    const apiKey = process.env.API_KEY;
    const timestamp = Date.now() / 1000;
    const search = req._parsedUrl.search || "";
    const path = `/api/v5/trade/cancel-batch-orders`;

    const signature = await sign(
      timestamp,
      "POST",
      path + search,
      JSON.stringify(body)
    );

    headers = {
      "OK-ACCESS-KEY": `${apiKey}`,
      "OK-ACCESS-SIGN": signature,
      "OK-ACCESS-TIMESTAMP": timestamp,
      "OK-ACCESS-PASSPHRASE": `${passPhrase}`,
    };

    const response = await axios.post(`https://www.okx.com${path}`, body, {
      headers,
      params: query,
    });

    res.json({
      data: response.data,
    });
  } catch (error) {
    next(error);
  }
};

// @method   POST
// @route   /api/v1/amend-order

exports.amendOrder = async (req, res, next) => {
  try {
    const { query, body } = req;
    const passPhrase = process.env.PASS;
    const apiKey = process.env.API_KEY;
    const timestamp = Date.now() / 1000;
    const search = req._parsedUrl.search || "";
    const path = `/api/v5/trade/amend-order`;

    const signature = await sign(
      timestamp,
      "POST",
      path + search,
      JSON.stringify(body)
    );

    headers = {
      "OK-ACCESS-KEY": `${apiKey}`,
      "OK-ACCESS-SIGN": signature,
      "OK-ACCESS-TIMESTAMP": timestamp,
      "OK-ACCESS-PASSPHRASE": `${passPhrase}`,
    };

    const response = await axios.post(`https://www.okx.com${path}`, body, {
      headers,
      params: query,
    });

    res.json({
      data: response.data,
    });
  } catch (error) {
    next(error);
  }
};

// @method   POST
// @route   /api/v1/amend-batch-orders

exports.amendBatchOrder = async (req, res, next) => {
  try {
    const { query, body } = req;
    const passPhrase = process.env.PASS;
    const apiKey = process.env.API_KEY;
    const timestamp = Date.now() / 1000;
    const search = req._parsedUrl.search || "";
    const path = `/api/v5/trade/amend-batch-orders`;

    const signature = await sign(
      timestamp,
      "POST",
      path + search,
      JSON.stringify(body)
    );

    headers = {
      "OK-ACCESS-KEY": `${apiKey}`,
      "OK-ACCESS-SIGN": signature,
      "OK-ACCESS-TIMESTAMP": timestamp,
      "OK-ACCESS-PASSPHRASE": `${passPhrase}`,
    };

    const response = await axios.post(`https://www.okx.com${path}`, body, {
      headers,
      params: query,
    });

    res.json({
      data: response.data,
    });
  } catch (error) {
    next(error);
  }
};

// @method   POST
// @route   /api/v1/close-position

exports.closePosition = async (req, res, next) => {
  try {
    const { query, body } = req;
    const passPhrase = process.env.PASS;
    const apiKey = process.env.API_KEY;
    const timestamp = Date.now() / 1000;
    const search = req._parsedUrl.search || "";
    const path = `/api/v5/trade/close-position`;

    const signature = await sign(
      timestamp,
      "POST",
      path + search,
      JSON.stringify(body)
    );

    headers = {
      "OK-ACCESS-KEY": `${apiKey}`,
      "OK-ACCESS-SIGN": signature,
      "OK-ACCESS-TIMESTAMP": timestamp,
      "OK-ACCESS-PASSPHRASE": `${passPhrase}`,
    };

    const response = await axios.post(`https://www.okx.com${path}`, body, {
      headers,
      params: query,
    });

    res.json({
      data: response.data,
    });
  } catch (error) {
    next(error);
  }
};

// @method   POST
// @route   /api/v1/order-details

exports.orderDetails = async (req, res, next) => {
  try {
    const { query, body } = req;
    const passPhrase = process.env.PASS;
    const apiKey = process.env.API_KEY;
    const timestamp = Date.now() / 1000;
    const search = req._parsedUrl.search || "";
    const path = `/api/v5/trade/order`;

    const signature = await sign(
      timestamp,
      "POST",
      path + search,
      JSON.stringify(body)
    );

    headers = {
      "OK-ACCESS-KEY": `${apiKey}`,
      "OK-ACCESS-SIGN": signature,
      "OK-ACCESS-TIMESTAMP": timestamp,
      "OK-ACCESS-PASSPHRASE": `${passPhrase}`,
    };

    const response = await axios.post(`https://www.okx.com${path}`, body, {
      headers,
      params: query,
    });

    res.json({
      data: response.data,
    });
  } catch (error) {
    next();
  }
};

// @method   GET
// @route   /api/v1/order-pending

exports.orderList = async (req, res, next) => {
  try {
    const { query } = req;
    const passPhrase = process.env.PASS;
    const apiKey = process.env.API_KEY;
    const timestamp = Date.now() / 1000;
    const search = req._parsedUrl.search || "";
    const path = `/api/v5/trade/orders-pending`;

    const signature = await sign(timestamp, "GET", path + search, "");

    headers = {
      "OK-ACCESS-KEY": `${apiKey}`,
      "OK-ACCESS-SIGN": signature,
      "OK-ACCESS-TIMESTAMP": timestamp,
      "OK-ACCESS-PASSPHRASE": `${passPhrase}`,
    };

    const response = await axios.get(`https://www.okx.com${path}`, {
      headers,
      params: query,
    });

    res.json({
      data: response.data,
    });
  } catch (error) {
    next();
  }
};

// @method   GET
// @route   /api/v1/order-history

exports.orderHistoryWeek = async (req, res, next) => {
  try {
    const { query } = req;
  const passPhrase = process.env.PASS;
  const apiKey = process.env.API_KEY;
  const timestamp = Date.now() / 1000;
  const search = req._parsedUrl.search || "";
  const path = `/api/v5/trade/orders-history`;

  const signature = await sign(timestamp, "GET", path + search, "");

  headers = {
    "OK-ACCESS-KEY": `${apiKey}`,
    "OK-ACCESS-SIGN": signature,
    "OK-ACCESS-TIMESTAMP": timestamp,
    "OK-ACCESS-PASSPHRASE": `${passPhrase}`,
  };

  const response = await axios.get(`https://www.okx.com${path}`, {
    headers,
    params: query,
  });

  res.json({
    data: response.data,
  });
  } catch (error) {
    next(error);
  }
};

// @method   GET
// @route   /api/v1/order-history-archcive

exports.orderHistoryMonth = async (req, res, next) => {
  try {
    const { query } = req;
  const passPhrase = process.env.PASS;
  const apiKey = process.env.API_KEY;
  const timestamp = Date.now() / 1000;
  const search = req._parsedUrl.search || "";
  const path = `/api/v5/trade/orders-history-archive`;

  const signature = await sign(timestamp, "GET", path + search, "");

  headers = {
    "OK-ACCESS-KEY": `${apiKey}`,
    "OK-ACCESS-SIGN": signature,
    "OK-ACCESS-TIMESTAMP": timestamp,
    "OK-ACCESS-PASSPHRASE": `${passPhrase}`,
  };

  const response = await axios.get(`https://www.okx.com${path}`, {
    headers,
    params: query,
  });

  res.json({
    data: response.data,
  });
  } catch (error) {
    next(error)
  }
};

// @method   GET
// @route   /api/v1/fills
// @description  get last 3 days transaction detail

exports.details = async (req, res, next) => {
  try {
    const { query } = req;
  const passPhrase = process.env.PASS;
  const apiKey = process.env.API_KEY;
  const timestamp = Date.now() / 1000;
  const search = req._parsedUrl.search || "";
  const path = `/api/v5/trade/fills`;

  const signature = await sign(timestamp, "GET", path + search, "");

  headers = {
    "OK-ACCESS-KEY": `${apiKey}`,
    "OK-ACCESS-SIGN": signature,
    "OK-ACCESS-TIMESTAMP": timestamp,
    "OK-ACCESS-PASSPHRASE": `${passPhrase}`,
  };

  const response = await axios.get(`https://www.okx.com${path}`, {
    headers,
    params: query,
  });

  res.json({
    data: response.data,
  });
  } catch (error) {
    next(error)
  }
};

// @method   GET
// @route   /api/v1/fills
// @description  get last 3 months transaction detail

exports.detailsHistory = async (req, res, next) => {
  try {
    const { query } = req;
  const passPhrase = process.env.PASS;
  const apiKey = process.env.API_KEY;
  const timestamp = Date.now() / 1000;
  const search = req._parsedUrl.search || "";
  const path = `/api/v5/trade/fills-history`;

  const signature = await sign(timestamp, "GET", path + search, "");

  headers = {
    "OK-ACCESS-KEY": `${apiKey}`,
    "OK-ACCESS-SIGN": signature,
    "OK-ACCESS-TIMESTAMP": timestamp,
    "OK-ACCESS-PASSPHRASE": `${passPhrase}`,
  };

  const response = await axios.get(`https://www.okx.com${path}`, {
    headers,
    params: query,
  });

  res.json({
    data: response.data,
  });
  } catch (error) {
    next(error)
  }
};

// @method   POST
// @route   /api/v1/order-algo

exports.orderAlgo = async (req, res, next) => {
  try {
    const { query, body } = req;
  const passPhrase = process.env.PASS;
  const apiKey = process.env.API_KEY;
  const timestamp = Date.now() / 1000;
  const search = req._parsedUrl.search || "";
  console.log(search);
  const path = `/api/v5/trade/order-algo`;

  const signature = await sign(
    timestamp,
    "POST",
    path + search,
    JSON.stringify(body)
  );

  headers = {
    "OK-ACCESS-KEY": `${apiKey}`,
    "OK-ACCESS-SIGN": signature,
    "OK-ACCESS-TIMESTAMP": timestamp,
    "OK-ACCESS-PASSPHRASE": `${passPhrase}`,
  };

  const response = await axios.post(`https://www.okx.com${path}`, body, {
    headers,
    params: query,
  });

  res.json({
    data: response.data,
  });
  } catch (error) {
    next(error)
  }
};

// @method   POST
// @route   /api/v1/cancel-algos

exports.cancelAlgo = async (req, res, next) => {
  try {
    const { query, body } = req;
  const passPhrase = process.env.PASS;
  const apiKey = process.env.API_KEY;
  const timestamp = Date.now() / 1000;
  const search = req._parsedUrl.search || "";
  console.log(search);
  const path = `/api/v5/trade/cancel-algos`;

  const signature = await sign(
    timestamp,
    "POST",
    path + search,
    JSON.stringify(body)
  );

  headers = {
    "OK-ACCESS-KEY": `${apiKey}`,
    "OK-ACCESS-SIGN": signature,
    "OK-ACCESS-TIMESTAMP": timestamp,
    "OK-ACCESS-PASSPHRASE": `${passPhrase}`,
  };

  const response = await axios.post(`https://www.okx.com${path}`, body, {
    headers,
    params: query,
  });

  res.json({
    data: response.data,
  });
  } catch (error) {
    next(error)
  }
};

// @method   POST
// @route   /api/v1/cancel-advance-algos

exports.cancelAdvanceAlgo = async (req, res, next) => {
  try {
    const { query, body } = req;
  const passPhrase = process.env.PASS;
  const apiKey = process.env.API_KEY;
  const timestamp = Date.now() / 1000;
  const search = req._parsedUrl.search || "";
  console.log(search);
  const path = `/api/v5/trade/cancel-advance-algos`;

  const signature = await sign(
    timestamp,
    "POST",
    path + search,
    JSON.stringify(body)
  );

  headers = {
    "OK-ACCESS-KEY": `${apiKey}`,
    "OK-ACCESS-SIGN": signature,
    "OK-ACCESS-TIMESTAMP": timestamp,
    "OK-ACCESS-PASSPHRASE": `${passPhrase}`,
  };

  const response = await axios.post(`https://www.okx.com${path}`, body, {
    headers,
    params: query,
  });

  res.json({
    data: response.data,
  });
  } catch (error) {
    next(error)
  }
};

// @method   GET
// @route   /api/v1/orders-algo-pending

exports.algoOrderDetail = async (req, res, next) => {
  try {
    const { query } = req;
    const passPhrase = process.env.PASS;
    const apiKey = process.env.API_KEY;
    const timestamp = Date.now() / 1000;
    const search = req._parsedUrl.search || "";
    const path = `/api/v5/trade/order-algo`;

    const signature = await sign(timestamp, "GET", path + search, "");

    headers = {
      "OK-ACCESS-KEY": `${apiKey}`,
      "OK-ACCESS-SIGN": signature,
      "OK-ACCESS-TIMESTAMP": timestamp,
      "OK-ACCESS-PASSPHRASE": `${passPhrase}`,
    };

    const response = await axios.get(`https://www.okx.com${path}`, {
      headers,
      params: query,
    });

    res.json({
      data: response.data,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error,
    });
  }
};

// @method   GET
// @route   /api/v1/orders-algo-pending

exports.algoOrdersPending = async (req, res, next) => {
  try {
    const { query } = req;
    const passPhrase = process.env.PASS;
    const apiKey = process.env.API_KEY;
    const timestamp = Date.now() / 1000;
    const search = req._parsedUrl.search || "";
    const path = `/api/v5/trade/orders-algo-pending`;

    const signature = await sign(timestamp, "GET", path + search, "");

    headers = {
      "OK-ACCESS-KEY": `${apiKey}`,
      "OK-ACCESS-SIGN": signature,
      "OK-ACCESS-TIMESTAMP": timestamp,
      "OK-ACCESS-PASSPHRASE": `${passPhrase}`,
    };

    const response = await axios.get(`https://www.okx.com${path}`, {
      headers,
      params: query,
    });

    res.json({
      data: response.data,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error,
    });
  }
};

// @method   GET
// @route   /api/v1/orders-algo-history

exports.algoOrderHistory = async (req, res, next) => {
  try {
    const { query } = req;
    const passPhrase = process.env.PASS;
    const apiKey = process.env.API_KEY;
    const timestamp = Date.now() / 1000;
    const search = req._parsedUrl.search || "";
    const path = `/api/v5/trade/orders-algo-history`;

    const signature = await sign(timestamp, "GET", path + search, "");

    headers = {
      "OK-ACCESS-KEY": `${apiKey}`,
      "OK-ACCESS-SIGN": signature,
      "OK-ACCESS-TIMESTAMP": timestamp,
      "OK-ACCESS-PASSPHRASE": `${passPhrase}`,
    };

    const response = await axios.get(`https://www.okx.com${path}`, {
      headers,
      params: query,
    });

    res.json({
      data: response.data,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error,
    });
  }
};

// @method   GET
// @route   /api/v1/easy-convert-currency-list

exports.currencyList = async (req, res, next) => {
  try {
    const { query } = req;
    const passPhrase = process.env.PASS;
    const apiKey = process.env.API_KEY;
    const timestamp = Date.now() / 1000;
    const search = req._parsedUrl.search || "";
    const path = `/api/v5/trade/easy-convert-currency-list`;

    const signature = await sign(timestamp, "GET", path + search, "");

    headers = {
      "OK-ACCESS-KEY": `${apiKey}`,
      "OK-ACCESS-SIGN": signature,
      "OK-ACCESS-TIMESTAMP": timestamp,
      "OK-ACCESS-PASSPHRASE": `${passPhrase}`,
    };

    const response = await axios.get(`https://www.okx.com${path}`, {
      headers,
      params: query,
    });

    res.json({
      data: response.data,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error,
    });
  }
};

// @method   POST
// @route   /api/v1/cancel-advance-algos

exports.easyConvert = async (req, res, next) => {
  try {
    const { query, body } = req;
    const passPhrase = process.env.PASS;
    const apiKey = process.env.API_KEY;
    const timestamp = Date.now() / 1000;
    const search = req._parsedUrl.search || "";
    console.log(search);
    const path = `/api/v5/trade/easy-convert`;

    const signature = await sign(
      timestamp,
      "POST",
      path + search,
      JSON.stringify(body)
    );

    headers = {
      "OK-ACCESS-KEY": `${apiKey}`,
      "OK-ACCESS-SIGN": signature,
      "OK-ACCESS-TIMESTAMP": timestamp,
      "OK-ACCESS-PASSPHRASE": `${passPhrase}`,
    };

    const response = await axios.post(`https://www.okx.com${path}`, body, {
      headers,
      params: query,
    });

    res.json({
      data: response.data,
    });
  } catch (error) {
    const err = error;
    res.status(400).json({
      success: false,
      message: err,
    });
  }
};

// @method   GET
// @route   /api/v1/easy-convert-history

exports.easyConvertHistory = async (req, res, next) => {
  try {
    const { query } = req;
    const passPhrase = process.env.PASS;
    const apiKey = process.env.API_KEY;
    const timestamp = Date.now() / 1000;
    const search = req._parsedUrl.search || "";
    const path = `/api/v5/trade/easy-convert-history`;

    const signature = await sign(timestamp, "GET", path + search, "");

    headers = {
      "OK-ACCESS-KEY": `${apiKey}`,
      "OK-ACCESS-SIGN": signature,
      "OK-ACCESS-TIMESTAMP": timestamp,
      "OK-ACCESS-PASSPHRASE": `${passPhrase}`,
    };

    const response = await axios.get(`https://www.okx.com${path}`, {
      headers,
      params: query,
    });

    res.json({
      data: response.data,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error,
    });
  }
};

// @method   GET
// @route   /api/v1/one-click-repay-currency-list

exports.oneClickRepayList = async (req, res, next) => {
  try {
    const { query } = req;
    const passPhrase = process.env.PASS;
    const apiKey = process.env.API_KEY;
    const timestamp = Date.now() / 1000;
    const search = req._parsedUrl.search || "";
    const path = `/api/v5/trade/one-click-repay-currency-list`;

    const signature = await sign(timestamp, "GET", path + search, "");

    headers = {
      "OK-ACCESS-KEY": `${apiKey}`,
      "OK-ACCESS-SIGN": signature,
      "OK-ACCESS-TIMESTAMP": timestamp,
      "OK-ACCESS-PASSPHRASE": `${passPhrase}`,
    };

    const response = await axios.get(`https://www.okx.com${path}`, {
      headers,
      params: query,
    });

    res.json({
      data: response.data,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error,
    });
  }
};

// @method   POST
// @route   /api/v1/one-click-repay

exports.oneClickRepay = async (req, res, next) => {
  try {
    const { query, body } = req;
    const passPhrase = process.env.PASS;
    const apiKey = process.env.API_KEY;
    const timestamp = Date.now() / 1000;
    const search = req._parsedUrl.search || "";
    console.log(search);
    const path = `/api/v5/trade/one-click-repay`;

    const signature = await sign(
      timestamp,
      "POST",
      path + search,
      JSON.stringify(body)
    );

    headers = {
      "OK-ACCESS-KEY": `${apiKey}`,
      "OK-ACCESS-SIGN": signature,
      "OK-ACCESS-TIMESTAMP": timestamp,
      "OK-ACCESS-PASSPHRASE": `${passPhrase}`,
    };

    const response = await axios.post(`https://www.okx.com${path}`, body, {
      headers,
      params: query,
    });

    res.json({
      data: response.data,
    });
  } catch (error) {
    const err = error;
    res.status(400).json({
      success: false,
      message: err,
    });
  }
};

// @method   GET
// @route   /api/v1/one-click-repay-currency-list

exports.oneClickRepayHistory = async (req, res, next) => {
  try {
    const { query } = req;
    const passPhrase = process.env.PASS;
    const apiKey = process.env.API_KEY;
    const timestamp = Date.now() / 1000;
    const search = req._parsedUrl.search || "";
    const path = `/api/v5/trade/one-click-repay-history`;

    const signature = await sign(timestamp, "GET", path + search, "");

    headers = {
      "OK-ACCESS-KEY": `${apiKey}`,
      "OK-ACCESS-SIGN": signature,
      "OK-ACCESS-TIMESTAMP": timestamp,
      "OK-ACCESS-PASSPHRASE": `${passPhrase}`,
    };

    const response = await axios.get(`https://www.okx.com${path}`, {
      headers,
      params: query,
    });

    res.json({
      data: response.data,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error,
    });
  }
};
