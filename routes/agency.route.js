const { addAgencyProfessinal } = require("../controller/agency.controller")
const { AgencyProtected } = require("../middlware/Protected")

const router = require("express").Router()

router
    .post("/add-Agencyfessinal", AgencyProtected, addAgencyProfessinal)

module.exports = router