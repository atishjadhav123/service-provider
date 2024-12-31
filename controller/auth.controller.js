const asyncHandler = require("express-async-handler")
const { checkempty } = require("../utils/checkempty")
const bcrypt = require("bcryptjs")
const AuthModel = require("../models/Auth.model")
const jwt = require("jsonwebtoken")
const validator = require("validator")
const ProfessinalModel = require("../models/Professinal.model")
const CustomerModel = require("../models/Customer.model")
const AgencyModel = require("../models/Agency.model")

exports.registerAdmin = asyncHandler(async (req, res) => {
    const { name, email, mobile, password, role } = req.body
    const { isError, error } = checkempty({ name, email, password, mobile })
    if (isError) {
        return res.status(400).json({ message: "all feild are required", error })
    }
    if (!validator.isEmail(email)) {
        return res.status(400).json({ message: "Invalid Email" })
    }
    if (!validator.isStrongPassword(password)) {
        return res.status(400).json({ message: "provide Strong password" })
    }
    if (mobile && !validator.isMobilePhone(mobile, "en-IN")) {
        return res.status(400).json({ message: "invalid mobile number" })
    }
    const hashpass = await bcrypt.hash(password, 10)
    await AuthModel.create({ role, name, email, mobile, password: hashpass })

    res.json({ message: "register success" })
})
exports.loginAdmin = asyncHandler(async (req, res) => {
    try {
        const { email, password } = req.body
        console.log(req.body)

        const { isError, error } = checkempty({ email, password })
        if (isError) {
            return res.status(400).json({ message: "all feild are required", error })
        }
        const isfound = await AuthModel.findOne({ email })
        if (!isfound) {
            return res.status(400).json({ message: "email or mobile not found" })
        }
        const isVerify = await bcrypt.compare(password, isfound.password)
        if (!isVerify) {
            return res.status(400).json({ message: "password Do not match" })
        }

        const token = jwt.sign({ userId: isfound._id }, process.env.JWT_KEY, { expiresIn: "15d" })
        res.cookie("admin", token, {
            maxAge: 1000 * 60 * 60 * 24 * 15,
            httpOnly: true
        })
        res.json({
            message: "Credential Verify Success", result: {
                _id: isfound._id,
                name: isfound.name,
                email: isfound.email,
                mobile: isfound.mobile,
            }
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "intervel server errorr" })

    }

})
exports.logoutAdmin = asyncHandler(async (req, res) => {
    res.clearCookie("Admin")
    res.json({ message: "Admin logout Success" })
})

exports.registerProfessinal = asyncHandler(async (req, res) => {
    const { name, email, mobile, password, role } = req.body
    const { isError, error } = checkempty({ name, email, password, mobile })
    if (isError) {
        return res.status(400).json({ message: "all feild are required", error })
    }
    if (!validator.isEmail(email)) {
        return res.status(400).json({ message: "Invalid Email" })
    }
    if (!validator.isStrongPassword(password)) {
        return res.status(400).json({ message: "provide Strong password" })
    }
    if (mobile && !validator.isMobilePhone(mobile, "en-IN")) {
        return res.status(400).json({ message: "invalid mobile number" })
    }
    const hashpass = await bcrypt.hash(password, 10)
    await ProfessinalModel.create({ name, email, role, mobile, password: hashpass })

    res.json({ message: "register Professinal success" })

})
exports.loginProfessinal = asyncHandler(async (req, res) => {
    try {
        const { email, password } = req.body
        console.log(req.body)

        const { isError, error } = checkempty({ email, password })
        if (isError) {
            return res.status(400).json({ message: "all feild are required", error })
        }
        const isfound = await ProfessinalModel.findOne({ email })
        if (!isfound) {
            return res.status(400).json({ message: "email or mobile not found" })
        }

        if (!["electrician", "plumber", "painter"].includes(isfound.role)) {
            return res.status(400).json({ message: "Your role is not recognized as a professional." });
        }
        const isVerify = await bcrypt.compare(password, isfound.password)
        if (!isVerify) {
            return res.status(400).json({ message: "password Do not match" })
        }

        const token = jwt.sign({ userId: isfound._id }, process.env.JWT_KEY, { expiresIn: "15d" })
        res.cookie("prof", token, {
            maxAge: 1000 * 60 * 60 * 24 * 15,
            httpOnly: true
        })
        res.json({
            message: "Credential Verify Success", result: {
                _id: isfound._id,
                name: isfound.name,
                email: isfound.email,
                mobile: isfound.mobile,
                role: isfound.role,
            }
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "intervel server errorr" })

    }
})
exports.logoutProfessnal = asyncHandler(async (req, res) => {
    res.clearCookie("prof")
    res.json({ message: "professnal logout Success" })
})

exports.registerAgency = asyncHandler(async (req, res) => {
    const { name, email, mobile, password, role } = req.body
    const { isError, error } = checkempty({ name, email, password, mobile })
    if (isError) {
        return res.status(400).json({ message: "all feild are required", error })
    }
    if (!validator.isEmail(email)) {
        return res.status(400).json({ message: "Invalid Email" })
    }
    if (!validator.isStrongPassword(password)) {
        return res.status(400).json({ message: "provide Strong password" })
    }
    if (mobile && !validator.isMobilePhone(mobile, "en-IN")) {
        return res.status(400).json({ message: "invalid mobile number" })
    }
    const hashpass = await bcrypt.hash(password, 10)
    await AgencyModel.create({ name, adminId: req.user, email, role, mobile, password: hashpass })

    res.json({ message: "register Agency success" })

})
exports.loginAgency = asyncHandler(async (req, res) => {
    try {
        const { email, password } = req.body
        console.log(req.body)

        const { isError, error } = checkempty({ email, password })
        if (isError) {
            return res.status(400).json({ message: "all feild are required", error })
        }
        const isfound = await AgencyModel.findOne({ email })
        if (!isfound) {
            return res.status(400).json({ message: "email or mobile not found" })
        }
        if (isfound.role !== "agency") {
            return res.status(400).json({ message: "your Role is Not agency" })
        }
        const isVerify = await bcrypt.compare(password, isfound.password)
        if (!isVerify) {
            return res.status(400).json({ message: "password Do not match" })
        }

        const token = jwt.sign({ userId: isfound._id }, process.env.JWT_KEY, { expiresIn: "15d" })
        res.cookie("agency", token, {
            maxAge: 1000 * 60 * 60 * 24 * 15,
            httpOnly: true
        })
        res.json({
            message: "Credential Verify Success", result: {
                _id: isfound._id,
                name: isfound.name,
                email: isfound.email,
                mobile: isfound.mobile,
                role: isfound.role,
            }
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "intervel server errorr" })

    }
})
exports.logoutAgency = asyncHandler(async (req, res) => {
    res.clearCookie("agency")
    res.json({ message: "professnal logout Success" })
})


exports.registerCustomer = asyncHandler(async (req, res) => {
    const { name, email, mobile, password } = req.body
    const { isError, error } = checkempty({ name, email, password, mobile })
    if (isError) {
        return res.status(400).json({ message: "all feild are required", error })
    }
    if (!validator.isEmail(email)) {
        return res.status(400).json({ message: "Invalid Email" })
    }
    if (!validator.isStrongPassword(password)) {
        return res.status(400).json({ message: "provide Strong password" })
    }
    if (mobile && !validator.isMobilePhone(mobile, "en-IN")) {
        return res.status(400).json({ message: "invalid mobile number" })
    }
    const hashpass = await bcrypt.hash(password, 10)
    await CustomerModel.create({ name, email, mobile, password: hashpass })

    res.json({ message: "register Customer success" })
})
exports.loginCustomer = asyncHandler(async (req, res) => {
    try {
        const { email, password } = req.body
        console.log(req.body)

        const { isError, error } = checkempty({ email, password })
        if (isError) {
            return res.status(400).json({ message: "all feild are required", error })
        }
        const isfound = await CustomerModel.findOne({ email })
        if (!isfound) {
            return res.status(400).json({ message: "email or mobile not found" })
        }
        const isVerify = await bcrypt.compare(password, isfound.password)
        if (!isVerify) {
            return res.status(400).json({ message: "password Do not match" })
        }

        const token = jwt.sign({ userId: isfound._id }, process.env.JWT_KEY, { expiresIn: "15d" })
        res.cookie("customer", token, {
            maxAge: 1000 * 60 * 60 * 24 * 15, // 15 days
            httpOnly: true, // Secure cookie from JavaScript access
            secure: process.env.NODE_ENV === "production", // Use secure cookies in production
        });
        res.json({
            message: "Credential Verify Success", result: {
                _id: isfound._id,
                name: isfound.name,
                email: isfound.email,
                mobile: isfound.mobile,
            }
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "intervel server errorr" })

    }
})
exports.logoutCustomer = asyncHandler(async (req, res) => {
    res.clearCookie("customer")
    res.json({ message: "professnal logout Success" })
})





