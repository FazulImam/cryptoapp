const sign = require("../utils/Sign");
const axios = require("axios");
require("dotenv").config({path: "../.env"});


exports.subList = async (req,res,next) => {
    const {query,body} = req;
    const passPhrase = process.env.PASS;
    const apiKey = process.env.API_KEY;
    const timestamp = Date.now() / 1000;
    const search = req._parsedUrl.search || '';
    const path = `/api/v5/users/subaccount/list`

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
