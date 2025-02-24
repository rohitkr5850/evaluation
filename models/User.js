const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name:{ type : String, required:true, minlength : 3},
    email: { type : String , required : true, unique : true, match: /.+\@.+\..+/ },
    createdAt: { type : Date, default : Date.now},
});

module.exports = mongoose.model("User",UserSchema);