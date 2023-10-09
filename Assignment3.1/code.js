// Created by Connor C.

var currentSound=0;
//Needs to be a global variable as final sound choice 
// will be used on next run
//Used for debug output in console and inline HTML
var debug=false;

function strings()
{
    randomNoise();
    
    if(debug) debugOutput("Initializing Variables");
    var str1= document.getElementById("initString").value;
    if(debug) debugOutput("Obtained str1 variable: " + str1);
    if(debug) debugOutput("Obtaining lowercase of str1 ");
    var lowStr1=toSmall(str1);
    if(debug) debugOutput("Obtained lowStr1: " + lowStr1);



//String manipulation
//Step 1 of palindrome is convert characters to same type
function toSmall(word)
{
    word=word.toLowerCase();
    return word;
}
//Step 2 is to convert string to array
function toArray(word)
{
    word=word.split('');
    return word;
}

//Step 3 reverse the string and convert array to string
function toFlip(word)
{
    word=toArray(word);
    word=word.reverse();
    word=word.join('');
    return word;
}

//Creating reverse of String 1
var revStr1=toSmall(str1);
if(debug) debugOutput("Converted String 1 to lowercase: " + revStr1);
revStr1=toFlip(revStr1);
if(debug) debugOutput("Reversed String 1: " + revStr1);

var final="";
// ====== Final check on the palindrome
if(revStr1==lowStr1) 
{
final="You have found a palindrome";
document.getElementById("palOutput").style.color= 'green';
displayImage("thumbsUp.png");
}
else {
final="No palindrome detected, try again!";
document.getElementById("palOutput").style.color= 'deepskyblue';
displayImage("thumbsDown.png");
}
document.getElementById("palOutput").innerHTML = final;


//Random Number generator
function randomNum(min,max)
{
    return Math.floor(Math.random() * (max-min+1)+min);
}

//========= Image work

//Function is to set the thumbs up or down depending on the result
function displayImage(src){
    var image = document.getElementById("resultIMG");
    image.src = src;
    image.style.width = (window.innerWidth*0.2) +"px";
}


//========= Sound 


function randomNoise(){
    
    //Set of sound effects to be played each time
    var sounds=["interface-124464.mp3", "wrong-answer-129254.mp3", "click-124467.mp3", "beep-6-96243.mp3", "ping-82822.mp3"];
    if (debug) debugOutput("Current sound settings..." + sounds[currentSound] + "..... current position...." + currentSound);
    currentSound= randomNum(0,sounds.length - 1);
    var mysound = new playSound(sounds[currentSound]);
    //mysound.volume = 0.4;
    if(debug) debugOutput("Attempting to play sound");
    mysound.play();
    // Parantehese first adds 1 to the color
    // If that total modluo the length of the array
}



//function to play any sound element given a source
function playSound(src){
    this.sound = document.createElement("audio");
    this.sound.src = src;
        this.play = function (){
            this.sound.play();
        }
}





function debugOutput(reason)
{
    console.log(reason);
    document.getElementById("debugStr").innerHTML = "Last Debug Output: " + reason;
}
}
var navBar=true;
function naviBar(){
    if(navBar){
        document.getElementById("navBar").hidden=true;
        navBar=false;
    } else {
        document.getElementById("navBar").hidden=false;
        navBar=true;
    }
}