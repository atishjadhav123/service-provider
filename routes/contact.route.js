const { contactAdd } = require("../controller/contact.controller")

const router = require("express").Router()

router
    .post("/addcontact", contactAdd)

module.exports = router