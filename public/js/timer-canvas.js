const leftImgLocation = "../images/mascot-l.png";
const rightImgLocation = "../images/mascot-r.png";

const leftMascotCanvas = document.getElementById("left-canvas").getContext("2d");
const rightMascotCanvas = document.getElementById("right-canvas").getContext("2d");


const leftMascotIMG = new Image();
const rightMascotIMG = new Image();

leftMascotIMG.src = leftImgLocation;
rightMascotIMG.src = rightImgLocation;

leftMascotIMG.onload = () => {
	leftMascotCanvas.drawImage(leftMascotIMG, 0, 0, 308, 308);
};
rightMascotIMG.onload = () => {
	rightMascotCanvas.drawImage(rightMascotIMG, 0, 0, 308, 308);
};
