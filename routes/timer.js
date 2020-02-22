const express = require('express');
const router = express.Router();
const storage = require('node-persist');

router.get('/', (req, res) => {
	res.render('timer', {layout: false});
});

router.get('/persist', async (req, res) => {
	await storage.init( /* options ... */);
	await storage.setItem('persist', true);
	await res.json({success: true});
});

router.get('/persist/check', async (req, res) => {
	await storage.init( /* options ... */);
	const data = await storage.getItem('persist') || false;
	await res.json({persist: data});
});

module.exports = router;
