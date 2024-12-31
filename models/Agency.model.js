const mongoose = require("mongoose")

const agencySchema = new mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    mobile: { type: String, require: true },
    password: { type: String, require: true },
    photo: { type: String },
    isActive: { type: Boolean, default: true },
    role: { type: String, enum: ["agency", "professinal", "electrician", "plmber", "penter"], default: "agency" },
    adminId: { type: mongoose.Schema.Types.ObjectId, ref: "admin" },
}, { timestamps: true })

module.exports = mongoose.model("agency", agencySchema)