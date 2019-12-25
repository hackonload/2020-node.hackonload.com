const schedule = {
	day1: [
		{
			time: '8:00 A.M.',
			event: 'Check-In.'
		},
		{
			time: '10 A.M. - 5 P.M.',
			event: 'Tech Talks & Workshops.'
		},
		{
			time: '9:00 P.M.',
			event: 'Hacking Begins.'
		}
	],
	day2: [
		{
			time:'',
			event:'Hacking Continues....'
		},

	],
	day3: [
		{
			time: '9:00 A.M.',
			event: 'Hacking Stops.'
		},
		{
			time:'9:30 A.M.',
			event: 'Judging Begins.'
		},
		// {
		// 	time:'12:30 P.M.',
		// 	event:'Judging Ends'
		// },
		{
			time:'2:00 P.M.',
			event:'Closing Ceremony.'
		}

	]
};

module.exports = schedule;
