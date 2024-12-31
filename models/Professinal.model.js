const mongoose = require("mongoose")

const professinalSchema = new mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    mobile: { type: String, require: true },
    password: { type: String, require: true },
    photo: { type: String },
    city: { type: String, },
    location: { type: String, },
    price: { type: String, },
    availability: { type: String },
    isActive: { type: Boolean, default: true },
    role: { type: String, enum: ["agency", "professinal", "electrician", "plumber", "painter"], default: "prof" },
    adminId: { type: mongoose.Schema.Types.ObjectId, ref: "admin" },
    agencyId: { type: mongoose.Schema.Types.ObjectId, ref: "agency" },
}, { timestamps: true })

module.exports = mongoose.model("prof", professinalSchema)