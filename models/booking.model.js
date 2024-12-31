const mongoose = require("mongoose")

const BookingSchema = new mongoose.Schema({
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'customer' },
    professionalId: { type: mongoose.Schema.Types.ObjectId, ref: 'prof' },
    agencyId: { type: mongoose.Schema.Types.ObjectId, ref: 'agency' },
    booking_status: {
        type: String,
        default: 'Pending',
        enum: ['Pending', 'Confirmed', 'Cancelled']
    },
    location: { type: String },
    mobile: { type: String, reqiured: true },
    reason: { type: String, require: true },
    date: { type: Date, required: true },
    payment_status: { type: String, default: 'Pending' },

}, { timestamps: true })

module.exports = mongoose.model('booking', BookingSchema)
