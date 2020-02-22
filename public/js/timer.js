const HACKATHON_ENDS_AT = new Date(2020, 1, 28, 9, 0, 0, 0);

let intervalID;

const persistTimerScreen = () => {
	$.get("/timer/persist").done((data) => {
		console.log(data);
	})
};

const checkPersisted = () => {
	$.get("/timer/persist/check").done((data) => {
		console.log(data);
		if (data['persist'] === true) {
			showTimer();
		}
	});
};

const startTimer = () => {
	intervalID = setInterval(countdown, 1000);
};

const countdown = () => {
	const timeInSeconds = getSecondsTillEnd();
	if (timeInSeconds <= 0) {
		clearInterval(intervalID);
	} else {
		document.getElementById('countdown').innerText = secondsToTime(timeInSeconds);
	}
};

const getSecondsTillEnd = () => {
	return (HACKATHON_ENDS_AT.getTime() - Date.now()) / 1000;
};

const secondsToTime = (seconds) => {
	console.log(seconds);
	const arr = new Date(seconds * 1000).toISOString().substr(11, 8).split(':');
	const days = Math.floor(seconds / 86400);
	arr[0] = (parseInt(arr[0], 10) + days * 24).toString();
	return arr.join(' : ');
};

