const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const db = require('../conf/database');
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
router.post('/create', upload.single('videoUpload'), async function (req, res, next) {
    const userId = req.session.user?.userId;
    if (!userId) {
        req.flash("error", "Must be logged in to create a post");
        return req.session.save((err) => {
            if (err) next(err);
            res.redirect("/login");
        });
    }

    const { title, description } = req.body;
    const { path } = req.file;

    if (!title || !description || !path) {
        req.flash("error", "Post must have a title AND description AND video");
        return req.session.save((err) => {
            if (err) next(err);
            res.redirect("/post");
        });
    }
    try {
        const [resultObj, _] = await db.query(`INSERT INTO posts (title, description,video,thumbnail,fk_user_id) VALUE (?,?,?,?,?);`, [title, description, path, "", userId]);
        if (resultObj.affectedRows == 1) {
            req.flash("success", "Your post has been created");
            return req.session.save((err) => {
                if (err) next(err);
                return res.redirect(`/post/${resultObj.insertId}`);
            })
        } else {
            req.flash("error", "Your post could not be created");
            return req.session.save((err) => {
                if (err) next(err);
                return res.redirect('/post');
            })
        }

    } catch (err) {
        next(err)
    }
});

router.get('/:id(\\d+)', function (req, res, next) {
    res.render('viewpost', { title: `View Post`, js: [posts.js] });
});

module.exports = router;
