const asyncHandler = require("express-async-handler")
const { upload } = require("../utils/upload")
const { checkempty } = require("../utils/checkempty")
const cloudinary = require("cloudinary").v2
const validator = require("validator")
const bcrypt = require("bcryptjs");
const ProfessinalModel = require("../models/Professinal.model")
const AgencyModel = require("../models/Agency.model")
const CustomerModel = require("../models/Customer.model")


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

exports.addProfessinal = asyncHandler(async (req, res) => {
    upload(req, res, async err => {
        if (err) {
            return res.status(400).json({ message: "unable to upload" })
        }
        if (!req.file) {
            return res.status(400).json({ message: "Profile image is required" });
        }
        const { name, email, mobile, password, role, location, price, city, availability } = req.body
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

        const { secure_url } = await cloudinary.uploader.upload(req.file.path)
        const hashpass = await bcrypt.hash(password, 10)
        await ProfessinalModel.create({
            photo: secure_url,
            adminId: req.user,
            agencyId: req.user,
            location, price, city, availability,
            name, email, role, mobile, password: hashpass
        })

        res.json({ message: "register Professinal success" })
    })

})
exports.addAgency = asyncHandler(async (req, res) => {
    upload(req, res, async err => {
        if (err) {
            return res.status(400).json({ message: "unable to upload" })
        }
        if (!req.file) {
            return res.status(400).json({ message: "Profile image is required" });
        }
        const { name, email, mobile, password, role, } = req.body
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

        const { secure_url } = await cloudinary.uploader.upload(req.file.path)
        const hashpass = await bcrypt.hash(password, 10)
        await AgencyModel.create({
            photo: secure_url,
            adminId: req.user,
            agencyId: req.user,
            name, email, role, mobile, password: hashpass
        })

        res.json({ message: "register Agency success" })
    })

})


exports.getAllProfessinal = asyncHandler(async (req, res) => {
    const result = await ProfessinalModel.find()
    res.json({ message: "All professinal fetch success", result })
})
exports.getAllAgency = asyncHandler(async (req, res) => {
    const result = await AgencyModel.find()
    res.json({ message: "All agency fetch success", result })
})
exports.getAllCustomer = asyncHandler(async (req, res) => {
    const result = await CustomerModel.find()
    res.json({ message: "All agency fetch success", result })
})
exports.ProfessionalActiveInactive = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const professional = await ProfessinalModel.findById(id)
    const { isActive } = req.body
    console.log(isActive)
    if (!professional) {
        return res.status(404).json({ message: "Professional not found" })
    }
    const updatedProfessional = await ProfessinalModel.findByIdAndUpdate(
        id,
        { isActive },
        { new: true }
    );
    res.status(200).json({
        message: updatedProfessional.isActive ? "Professional is now active" : "Professional is now inactive",
        professional: updatedProfessional
    })
})

