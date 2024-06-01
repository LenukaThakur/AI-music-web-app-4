peter_pan_song = "";
harry_potter_theme_song = "";
rightWristx = 0
rightWristy = 0
leftWristx = 0
leftWristy = 0
leftWristscore = 0
peter_pan_song = "";

function setup() {
    canvas = createCanvas(450, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotresults)
}

function modelLoaded() {
    console.log('poseNet is initialised')
}

function gotresults(results) {
 if(results.length > 0){
        console.log(results)

        leftWristx = results[0].pose.leftWrist.x;
        leftWristy = results[0].pose.leftWrist.y;
        console.log("leftWristx=" + leftWristx + "leftWristy=" + leftWristy);
        leftWristscore = results[0].pose.keypoints[9].score;
        console.log(leftWristx);
        console.log(leftWristscore);
        

        rightWristx = results[0].pose.rightWrist.x;
        rightWristy = results[0].pose.rightWrist.y;
        console.log("rightWristx=" + rightWristx + "rightWristy=" + rightWristy);

    }
}


function draw() {
    image(video, 0, 0, 450, 400)

    console.log(peter_pan_song)
    fill('red');
    stroke('blue');

    if (leftWristscore > 0.2) {
        circle(leftWristx, leftWristy, 20)
        harry_potter_theme_song.stop()
        if (song_peter_pan_theme = false)
            peter_pan_song.play();
        peter_pan_theme = peter_pan_song.isPlaying()
        document.getElementById("song").innerHTML = "song name: peter pan song"
    }


}

function preload() {
    peter_pan_song = loadSound("music2.mp3")
    harry_potter_theme_song = loadSound("music.mp3")
}

function play() {
    sound1.play()
    sound2.play()
}

