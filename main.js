status = "";
img = "";

function preload()
{
    img = loadImage('pc.png');
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Dectecting Objects";

}

function modelLoaded()
{
    console.log("Model Loaded!");
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results)
{
    if(error)
    {
        console.log(error);
    }
        console.log(results)
}