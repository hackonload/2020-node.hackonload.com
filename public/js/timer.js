const HACKATHON_ENDS_AT = new Date(2020, 2, 1, 9, 0, 0, 0);

let intervalID;

const persistTimerScreen = (startTime) => {
	$.get("/timer/persist/" + startTime).done((data) => {
		console.log("Persisting", data);
	})
};

const checkPersisted = () => {
	$.get("/timer/persist/check/lapse").done((data) => {
		console.log("isPersisted", data);
		if (data['persist'] === true) {
			showTimer(data['time']);
		}
	});
};

const startTimer = (time) => {
	intervalID = setInterval(countdown, 1000, time);
};

const countdown = (startTime) => {
	const timeInSeconds = getSecondsTillEnd();
	const totalTime = (HACKATHON_ENDS_AT.getTime() - startTime);
	const percentageElapsed = (timeInSeconds / totalTime) * 100;
	if (timeInSeconds <= 0) {
		clearInterval(intervalID);
	} else {
		updateMascotFill(percentageElapsed);
		document.getElementById('countdown').innerText = secondsToTime(timeInSeconds);
	}
};

const getSecondsTillEnd = () => {
	return (HACKATHON_ENDS_AT.getTime() - Date.now()) / 1000;
};

const secondsToTime = (seconds) => {
	const arr = new Date(seconds * 1000).toISOString().substr(11, 8).split(':');
	const days = Math.floor(seconds / 86400);
	arr[0] = (parseInt(arr[0], 10) + days * 24).toString();
	return arr.join(' : ');
};

const updateMascotFill = (percentageElapsed) => {

};

