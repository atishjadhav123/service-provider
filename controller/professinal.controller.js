const asyncHandler = require("express-async-handler")
const ProfessinalModel = require("../models/Professinal.model");
const { upload } = require("../utils/upload");
const cloudinary = require("cloudinary").v2
const validator = require("validator")
const bcrypt = require("bcryptjs")


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

exports.getProfessinalProfile = asyncHandler(async (req, res) => {
    const { id } = req.params

    // Corrected query to find the professional by ID
    const result = await ProfessinalModel.findOne({ _id: id });

    if (!result) {
        return res.status(404).json({ message: "Profile not found" });
    }

    res.json({ message: "Profile fetched successfully", result });
})
exports.getProfessinalProfilefetch = asyncHandler(async (req, res) => {
    const profile = await ProfessinalModel.findOne({ _id: req.user }).populate("_id")
    if (!profile) {
        return res.status(404).json({ message: "Profile not found" })
    }
    res.json({ message: "Profile fetched successfully", result: profile })
})

exports.updateProfessinalProfile = asyncHandler(async (req, res) => {
    upload(req, res, async err => {
        if (err) {
            return res.status(400).json({ message: "Unable to upload" });
        }
        const { id } = req.params;
        const { name, email, mobile, password, role, location, price, city, availability } = req.body;

        if (!id) {
            return res.status(400).json({ message: "Professional ID is required" });
        }
        const existingProfessinal = await ProfessinalModel.findById(id);

        if (!existingProfessinal) {
            return res.status(404).json({ message: "Professional not found" });
        }

        if (email && !validator.isEmail(email)) {
            return res.status(400).json({ message: "Invalid Email" });
        }

        if (password && !validator.isStrongPassword(password)) {
            return res.status(400).json({ message: "Provide a strong password" });
        }
        if (mobile && !validator.isMobilePhone(mobile, "en-IN")) {
            return res.status(400).json({ message: "Invalid mobile number" });
        }
        let updatedFields = { name, email, mobile, role, location, price, city, availability };

        if (password) {
            updatedFields.password = await bcrypt.hash(password, 10);
        }
        if (req.file) {
            try {
                const { secure_url, public_id } = await cloudinary.uploader.upload(req.file.path);

                if (existingProfessinal.photoPublicId) {
                    await cloudinary.uploader.destroy(existingProfessinal.photoPublicId);
                }

                updatedFields.photo = secure_url;
                updatedFields.photoPublicId = public_id;
            } catch (cloudinaryError) {
                console.error('Error uploading to Cloudinary:', cloudinaryError);
                return res.status(500).json({ message: "Error uploading image to Cloudinary" });
            }
        }
        await ProfessinalModel.findByIdAndUpdate(id, updatedFields, { new: true });
        res.json({ message: "Professional updated successfully" });
    });
})







