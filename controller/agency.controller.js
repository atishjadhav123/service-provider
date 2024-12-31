
const asyncHandler = require("express-async-handler")
const { upload } = require("../utils/upload")
const { checkempty } = require("../utils/checkempty")
const cloudinary = require("cloudinary").v2
const validator = require("validator")
const bcrypt = require("bcryptjs");
const ProfessinalModel = require("../models/Professinal.model")

exports.addAgencyProfessinal = asyncHandler(async (req, res) => {
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
            agencyId: req.user,
            location, price, city, availability,
            name, email, role, mobile, password: hashpass
        })

        res.json({ message: "register Professinal success" })
    })

})