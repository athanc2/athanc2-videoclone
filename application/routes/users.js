const express = require('express');
const router = express.Router();
const db = require('../conf/database');
const bcrypt = require('bcrypt');

const { errorPrint, successPrint } = require('../helpers/debug/debugprinters');


// user register
// localhost:3000/users/registration
router.post('/registration', async function (req, res, next) {
  console.table(req.body);
  var { username, password, cpassword, email } = req.body;
  try {
    var [rows, fields] = await db.query(`SELECT * FROM users where username=?;`, [username, email]);
    if (rows?.length > 0) {
      errorPrint(`${username} already exists`);
      return res.redirect('/registration');
    }
    var [rows, fields] = await db.query(`SELECT * FROM users where email=?;`, [email]);
    if (rows?.length > 0) {
      errorPrint(`${email} already exists`);
      return res.redirect('/registration');
    }

    var hashedPassword = await bcrypt.hash(password, 3)

    var [resultObj, _] = await db.query(`INSERT INTO users (username, email, password) VALUE (?,?,?)`, [username, email, hashedPassword]);
    if (resultObj?.affectedRows == 1) {
      successPrint(`${username} has been created`);
      return res.redirect('/login');
    } else {
      errorPrint(`${username} could NOT be created!!`);
      return res.redirect('/registration')
    }
    console.table(resultObj);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

// login user
router.post('/login', async function (req, res, next) {


  try {
    var { username, password } = req.body;
    var [rows, _] = await db.query("select * from users where username=?", [username]);
    const user = rows[0];
    if (!user) {
      return res.redirect('/login');
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch) {
      req.session.user = {
        username: user.username,
        userId: user.id,
      }
      req.flash("success", `${user.username} is logged in`);
      req.session.save((err) => {
        if (err) next(err);
        res.redirect('/');
      });
    } else {
      res.redirect('/login');
    }
  }
  catch (err) {
    console.log(err);
    next(err);
  }

});

// logout user
router.get('/logout', function (req, res, next) {
  return req.session.destroy(function (err) {
    if (err) next(err);
    res.redirect('/')
  })
});

// view profile
// router.get('/:id(\\d+)', function (req, res, next) {

// });
module.exports = router;
