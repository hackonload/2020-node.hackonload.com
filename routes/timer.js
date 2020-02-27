const express = require('express');
const router = express.Router();
const storage = require('node-persist');

router.get('/', (req, res) => {
	res.render('timer', {layout: false});
});

router.get('/persist/:time', async (req, res) => {
	await storage.init( /* options ... */);
	await storage.setItem('persist', true);
	await storage.setItem('time', req.params.time);
	await res.json({success: true});
});

router.get('/persist/check/lapse', async (req, res) => {
	await storage.init();
	const data = await storage.getItem('persist') || false;
	const time = await storage.getItem('time') || 0;
	await res.json({persist: data, time: time});
});

module.exports = router;
