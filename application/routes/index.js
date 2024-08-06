var express = require('express');
var router = express.Router();

/* GET home page. */
// localhost:3000/
router.get('/', function (req, res, next) {
  res.render('index.hbs', { title: 'CSC 317 Clone', name: "Athan Cheung" });
});

// login 
router.get('/login.html', function (req, res, next) {
  res.render('login');
});

// register
router.get('/registration.html', function (req, res, next) {
  res.render('registration');
});

// postvideo
router.get('/postvideo.html', function (req, res, next) {
  res.render('postvideo');
});

module.exports = router;
