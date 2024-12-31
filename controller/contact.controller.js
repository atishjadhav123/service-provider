const asyncHandler = require("express-async-handler")
const Contact = require("../models/Contact")

exports.contactAdd = asyncHandler(async (req, res) => {
    try {
        const { name, email, message } = req.body

        if (!name || !email || !message) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const result = await Contact.create({ name, email, message })

        res.json({ message: "contact send success", result })

    } catch (error) {
        return res.status(500).json({ message: "Error send contact", error: error.message });

    }
})