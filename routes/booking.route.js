const { createBooking, getAllBooking, updateBooking, deleteBooking, cancelBooking } = require("../controller/booking.controller")
const { CustomerProtected, ProfessionalProtected } = require("../middlware/Protected")

const router = require("express").Router()

    .post("/createbooking", CustomerProtected, createBooking)
    .get("/fetchbooking", ProfessionalProtected, getAllBooking)
    .get("/agencybookingfetch", ProfessionalProtected, getAllBooking)
    .put("/updatebooking/:id", ProfessionalProtected, updateBooking)
    .delete("/deletebooking/:id", deleteBooking)
    .put("/bookingscancel/:id", cancelBooking)

module.exports = router