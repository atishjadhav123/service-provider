const jwt = require("jsonwebtoken")
exports.adminProtected = async (req, res, next) => {
    try {
        const { admin } = req.cookies
        console.log(admin);

        if (!admin) {
            return res.status(401).json({ meassage: "no Cookie Found" })
        }
        jwt.verify(admin, process.env.JWT_KEY, (err, decode) => {
            if (err) {
                return res.status(401).json({
                    meassage: "kuch toh gdbad hai"
                })
            }
            req.user = decode.userId
            // console.log(req.user, "req.user")

            next()
        })
    } catch (error) {
        res.status(500).json({ meassage: error.meassage || "user Protected error" })
    }
}

exports.ProfessionalProtected = async (req, res, next) => {
    try {
        const { prof } = req.cookies
        console.log(prof);

        if (!prof) {
            return res.status(401).json({ meassage: "no Cookie Found" })
        }
        jwt.verify(prof, process.env.JWT_KEY, (err, decode) => {
            if (err) {
                return res.status(401).json({
                    meassage: "kuch toh gdbad hai "
                })
            }
            req.user = decode.userId
            // console.log(req.user, "req.user")

            next()
        })
    } catch (error) {
        res.status(500).json({ meassage: error.meassage || "user Protected error" })
    }
}
exports.AgencyProtected = async (req, res, next) => {
    try {
        console.log('Cookies:', req.agency)
        if (!req.cookies.agency) {
            return res.status(401).json({ meassage: "no Cookie Found" })
        }
        jwt.verify(req.cookies.agency, process.env.JWT_KEY, (err, decode) => {
            if (err) {
                return res.status(401).json({
                    meassage: "kuch toh gdbad hai "
                })
            }
            req.user = decode.userId
            // console.log(req.user, "req.user")

            next()
        })
    } catch (error) {
        res.status(500).json({ meassage: error.meassage || "user Protected error" })
    }
}
exports.CustomerProtected = async (req, res, next) => {
    try {
        console.log('Cookies:', req.customer)
        if (!req.cookies.customer) {
            return res.status(401).json({ meassage: "no Cookie Found" })
        }
        jwt.verify(req.cookies.customer, process.env.JWT_KEY, (err, decode) => {
            if (err) {
                return res.status(401).json({
                    meassage: "kuch toh gdbad hai "
                })
            }
            req.user = decode.userId
            // console.log(req.user, "req.user")

            next()
        })
    } catch (error) {
        res.status(500).json({ meassage: error.meassage || "user Protected error" })
    }
};



