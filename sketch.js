function preload() {
	// put preload code here
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(5);
}

function draw() {
	background(5,10);
	noFill()
	//noStroke();
	var from = color(255, 0, 0);
	var to = color(0, 0, 255);

	var dim  = windowWidth > windowHeight ? windowWidth : windowHeight;
	dim = dim * sqrt(2);
	var poliamount = 40;
	for (var i = 0; i < poliamount; i++) {
		var c = lerpColor(from, to, i/poliamount);
		stroke(c);
		polyplot(width/2, height/2, (1 - i/poliamount) * dim/2, 180, .1, 100, (frameCount + i*2)/100);

	}
}

// This is a piece of code to be placed after the draw(). This code “enables” the polygon() instruction
function polyplot(x, y, radius, npoints, intensity, amplitude, seed) {

	var angle = TWO_PI / npoints;
	beginShape();

	for (var a = 0; a < TWO_PI; a += angle) {
		//var noiser = noise(seed + a) * variety;
		var nVal = map( noise(seed + cos(a)*intensity+1, seed + sin(a)*intensity+1), 0.0, 1.0, amplitude, 1.0);
		var sx = x + cos(a) * (radius + nVal - amplitude/2);
		var sy = y + sin(a) * (radius + nVal - amplitude/2);
		vertex(sx, sy);
	}
	endShape(CLOSE);
}
