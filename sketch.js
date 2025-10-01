//custom variables for y-coordinate of sun & horizon
let shapeHeight;

let designWidth = 5000;
let designHeight= 1000;
let horizon ;
function setup() {
  createCanvas(designWidth,designHeight);
  horizon =height/2;
}

function draw() {

  //shape follows y-coordinate of mouse
  shapeHeight = 500 - mouseY;
  currentWidth = 500 - mouseX;

  //light blue background if the shape is above horizon

  //with if-else statement
  if (shapeHeight < horizon / 2) {
    background("pink"); // blue if designHeight/2
    
  } else {
    background("lavender"); // grey if below designHeight/2
  }

  //sun
  fill("orange");
  
  circle(width/10, shapeHeight, width/10);
  textSize(50);
  fill("black");
  text('Hi! My name is Soha Sultana', currentWidth/2, shapeHeight/2);
  


  // draw line for horizon
  stroke('lavender');
  line(0,horizon,width,horizon);

  //grass

  fill("lightgreen");

  rect(0, horizon, width, height);

}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  horizon = height / 2; // recalc horizon after resize
}
