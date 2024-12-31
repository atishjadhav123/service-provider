const asyncHandler = require("express-async-handler")
const ProfessinalModel = require("../models/Professinal.model")
const bookingModel = require("../models/booking.model")
const CustomerModel = require("../models/Customer.model")
const sendEmail = require("../utils/email")


exports.createBooking = asyncHandler(async (req, res) => {
    const { location, reason, mobile, professionalId, date } = req.body



    const customerData = await CustomerModel.findOne({ _id: req.user })
    const profetionData = await ProfessinalModel.findOne({ _id: professionalId })

    const cutomerMessage = `
    Dear Customer,
        
    Your booking has been confirmed successfully. Here are the details:
    - Date: ${date} 
        - Location: ${location}
        - Reason: ${reason}
        
        Thank you for using our service!
        
        Regards,
        Booking Team
        `

    const professinalMesaage = `
        Dear Professional,
        
        You have a new booking request. Here are the details:
        - Customer Mobile: ${mobile}
        - Date: ${date}
        - Location: ${location}
        - Reason: ${reason}
        
        Please check your dashboard for more details.

        Regards,
        Booking Team
        `
    try {
        await sendEmail({
            email: customerData.email,
            subject: "Booking Confirmation",
            message: cutomerMessage
        })

        await sendEmail({
            email: profetionData.email,
            subject: "new Booking REquiest",
            message: professinalMesaage
        })

        const booking = await bookingModel.create({ professionalId, date, location, reason, mobile, customerId: req.user })
        res.status(200).json({ message: "Booking created successfully and emails sent", booking })

    } catch (error) {
        res.status(500).json({ message: "Booking created but failed to send emails", error: error })

    }

})
exports.getAllBooking = asyncHandler(async (req, res) => {
    // const { id } = req.params
    const booking = await bookingModel.find({ professionalId: req.user })
    if (!booking) {
        return res.status(400).json({ message: "booking not found" })
    }
    res.json({ message: "booking fetch success", booking })
})
exports.agencyProfessinalBoking = asyncHandler(async (req, res) => {
    const { id } = req.params
    const booking = await bookingModel.find({ agencyId: req.user })
    if (!booking) {
        return res.status(400).json({ message: "booking not found" })
    }
    res.json({ message: "booking fetch success", booking })
})

exports.updateBooking = asyncHandler(async (req, res) => {
    const { id } = req.params
    const booking = await bookingModel.findById(id)
    if (!booking) {
        return res.status(404).json({ message: "Booking not found" })
    }
    const updatedBooking = await bookingModel.findByIdAndUpdate(id, req.body, { new: true })
    res.status(200).json({
        message: "Booking updated successfully",
        updatedBooking
    })
})


// delete booking
exports.deleteBooking = asyncHandler(async (req, res) => {
    const { id } = req.params
    const booking = await bookingModel.findById(id)
    if (!booking) {
        res.status(400).json({ message: "booking not found" })
    }
    await bookingModel.findByIdAndDelete(id)

})

exports.cancelBooking = asyncHandler(async (req, res) => {
    const { id } = req.params
    if (!id) {
        return res.status(400).json({ message: "Booking ID is required" })
    }
    try {
        const booking = await bookingModel.findById(id)
        if (!booking) {
            return res.status(404).json({ message: "Booking not found" })
        }
        booking.booking_status = "Cancelled"
        await booking.save()
        res.status(200).json({
            message: "Booking cancelled successfully",
            booking,
        })
    } catch (error) {
        res.status(500).json({ message: "Error cancelling booking", error })
    }
})


