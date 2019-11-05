const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
	const url = req.protocol + "://" + req.headers.host + req.originalUrl;
	const data = {
		title: 'OnLoad 2.0 | 28th Feb - 1st March',
		meta_description: 'A 30hrs intense, fun-filled, rewarding convergence of programmers, designers and developers to build something amazing.',
		page_url: url
	};
	res.render('index', data);
});

router.get('/team', (req, res) => {
	const url = req.protocol + "://" + req.headers.host + req.originalUrl;
	const data = {
		title: 'Team behind OnLoad 2.0',
		meta_description: 'A 30hrs intense, fun-filled, rewarding convergence of programmers, designers and developers to build something amazing.',
		page_url: url
	};
	res.render('team', data);
});

module.exports = router;
