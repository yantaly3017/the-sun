var diam1=210;

function setup() {
      createCanvas(500,500);
}

function draw() {
    background("#B3EFF1");
    fill("#fafc95");
    stroke("#ffff00")
    strokeWeight(5);
    ellipse(250,250,diam1,diam1);
    fill("#fc0000");
    stroke("#ffffff");
    strokeWeight(5);
    textSize(15);
    textFont("Georgia");
    textStyle(BOLD);
    textAlign(CENTER);
    text("The Sun",70,450);
    fill("#000000");
    ellipse(mouseX,mouseY,10,10);
    fill("#a29fc1");
    ellipse(random(width),random(height),5,5);
}
function mousePressed(){
    diam1=diam1+10
}