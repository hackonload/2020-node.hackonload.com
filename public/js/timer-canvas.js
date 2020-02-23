const leftImgLocation = "../images/mascot-l.png";
const leftMascotCanvas = document.getElementById("left-canvas");
const leftMascotCanvasContext = leftMascotCanvas.getContext("2d");
const leftMascotIMG = new Image();
leftMascotIMG.src = leftImgLocation;
leftMascotIMG.onload = () => {
	leftMascotCanvasContext.drawImage(leftMascotIMG, 0, 0, 300, 300);
	console.log(Canvas.getPixels(leftMascotCanvas));
};

const rightImgLocation = "../images/mascot-r.png";
const rightMascotCanvas = document.getElementById("right-canvas");
const rightMascotCanvasContext = rightMascotCanvas.getContext("2d");
const rightMascotIMG = new Image();
rightMascotIMG.src = rightImgLocation;
rightMascotIMG.onload = () => {
	rightMascotCanvasContext.drawImage(rightMascotIMG, 0, 0, 300, 300);
};
