var express = require('express');
var router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  res.status(200).json({ success: true, msg: "You are successfully authenticated to this route!"});
});

module.exports = router;
