const axios = require("axios");

// // method   GET
// // route    /api/v1/market/ticker?instid=BTC-USDT
// exports.getTicker = async (req,res,next) => {
//     const instid = req.query.instid;

//     const response = await axios.get(`https://www.okx.com/api/v5/market/ticker?instId=${instid}`);
//     res.status(200).json({
//         success : true,
//         data : response.data
//     })

// }

// method   GET
// route    /api/v1/market/tickers?insttype=SWAP
exports.getTickers = async (req,res,next) => {
    const insttype = req.query.insttype;

    const response = await axios.get(`https://www.okx.com/api/v5/market/tickers?instType=SPOT`);
    res.status(200).json({
        success : true,
        count : response.data.data.length,
        data : response.data,
    })

}

// // method   GET
// // route    /api/v1/market/index-tickers?instid=BTC-USDT
// exports.getIndex = async (req,res,next) => {
//     const instid = req.query.instid;

//     const response = await axios.get(`https://www.okx.com/api/v5/market/index-tickers?instId=${instid}`);
//     res.status(200).json({
//         data : response.data
//     })

// }

// // method   GET
// // route    /api/v1/market/books?instId=BTC-USDT
// exports.getBooks = async (req,res,next) => {
//     const instid = req.query.instid;

//     const response = await axios.get(`https://www.okx.com/api/v5/market/books?instId=${instid}`);
//     res.status(200).json({
//         data : response.data
//     })

// }

// // method   GET
// // route    /api/v1/market/books-lite?instId=BTC-USDT
// exports.getBooksLite = async (req,res,next) => {
//     const instid = req.query.instid;

//     const response = await axios.get(`https://www.okx.com/api/v5/market/books-lite?instId=${instid}`);
//     res.status(200).json({
//         data : response.data
//     })

// }

// // method   GET
// // route    /api/v1/market/candles?instId=BTC-USDT
// exports.getCandles = async (req,res,next) => {
//     const instid = req.query.instid;

//     const response = await axios.get(`https://www.okx.com/api/v5/market/candles?instId=${instid}`);
//     res.status(200).json({
//         data : response.data
//     })

// }

// exports.getCandlesHistory = async (req,res,next) => {
//     const instid = req.query.instid;

//     const response = await axios.get(`https://www.okx.com/api/v5/market/history-candles?instId=${instid}`);
//     res.status(200).json({
//         data : response.data
//     })

// }

