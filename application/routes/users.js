var express = require('express');
var router = express.Router();
// user register
// localhost:3000/users/register
router.get('/register', function(req, res, next) {
  console.log(req.body);
  var{username,password,cpassword,email} = req.body;
  res.json(req.body);
});
// login user
router.get('/login', function(req, res, next) {

});
// logout user
router.get('/logout', function(req, res, next) {

});
// view profile
router.get('/:id(\\d+)', function(req, res, next) {

});
module.exports = router;
