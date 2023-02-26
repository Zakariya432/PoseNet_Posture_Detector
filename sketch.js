// alert('Hello World'); //for a pop up

//Basic p5.js

//let Shahrukh_img;

let capture;
let posenet;
let noseX, noseY;
let reyeX, reyeY;
let leyeX, leyeY;
let singlePose,skeleton;
//let actor_img;


function setup() {
    createCanvas(800, 500); //can easily make shapes
    //console.log('setup function');
    // How to Load images
    //Shahrukh_img = loadImage('images/Shahrukh.webp')
    capture = createCapture(VIDEO)
    capture.hide();

    posenet = ml5.poseNet(capture, modelLoaded);
    posenet.on('pose', receivedPoses);

    actor_img = loadImage('images/Shahrukh.webp');

}

function receivedPoses(poses) {
    console.log(poses);

    if (poses.length > 0) {
        singlePose = poses[0].pose;
        skeleton = poses[0].skeleton;
    }

    console.log(noseX + " " + noseY);
}

//Generate random numbers
// function getRandomArbitrary(min, max){
//     return Math.random() * (max-min) + min;
//}

function modelLoaded() {
    console.log('Model has loaded');
}

function draw() {
    image(capture, 0, 0, 800, 600);
    fill(255, 0, 0);

    if (singlePose) {
        for (let i = 0; i < singlePose.keypoints.length; i++) {
            ellipse(singlePose.keypoints[i].position.x, singlePose.keypoints[i].position.y, 20);
        }

        stroke(255,255,255);
        strokeWeight(5);
        for(let j=0; j<skeleton.length; j++){
            line(skeleton[j][0].position.x,skeleton[j][0].position.y, skeleton[j][1].position.x, skeleton[j][1].position.y);
        }

        //image(actor_img,singlePose.nose.x-45,singlePose.nose.y-60,100,100);
    }



    //image(Shahrukh_img, 100,100,100,100);
    //How to bring images and videos(in webcam)

    // r = getRandomArbitrary(0,255);
    // g = getRandomArbitrary(0,255);
    // b = getRandomArbitrary(0,255);
    //  fill(r,g,b);
    // fill(255);
    // ellipse(mouseX,mouseY, 50, 50);
    //background(200);
    //What are the posibilities we can able to do using draw function
    //1.point
    //Point(200, 200);
    //2.line
    //line(200, 200,300,300);
    //3.triangle
    //triangle(100,200,300,400,150,450);
    //4.rectangle
    //rect(500,200,100,100)
    //5.circle
    //stroke
    //stroke(255,0,0); //the side wil become red in color
    //fourth parameter in stroke will be opacity-which will show the transparent capacity
    //strokeWeight
    // strokeWeight(5); //it will increase the weight of the stroke
    //fill
    //fill(132,100,34,100)
    //ellipse(600,300,100,100);

}