const {body} = require("express-validator");

const checkValidasi = [
    body("email")
        .notEmpty().withMessage("wajib diisi")
        .isEmail().withMessage("format harus benar"),
    body("password")
        .notEmpty().withMessage("wajib diisi")
        .isLength({min: 8}).withMessage("minimal 8 karakter"),
    body("ttl")
        .notEmpty().withMessage("wajib diisi")
        .isDate({format: 'YYYY-MM-DD'}).withMessage("format tanggal belum benar"),
    body("bio")
        .notEmpty().withMessage("wajib diisi")
        .isString().withMessage("harus string")
        .isLength({min:30 , max:999}).withMessage("min 30 max 999"),
    body("hobi")
        .isString().withMessage("harus string"),
    body("pendidikan")
        .isArray()
        .isIn(['SD', 'SMP', 'SMA', 'SMK', 'S1', 'S2', 'S3']).withMessage("isi hanya boleh: SD, SMP, SMA, SMK, S1, S2, S3")
]

module.exports = checkValidasi;