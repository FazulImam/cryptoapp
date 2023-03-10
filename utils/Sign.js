const crypto = require("crypto");
require("dotenv").config({ path: "../.env" });

async function sign(timestamp, method, path, body = "") {
  const apiSecret = process.env.SECRET_KEY;

  const preHashString = timestamp + method + path + body; 
  return (signature = crypto
    .createHmac("sha256", `${apiSecret}`)
    .update(preHashString)
    .digest("base64"));

  //   headers = {
  //     "Content-Type" : "application/json",
  //     "OK-ACCESS-KEY": `${apiKey}`,
  //     "OK-ACCESS-SIGN": signature,
  //     "OK-ACCESS-TIMESTAMP": timestamp,
  //     "OK-ACCESS-PASSPHRASE": `${passPhrase}`,
  //   };

  //   return (response = await axios.post("https://www.okx.com" + path,msg, {
  //     headers,
  //     params
  //   }));
}

module.exports = sign;
