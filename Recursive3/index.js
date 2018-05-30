var slider;
var slider2;
var slider3;

function setup() {
  createCanvas(windowWidth,windowHeight);
  slider = createSlider(1,200,2,1);
  slider.position((width/2)-65,0);
  slider2 = createSlider(0.01,10,2,0.01);
  slider2.position((width/2)-65,25);
  slider3 = createSlider(1,1000,500,1);
  slider3.position((width/2)-65,50);
}

function draw() {
  background(255);
  stroke(255);
  noFill();
  translate(width/2,height/2);
  subcircles(slider3.value());
}

function subcircles(radius) {
  ellipse(0,0,radius);
  if (radius > slider.value()) {
    push();
    translate(-radius/slider2.value(),0);
    subcircles(radius/2);
    pop();
    push();
    translate(radius/slider2.value(),0);
    subcircles(radius/2);
    pop();
  }
}
