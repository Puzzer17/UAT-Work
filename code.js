// Created by Connor C.

//Used for debug output in console and inline HTML
var debug=false;
var currentColor=0;//variable to determine background color in rEvent1
function strings()
{
    
    var pass=false;
    if(debug) debugOutput("Initializing Variables");
    var firstName= document.getElementById("firstName").value;
    if(debug) debugOutput("Obtained firstName: " + firstName);
    var lastName= document.getElementById("lastName").value;
    if(debug) debugOutput("Obtained lastName: " + lastName);
    var zipCode= document.getElementById("zipCode").value;

    //Checking if fields are empty
    if(firstName == "" || lastName == "" || zipCode == "")
    {
        document.getElementById("userMSG").style.color = 'red';
        document.getElementById("userMSG").innerHTML = "Please fill in the values below";
        return false;
    }
    //Checking information around the Zipcode with option to enable debugging
    if(toSmall(zipCode) == "debug") debug=true;
    else {
        debug=false;
        document.getElementById("debugStr").innerHTML = "";
    }//=========== Bad Zipcode
    if(debug) debugOutput("Obtained zipCode: " + zipCode);
    if(zipCode.length < 5 || zipCode.length > 5) {
        document.getElementById("userMSG").style.color = 'red';
        document.getElementById("userMSG").innerHTML = "Zip code needs 5 characters, try again."
        document.getElementById("palOutput").innerHTML = "";
        return false;
    } 
    else if (zipCode.length == 5) document.getElementById("userMSG").innerHTML = "";
    //========= Checking information regarding First and Last name
    var length=firstName.length+lastName.length;
    if(debug) debugOutput("Now Zipcode passed, character length: " + length);
    if(length > 20) {
        if(debug) debugOutput("Character Length Failed");
        document.getElementById("userMSG").style.color = 'red';
        document.getElementById("userMSG").innerHTML = "Unfortunately you have a long name, try shortening it";
        document.getElementById("palOutput").innerHTML = "";
        return false;
    }
    else if (length <= 20) // ==== Passed Every Test
    {
        if(debug) debugOutput("Character Length Passed");
        document.getElementById("palOutput").style.color = 'lightgreen';
        document.getElementById("palOutput").innerHTML = "Congratualations " + lastName + "! You matched the requirement to recieve a lucky number!";
        if(debug) debugOutput("Generating Random Number");
        document.getElementById("userMSG").innerHTML = randomNum(1,2400);
        document.getElementById("userMSG").style.color = "lightgreen";
        var randomEvent=randomNum(1,3);
        if(debug) debugOutput("Rolled random event: " + randomEvent);
        document.getElementById("userMSG1").innerHTML = "You have passed every test, rolling random event";
        if(randomEvent==1) rEvent1();
        if(randomEvent==2) rEvent2();
        if(randomEvent==3) rEvent3();
    }
//=======  Random number for lucky number =========

function randomNum(min,max)
{
    return Math.floor(Math.random() * (max-min+1)+min);
}

//=============== String manipulation =======================
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

// ========= Random Events ====================

//===== This random event is to change the color

function rEvent1(){
    document.getElementById("userMSG1").innerHTML = "The color changed! Spooky o.O ";
    if(debug) debugOutput("Initiating Random Event 1.... Current Color..." + currentColor);
    var body=document.body //variable to control background
    body.style.backgroundImage = "none";
    //Need an array to cycle through colors for added variation
    var colors=["#333333", "#1E1E1E", "#191970", "#2F4F4F", "#556B2F"];
    if(debug) debugOutput("Colors loaded.... Current Color.... " +colors[currentColor]);
    //Changing the background color to the current color in the array
    if(debug) debugOutput("Attempting background color change");
    body.style.backgroundColor= colors[currentColor];
    
    currentColor = (currentColor + 1) % colors.length;
    // Parantehese first adds 1 to the color
    // If that total modluo the length of the array
}

//========= This random event is to start a radio
function rEvent2(){
    var audio = document.getElementById("radio");
    // Set the initial volume to 20%
    audio.volume = 0.2;
    audio.removeAttribute("hidden");
    document.getElementById("userMSG1").innerHTML = "Congratualtions! You found a radio!";
    
}


//========= This random even gives a cat
function rEvent3(){
    var meowdy = document.getElementById("meowdy");
    if(debug) debugOutput("Setting Meowdy be visible");
    document.getElementById("meowdy").hidden = "false";
    document.getElementById("userMSG1").innerHTML = "Poor little guy needs a break, watch over him for me please.";
    if(debug) debugOutput("Width...." + obtainWidth() + "....Height...." + obtainHeight());
    meowdy.style.display = "block";
    meowdy.style.width = (obtainWidth()*0.2) + "px";
    meowdy.style.left = (obtainWidth()*0.65) + "px";
    meowdy.style.top = (obtainHeight()*0.65) + "px";
}

//functions to obtain usable space available on screen
function obtainHeight(){
    return window.innerHeight - 1
}
function obtainWidth(){
    return window.innerWidth - 1
}


function debugOutput(reason)
{
    console.log(reason);
    document.getElementById("debugStr").style.color = 'red';
    document.getElementById("debugStr").innerHTML = "Last Debug Output: " + reason;
}
}