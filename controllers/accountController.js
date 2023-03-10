const sign = require("../utils/Sign");
const axios = require("axios");
require("dotenv").config({ path: "../.env" });


exports.getBalance = async (req,res,next) => {
    const query = req.query;
    const passPhrase = process.env.PASS;
    const apiKey = process.env.API_KEY;
    const timestamp = Date.now() / 1000;
    const search = req._parsedUrl.search || '';
    const path = `/api/v5/account/balance`

    const signature = await sign(timestamp,"GET",path+search);

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

exports.getPosition = async (req,res,next) => {
    const query = req.query;
    const passPhrase = process.env.PASS;
    const apiKey = process.env.API_KEY;
    const timestamp = Date.now() / 1000;
    const search = req._parsedUrl.search || '';
    const path = `/api/v5/account/positions`

    const signature = await sign(timestamp,"GET",path+search);

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


exports.getPositionHistory = async (req,res,next) => {
  const query = req.query;
  const passPhrase = process.env.PASS;
  const apiKey = process.env.API_KEY;
  const timestamp = Date.now() / 1000;
  const search = req._parsedUrl.search || '';
  const path = `/api/v5/account/positions-history`

  const signature = await sign(timestamp,"GET",path+search);

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


exports.getPositionRisk = async (req,res,next) => {
  const query = req.query;
  const passPhrase = process.env.PASS;
  const apiKey = process.env.API_KEY;
  const timestamp = Date.now() / 1000;
  const search = req._parsedUrl.search || '';
  const path = `/api/v5/account/account-position-risk`

  const signature = await sign(timestamp,"GET",path+search);

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