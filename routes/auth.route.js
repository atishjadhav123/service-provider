const { registerAdmin,
    loginAdmin,
    logoutAdmin,
    registerProfessinal,
    registerAgency,
    registerCustomer,
    loginProfessinal,
    logoutProfessnal,
    loginAgency,
    logoutAgency,
    loginCustomer,
    logoutCustomer
} = require("../controller/auth.controller")
const { adminProtected } = require("../middlware/Protected")

const router = require("express").Router()

router
    .post("/register", registerAdmin)
    .post("/login", loginAdmin)
    .post("/logout", logoutAdmin)

    .post("/register-professinal", adminProtected, registerProfessinal)
    .post("/login-professinal", loginProfessinal)
    .post("/logout-professinal", logoutProfessnal)

    .post("/register-agency", adminProtected, registerAgency)
    .post("/login-agency", loginAgency)
    .post("/logout-agency", logoutAgency)

    .post("/register-customer", registerCustomer)
    .post("/login-customer", loginCustomer)
    .post("/logout-customer", logoutCustomer)

module.exports = router