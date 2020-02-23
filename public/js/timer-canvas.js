const leftImgLocation = "../images/mascot-l.png";
const leftMascotCanvas = document.getElementById("left-canvas");
const leftMascotCanvasContext = leftMascotCanvas.getContext("2d");
const leftMascotIMG = new Image();
leftMascotIMG.src = leftImgLocation;
leftMascotIMG.onload = () => {
	//leftMascotCanvasContext.drawImage(leftMascotIMG, 0, 0, 300, 300);
	edgeDetection();
};

const rightImgLocation = "../images/mascot-r.png";
const rightMascotCanvas = document.getElementById("right-canvas");
const rightMascotCanvasContext = rightMascotCanvas.getContext("2d");
const rightMascotIMG = new Image();
rightMascotIMG.src = rightImgLocation;
rightMascotIMG.onload = () => {
	rightMascotCanvasContext.drawImage(rightMascotIMG, 0, 0, 300, 300);
};

const edgeDetection = () => {
	const grayscale = Filters.filterImage(Filters.grayscale, leftMascotIMG);
	leftMascotCanvasContext.putImageData(grayscale, 0, 0);
	const horizontal = Filters.convoluteFloat32(grayscale, [-1, 0, 1, -2, 0, 2, -1, 0, 1]);
	const vertical = Filters.convoluteFloat32(grayscale, [-1, -2, -1, 0, 0, 0, 1, 2, 1]);

	let final_image = Filters.createImageData(vertical.width, vertical.height);
	for (let i = 0; i < final_image.data.length; i += 4) {
		// make the vertical gradient red
		const v = Math.abs(vertical.data[i]);
		final_image.data[i] = v;
		// make the horizontal gradient green
		const h = Math.abs(horizontal.data[i]);
		final_image.data[i + 1] = h;
		// and mix in some blue for aesthetics
		final_image.data[i + 2] = (v + h) / 4;
		final_image.data[i + 3] = 255; // opaque alpha
	}
	console.log("Image", final_image);
	leftMascotCanvasContext.putImageData(final_image, 0, 0);
};
