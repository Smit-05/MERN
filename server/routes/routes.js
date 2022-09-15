const express = require("express");
const router = express.Router();


// import controllers
const Test = require('../controllers/UserController');

// import middlewares


// api routes
router.get('/user', Test.gt);
router.post('/user', Test.pt);


module.exports = router;