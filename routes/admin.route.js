const { addProfessinal,
    getAllProfessinal,
    getAllCustomer,
    getAllAgency,
    ProfessionalActiveInactive,
    addAgency } = require("../controller/admin.controller")
const { adminProtected } = require("../middlware/Protected")

const router = require("express").Router()

router
    .post("/add-professinal", adminProtected, addProfessinal)
    .post("/add-agency", adminProtected, addAgency)
    .get("/getallProfessinal", getAllProfessinal)
    .get("/getallagency", adminProtected, getAllAgency)
    .get("/getallcustomer", adminProtected, getAllCustomer)
    .put("/activeinactive/:id", adminProtected, ProfessionalActiveInactive)

module.exports = router