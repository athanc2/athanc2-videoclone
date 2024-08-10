const express = require('express');
const router = express.Router();

module.exports = router;

router.post('/create', function (req, res, next) {
    console.log(req);
    res.json(req.file);
});