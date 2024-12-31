const { getProfessinalProfile, getAllProfessinal, getProfessinalProfilefetch, updateProfessinalProfile } = require("../controller/professinal.controller")
const { ProfessionalProtected } = require("../middlware/Protected")

const router = require("express").Router()

router
    .get("/professinalprofile/:id", getProfessinalProfile)
    .get("/getprofilefetch", ProfessionalProtected, getProfessinalProfilefetch)
    .put("/updateprofile/:id", ProfessionalProtected, updateProfessinalProfile)

module.exports = router