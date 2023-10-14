img ="";
status ="";
function preload(){

}

function setup() {
    canvas = createCanvas(380, 380)
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

img = ""

function draw() {
    image (video, img, 0, 0, 380, 380);

    if(status != "")
    {
        r = random(255);
        g = random(255);
        b = random(255);
        objectDetector.detect(video, gotResult);
        for(1=0; 1 < objects.length; i++)  
        {
            document.getElementById("status").innerHTML = "Status : Object Detected";
            document.getElementById("number_of_objects").innerHTML = "Number of objects detected are : "+object.length;

            fill(r,g,b);
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[1].x, objects[i].y);
            noFill()
            stroke(r,g,b);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }   
    }
    fill("#FF0000");
    text("Dog", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350 );

    fill("#FF0000")
    text("Cat, 320, 120")
    noFill()
    stroke("#FF0000")
    rect(300, 90, 270, 320 )
}

function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(video, gotResult);
}

function gotResult(error, result) {
    if (error) {
        console.log;
    }
    console.log(results);
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status".innerHTML = "Status : Detecting Objects");
}