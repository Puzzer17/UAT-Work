// Created by Connor C.

function strings()
{
    //Used for debug output in console and inline HTML
    var debug=false;
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
final.innerHtml = "";

if(revStr1==lowStr1) 
{
final="You have found a palindrome";
document.getElementById("palOutput").style.color= 'green';
}
else {
final="No palindrome detected, try again!";
document.getElementById("palOutput").style.color= 'deepskyblue';
}
document.getElementById("palOutput").innerHTML = final;


function debugOutput(reason)
{
    console.log(reason);
    document.getElementById("debugStr").innerHTML = "Last Debug Output: " + reason;
}
}