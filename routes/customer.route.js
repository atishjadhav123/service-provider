const { getCustomerallbooking, getcustomerProfile, getCustomerAllBookings } = require("../controller/customer.controller")
const { CustomerProtected } = require("../middlware/Protected")

const router = require("express").Router()

router
    .get("/getcustomer", CustomerProtected, getCustomerAllBookings)
    .get("/customerprofile", CustomerProtected, getcustomerProfile)


module.exports = router