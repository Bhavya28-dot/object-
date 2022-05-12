function setup(){
    canvas=createCanvas(600,400);
    canvas.center();
    video=createCapture(600,400);
    video.hide();
}
function draw(){
    image( video,0,0,600,500);}