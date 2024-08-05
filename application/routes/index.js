var express = require('express');
var router = express.Router();

/* GET home page. */
// localhost:3000/
router.get('/', function (req, res, next) {
  res.render('index.hbs', { title: 'CSC 317 Clone', name: "Athan Cheung" });
});

// login 
router.get('/login', function (req, res, next) {
  res.render('login');
});

// register
router.get('/register', function (req, res, next) {
  res.render('register');
});

// postvideo
router.get('/postvideo', function (req, res, next) {
  res.render('postvideo');
});

// viewpost
router.get('/viewpost', function (req, res, next) {
  res.render('viewpost');
});

module.exports = router;
