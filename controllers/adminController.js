const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const passport = require("passport");
require('../passport');


/* POST login. */
exports.login_post = function (req, res, next) {
	passport.authenticate("local", { session: false }, (err, user, info) => {
		if (err || !user) {
			return res.status(400).json({
				message: "Something is not right",
				user: user,
			});
		};

		req.login(user, { session: false }, (err) => {
			if (err) {
				res.status(401).json({ message: "Auth Failed" })
			}
			console.log(user);
			// generate a signed son web token with the contents of user object and return it in the response
			let opts = {
				expiresIn: 60 * 60 * 4
			}
			console.log(process.env.JWT_SECRET);
			const token = jwt.sign( { id: user._id }, process.env.JWT_SECRET, opts);
			
			return res.status(200).json({ user, token });
		});
		
		
	})(req, res);
};
exports.login_get = function (req, res, next) {
	res.json({
		message: "Login GET",
	});
};
