const sign = require("../utils/Sign");
const axios = require("axios");
require("dotenv").config({ path: "../.env" });


exports.order = async (req,res,next) => {
    const {query,body} = req;
    const passPhrase = process.env.PASS;
    const apiKey = process.env.API_KEY;
    const timestamp = Date.now() / 1000;
    const search = req._parsedUrl.search || '';
    const path = `/api/v5/trade/order`

    const signature = await sign(timestamp,"POST",path+search,JSON.stringify(body));

    headers = {
        "OK-ACCESS-KEY": `${apiKey}`,
        "OK-ACCESS-SIGN": signature,
        "OK-ACCESS-TIMESTAMP": timestamp,
        "OK-ACCESS-PASSPHRASE": `${passPhrase}`,
      };

      const response = await axios.post(`https://www.okx.com${path}`,body,{
        headers,
        params:query
      })

    res.json({
        data : response.data
    })
} 


exports.orderMany = async (req,res,next) => {
    const {query,body} = req;
    const passPhrase = process.env.PASS;
    const apiKey = process.env.API_KEY;
    const timestamp = Date.now() / 1000;
    const search = req._parsedUrl.search || '';
    const path = `/api/v5/trade/batch-orders`

    const signature = await sign(timestamp,"POST",path+search,JSON.stringify(body));

    headers = {
        "OK-ACCESS-KEY": `${apiKey}`,
        "OK-ACCESS-SIGN": signature,
        "OK-ACCESS-TIMESTAMP": timestamp,
        "OK-ACCESS-PASSPHRASE": `${passPhrase}`,
      };

      const response = await axios.post(`https://www.okx.com${path}`,body,{
        headers,
        params:query
      })

    res.json({
        data : response.data
    })
} 


exports.cancelOrder = async (req,res,next) => {
    const {query,body} = req;
    const passPhrase = process.env.PASS;
    const apiKey = process.env.API_KEY;
    const timestamp = Date.now() / 1000;
    const search = req._parsedUrl.search || '';
    const path = `/api/v5/trade/cancel-order`

    const signature = await sign(timestamp,"POST",path+search,JSON.stringify(body));

    headers = {
        "OK-ACCESS-KEY": `${apiKey}`,
        "OK-ACCESS-SIGN": signature,
        "OK-ACCESS-TIMESTAMP": timestamp,
        "OK-ACCESS-PASSPHRASE": `${passPhrase}`,
      };

      const response = await axios.post(`https://www.okx.com${path}`,body,{
        headers,
        params:query
      })

    res.json({
        data : response.data
    })
}

exports.cancelManyOrder = async (req,res,next) => {
  const {query,body} = req;
  const passPhrase = process.env.PASS;
  const apiKey = process.env.API_KEY;
  const timestamp = Date.now() / 1000;
  const search = req._parsedUrl.search || '';
  const path = `/api/v5/trade/cancel-batch-orders`

  const signature = await sign(timestamp,"POST",path+search,JSON.stringify(body));

  headers = {
      "OK-ACCESS-KEY": `${apiKey}`,
      "OK-ACCESS-SIGN": signature,
      "OK-ACCESS-TIMESTAMP": timestamp,
      "OK-ACCESS-PASSPHRASE": `${passPhrase}`,
    };

    const response = await axios.post(`https://www.okx.com${path}`,body,{
      headers,
      params:query
    })

  res.json({
      data : response.data
  })
} 


exports.amendOrder = async (req,res,next) => {
  const {query,body} = req;
  const passPhrase = process.env.PASS;
  const apiKey = process.env.API_KEY;
  const timestamp = Date.now() / 1000;
  const search = req._parsedUrl.search || '';
  const path = `/api/v5/trade/amend-order`

  const signature = await sign(timestamp,"POST",path+search,JSON.stringify(body));

  headers = {
      "OK-ACCESS-KEY": `${apiKey}`,
      "OK-ACCESS-SIGN": signature,
      "OK-ACCESS-TIMESTAMP": timestamp,
      "OK-ACCESS-PASSPHRASE": `${passPhrase}`,
    };

    const response = await axios.post(`https://www.okx.com${path}`,body,{
      headers,
      params:query
    })

  res.json({
      data : response.data
  })
}

exports.amendBatchOrder = async (req,res,next) => {
  const {query,body} = req;
  const passPhrase = process.env.PASS;
  const apiKey = process.env.API_KEY;
  const timestamp = Date.now() / 1000;
  const search = req._parsedUrl.search || '';
  const path = `/api/v5/trade/amend-batch-orders`

  const signature = await sign(timestamp,"POST",path+search,JSON.stringify(body));

  headers = {
      "OK-ACCESS-KEY": `${apiKey}`,
      "OK-ACCESS-SIGN": signature,
      "OK-ACCESS-TIMESTAMP": timestamp,
      "OK-ACCESS-PASSPHRASE": `${passPhrase}`,
    };

    const response = await axios.post(`https://www.okx.com${path}`,body,{
      headers,
      params:query
    })

  res.json({
      data : response.data
  })
} 


exports.closePosition = async (req,res,next) => {
  const {query,body} = req;
  const passPhrase = process.env.PASS;
  const apiKey = process.env.API_KEY;
  const timestamp = Date.now() / 1000;
  const search = req._parsedUrl.search || '';
  const path = `/api/v5/trade/close-position`

  const signature = await sign(timestamp,"POST",path+search,JSON.stringify(body));

  headers = {
      "OK-ACCESS-KEY": `${apiKey}`,
      "OK-ACCESS-SIGN": signature,
      "OK-ACCESS-TIMESTAMP": timestamp,
      "OK-ACCESS-PASSPHRASE": `${passPhrase}`,
    };

    const response = await axios.post(`https://www.okx.com${path}`,body,{
      headers,
      params:query
    })

  res.json({
      data : response.data
  })
} 


exports.orderDetails = async (req,res,next) => {
  const {query,body} = req;
  const passPhrase = process.env.PASS;
  const apiKey = process.env.API_KEY;
  const timestamp = Date.now() / 1000;
  const search = req._parsedUrl.search || '';
  const path = `/api/v5/trade/order`

  const signature = await sign(timestamp,"POST",path+search,JSON.stringify(body));

  headers = {
      "OK-ACCESS-KEY": `${apiKey}`,
      "OK-ACCESS-SIGN": signature,
      "OK-ACCESS-TIMESTAMP": timestamp,
      "OK-ACCESS-PASSPHRASE": `${passPhrase}`,
    };

    const response = await axios.post(`https://www.okx.com${path}`,body,{
      headers,
      params:query
    })

  res.json({
      data : response.data
  })
} 


exports.orderList = async (req,res,next) => {
  const {query,body} = req;
  const passPhrase = process.env.PASS;
  const apiKey = process.env.API_KEY;
  const timestamp = Date.now() / 1000;
  const search = req._parsedUrl.search || '';
  const path = `/api/v5/trade/orders-pending`

  const signature = await sign(timestamp,"GET",path+search,JSON.stringify(body));

  headers = {
      "OK-ACCESS-KEY": `${apiKey}`,
      "OK-ACCESS-SIGN": signature,
      "OK-ACCESS-TIMESTAMP": timestamp,
      "OK-ACCESS-PASSPHRASE": `${passPhrase}`,
    };

    const response = await axios.get(`https://www.okx.com${path}`,body,{
      headers,
      params:query
    })

  res.json({
      data : response.data
  })
}

exports.orderHistoryWeek = async (req,res,next) => {
  const {query,body} = req;
  const passPhrase = process.env.PASS;
  const apiKey = process.env.API_KEY;
  const timestamp = Date.now() / 1000;
  const search = req._parsedUrl.search || '';
  const path = `/api/v5/trade/orders-history`

  const signature = await sign(timestamp,"GET",path+search,JSON.stringify(body));

  headers = {
      "OK-ACCESS-KEY": `${apiKey}`,
      "OK-ACCESS-SIGN": signature,
      "OK-ACCESS-TIMESTAMP": timestamp,
      "OK-ACCESS-PASSPHRASE": `${passPhrase}`,
    };

    const response = await axios.get(`https://www.okx.com${path}`,body,{
      headers,
      params:query
    })

  res.json({
      data : response.data
  })
}

exports.orderHistoryMonth = async (req,res,next) => {
  const {query,body} = req;
  const passPhrase = process.env.PASS;
  const apiKey = process.env.API_KEY;
  const timestamp = Date.now() / 1000;
  const search = req._parsedUrl.search || '';
  const path = `/api/v5/trade/orders-history-archive`

  const signature = await sign(timestamp,"GET",path+search,JSON.stringify(body));

  headers = {
      "OK-ACCESS-KEY": `${apiKey}`,
      "OK-ACCESS-SIGN": signature,
      "OK-ACCESS-TIMESTAMP": timestamp,
      "OK-ACCESS-PASSPHRASE": `${passPhrase}`,
    };

    const response = await axios.get(`https://www.okx.com${path}`,{
      headers,
      params:query
    })

  res.json({
      data : response.data
  })
} 


exports.details = async (req,res,next) => {
  const {query,body} = req;
  const passPhrase = process.env.PASS;
  const apiKey = process.env.API_KEY;
  const timestamp = Date.now() / 1000;
  const search = req._parsedUrl.search || '';
  const path = `/api/v5/trade/fills`

  const signature = await sign(timestamp,"GET",path+search,JSON.stringify(body));

  headers = {
      "OK-ACCESS-KEY": `${apiKey}`,
      "OK-ACCESS-SIGN": signature,
      "OK-ACCESS-TIMESTAMP": timestamp,
      "OK-ACCESS-PASSPHRASE": `${passPhrase}`,
    };

    const response = await axios.get(`https://www.okx.com${path}`,body,{
      headers,
      params:query
    })

  res.json({
      data : response.data
  })
} 