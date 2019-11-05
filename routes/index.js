const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
	const data = {
		title: 'OnLoad'
	};
	res.render('index', data);
});

router.get('/team', (req, res) => {
	const data = {
		title: 'OnLoad'
	};
	res.render('team', data);
});

module.exports = router;
