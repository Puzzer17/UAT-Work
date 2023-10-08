// Created by Connor C.

//Following code is used to start JavaScript code only after page is fully loaded
//as image variables need to be initialized after the page is loaded
document.addEventListener("DOMContentLoaded",function() {
    document.getElementById("pauseButton").disabled = true;
});
//overall variable to see if code should run or if it should stop
var scriptLock=false;



//Start button
function buttonStart() {
    document.getElementById("userMSG").innerHTML = "Start Button pushed, watch the animals go!";
    //Switching buttons
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
    document.getElementById("pauseButton").disabled = false;
    //Sound
    buttonPress();
    //Unlocks program and let's script run
    scriptLock=false;
    //Changing background
    document.body.style.backgroundImage = "url('forest.jpeg')";
    //Revealing animals
    document.getElementById("bird").hidden = false;
    document.getElementById("squirrel").hidden = false;
    //Starting movement
    animBird();
    animSquirrel();
}
//stop button
function buttonStop() {

    document.getElementById("userMSG").innerHTML = "Stop Button was pushed, the animals have ran away";
    //Switching Buttons
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
    document.getElementById("pauseButton").disabled = true;
    //Locking program to stop all movement
    scriptLock=true;
    //Trigger Sound
    buttonPress();
    //Stop movement
    clearInterval(birdInterval);
    clearInterval(squiInterval);
    //Hiding images
    document.getElementById("bird").hidden = true;
    document.getElementById("squirrel").hidden = true;
    //Changing the background
    document.body.style.backgroundImage = "url('background.jpg')";
    var body=document.body;
    body.style.backgroundRepeat = "repeat";
}

function buttonPause(){
    //Stopping movement
    clearInterval(birdInterval);
    clearInterval(squiInterval);
    document.getElementById("userMSG").innerHTML = "Pause Button pushed, animals were caught playing freeze tag.";
    //Locking Script
    scriptLock =true;
    //Sound
    buttonPress();
    //Adjusting buttons
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = false;
    document.getElementById("pauseButton").disabled = true;
}

//function to play a button click sound
function buttonPress() {
    
    mysound = new playSound("start-13691.mp3");
    mysound.play();

}

//function to play any sound element given a source
function playSound(src){
    this.sound = document.createElement("audio");
    this.sound.src = src;
        this.play = function (){
            this.sound.play();
        }
}


//functions to obtain usable space available on screen
function obtainHeight(){
    return window.innerHeight - 1
}
function obtainWidth(){
    return window.innerWidth - 1
}



//INITIAL VARIABLES FOR BIRD AS FINAL POSITION IS INDEPENDENT OF FUNCTION RUNNING
var posy=(obtainHeight()*0.2); // Initial y position within top 20% of allowed screen
var posx = 0; // Initial position for x
var bdirx = 1; // Direction (0: left, 1: right)
var bdiry=0; // Direction (0: up,     1: down)


function moveBird() {
    if(scriptLock) return false;
    else {
    var bird = document.getElementById("bird");
    var body = document.body;
    //Setting bird size
    bird.style.width = (obtainWidth()*0.07)+"px";
    //
    var maxWidth = obtainWidth()-((obtainWidth()*0.07));
    var maxHeight = obtainHeight();
    //Adjusting image based on window size
    body.style.backgroundSize = obtainWidth() + "px" + obtainHeight() + "px";
    //Moving Left or right
    if (bdirx === 1) {
        posx += 5; // Speed of moving Right
        bird.style.left = posx + "px";
        if (posx >= maxWidth) {
            //Change direction to left
            bdirx = 0;
            changeDirection(bdirx);
        }
    } else {
        posx -= 5; // Speed of moving left
        bird.style.left = posx + "px";
        if (posx <= 0) {
            //Change direction to right
            bdirx = 1;
            changeDirection(bdirx);
        }
    } //Moving up or down//
    if(bdiry === 1) {
        posy += 5; //Speed of moving down
        bird.style.top = posy + "px";
        //Since (0,0) is the top left, the maxheight will need to be 
        //within the top bit
        //If position of y goes below the bottom 70%, go up
        if (posy >= (maxHeight*0.6)) {
            bdiry=0;
        }
    }
    else { 
        posy -= 5;//Speed of moving up
        bird.style.top = posy +"px";
        //Following the top being 0, the bottom will be towards the max height
        // If position of y goes above the top 20% of the screen, go down
        if (posy <= (maxHeight*0.2)) {
            bdiry=1;
        }
    }
    }

}

//Used to change direction of bird
function changeDirection(bdirx) {
    var bird = document.getElementById("bird");
    if (bdirx==0){
        bird.src = "birdLeft.png";
    } else {
        bird.src = "birdRight.png";
    }
}

//INITIAL VARIABLES FOR Squirrel AS FINAL POSITION IS INDEPENDENT OF FUNCTION RUNNING
//Squirrel only moves left and right
var sposx = 0; // Initial position for x
var sdirx = 1; // Direction (0: left, 1: right)


function moveSquirrel() {
    if(scriptLock) return false;
    else {
    var squirrel = document.getElementById("squirrel");
    squirrel.style.width = (obtainWidth()*0.08)+"px";
    var maxWidth = obtainWidth()-((obtainWidth()*0.08));
    var maxHeight = obtainHeight();
    squirrel.style.top = (maxHeight*0.8) +"px";
    //Moving Left or right
    if (sdirx === 1) {
        sposx += 7; // Speed of moving Right 
        squirrel.style.left = sposx + "px";
        if (sposx >= maxWidth) {
            sdirx = 0;
            changeSDirection(sdirx);
        }
    } else {
        sposx -= 7; // Speed of moving left
        squirrel.style.left = sposx + "px";
        if (sposx <= 0) {
            sdirx = 1;
            changeSDirection(sdirx);
        }
    }
}
}





//Used to change direction of Squirrel
function changeSDirection(sdirx) {
    var squirrel = document.getElementById("squirrel");
    if (sdirx==0){
        squirrel.src = "squirrelLeft.png";
    }else {
        squirrel.src = "squirrelRight.png";
    }
}


function animBird() {
    if(!scriptLock){
    birdInterval = setInterval(moveBird, 20); // Adjust the interval for animation speed
    }
}

function animSquirrel() {
    if(!scriptLock){
        squiInterval = setInterval(moveSquirrel, 20);
    }
}
