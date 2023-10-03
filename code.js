// Created by Connor C.

function strings()
{
    //Used for debug output in console and inline HTML
    var debug=false;
    var final="";
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
    if(debug) debugOutput("Obtained zipCode: " + zipCode);
    if(zipCode.length < 5 || zipCode.length > 5) {
        document.getElementById("userMSG").style.color = 'red';
        document.getElementById("userMSG").innerHTML = "Zip code needs 5 characters, try again."
        document.getElementById("palOutput").innerHTML = "";
        return false;
    } 
    else if (zipCode.length == 5) document.getElementById("userMSG").innerHTML = "";
    //Checking information regarding First and Last name
    var length=firstName.length+lastName.length;
    if(debug) debugOutput("Now Zipcode passed, character length: " + length);
    if(length > 20) {
        if(debug) debugOutput("Character Length Failed");
        document.getElementById("userMSG").style.color = 'red';
        document.getElementById("userMSG").innerHTML = "Unfortunately you have a long name, try shortening it";
        document.getElementById("palOutput").innerHTML = "";
        return false;
    }
    else if (length <= 20) 
    {
        if(debug) debugOutput("Character Length Passed");
        document.getElementById("palOutput").style.color = 'lightgreen';
        document.getElementById("palOutput").innerHTML = "Congratualations " + lastName + "! You matched the requirement to recieve a lucky number!";
        if(debug) debugOutput("Generating Random Number");
        document.getElementById("userMSG").innerHTML = randomNum();
        document.getElementById("userMSG").style.color = "lightgreen";
    }
//Random number for lucky number

function randomNum()
{
    min=1
    max=2400
    return Math.floor(Math.random() * (max-min)+min);
}

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




function debugOutput(reason)
{
    console.log(reason);
    document.getElementById("debugStr").style.color = 'red';
    document.getElementById("debugStr").innerHTML = "Last Debug Output: " + reason;
}
}