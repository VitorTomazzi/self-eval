const express = require('express');
const router = express.Router();
let User = require('../models/user.model');

router.get('/', (req, res, next) => {
	User.find().then((users) => res.json(users)).catch((err) => res.status(400).json('Error:' + err));
});

router.post('/submit', async (req, res, next) => {
	try {
		const fullname = req.body.fullname;
		const email = req.body.newEmail;
		const repo = req.body.repo;
		const URL = req.body.URL;

		const result = await User.create({
			fullname,
			email,
			repo,
			URL
		});
		res.json({ message: 'success', user: result });
	} catch (err) {
		next(err);
	}
});

module.exports = router;
