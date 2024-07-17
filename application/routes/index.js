var express = require('express');
var router = express.Router();

/* GET home page. */
// localhost:3000/users
router.get('/', function (req, res, next) {
  res.render('index', { title: 'CSC 317 App', name: "Athan Cheung" });
});

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Login', name: "[insert name here]" });
});

module.exports = router;
