const mongoose = require("mongoose")

const authSchema = new mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    mobile: { type: String, require: true },
    password: { type: String, require: true },
    role: { type: String, enum: ["admin", "customer", "agency", "electrician", "plumber", "painter"] },
    role: { type: String, default: "admin" },
}, { timestamps: true })
module.exports = mongoose.model("auth", authSchema)