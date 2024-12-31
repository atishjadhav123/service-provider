const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    mobile: { type: String, required: true },
    role: { type: String, default: "customer" },
    password: { type: String, required: true },
    photo: { type: String },
    adminId: { type: mongoose.Schema.Types.ObjectId, ref: "admin" },
}, { timestamps: true })

module.exports = mongoose.model('customer', CustomerSchema)
