var express = require('express');
var router = express.Router();

/* GET home page. */
// localhost:3000/
router.get('/', async function (req, res, next) {
  res.render('index', { title: 'CSC 317 Clone', name: "Athan Cheung", /* js:['validation.js'] */ });
});

// login 
router.get('/login', function (req, res, next) {
  res.render('login', { title: 'Login', /* js:['validation.js'] */ });
});

// register
router.get('/registration', function (req, res, next) {
  res.render('registration', { title: 'Registration', /* js:['validation.js'] */ });
});

// postvideo
router.get('/postvideo', function (req, res, next) {
  res.render('postvideo', { title: 'Post Video', /* js:['validation.js'] */ });
});

module.exports = router;
