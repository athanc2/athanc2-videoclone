const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const uploadDir = path.join(__dirname, '../public/videos/uploads');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        const fileInfo = path.parse(file.originalname);
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, `${fileInfo.name}-${uniqueSuffix}${fileInfo.ext}`);
    }
});

const upload = multer({ storage: storage });

// /post/create
router.post('/create', upload.single('videoUpload'), function (req, res, next) {
    console.log(req.file);
    res.json(req.file);
});

module.exports = router;
