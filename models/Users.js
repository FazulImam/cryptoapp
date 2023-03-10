const mongooose = require("mongoose");

const userSchema = new mongooose.Schema({
    Name : {
        type : String,
        required: true
    },
    Email : {
        type : String,
        required : true
    },
    Password : {
        type : String,
        required : true
    },
})

module.exports = mongooose.model("User",userSchema);