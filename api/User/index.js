const mongoose = require("mongoose");
const { dbConn } = require("../../system/db/mongo");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true,
    },
);

module.exports = dbConn.model("User", userSchema);
