const asyncHandler = require("express-async-handler");
const bookingModel = require("../models/booking.model");
const CustomerModel = require("../models/Customer.model");

exports.getCustomerAllBookings = asyncHandler(async (req, res) => {
    try {
        if (!req.user) {
            return res.status(401).json({ message: "Unauthorized: User not authenticated" });
        }

        const bookings = await bookingModel.find({ customerId: req.user });

        if (!bookings || bookings.length === 0) {
            return res.status(404).json({ message: "No bookings found for this customer" });
        }

        return res.status(200).json({ message: "Bookings fetched successfully", result: bookings });
    } catch (error) {
        return res.status(500).json({ message: "Error fetching bookings", error: error.message });
    }
});

exports.getcustomerProfile = asyncHandler(async (req, res) => {
    try {
        if (!req.user) {
            return res.status(401).json({ message: "Unauthorized: User not authenticated" });
        }

        const customerId = req.user;
        const profile = await CustomerModel.findById(customerId);

        if (!profile) {
            return res.status(404).json({ message: "Customer profile not found" });
        }

        return res.status(200).json({ message: "Customer profile fetched successfully", result: profile });
    } catch (error) {
        return res.status(500).json({ message: "Error fetching customer profile", error: error.message });
    }
});
