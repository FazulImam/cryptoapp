const mongoose = require("mongoose");
const connect = async () => {
    const conn = await mongoose.connect(`${process.env.MONGODB_URI}`);
    console.log(`Connected to ${conn.connection.host}:${conn.connection.port}/${conn.connection.name}`)
}

module.exports = connect;