// Created by Connor C.
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