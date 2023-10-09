//Created by Connor C.
var navBar = true;
document.addEventListener("DOMContentLoaded", function () {
    setInterval(update, 250); // Update every 250 milliseconds (0.25 second)
});

function naviBar() {
    if (navBar) {
        document.getElementById("navBar").hidden = true;
        navBar = false;
    } else {
        document.getElementById("navBar").hidden = false;
        navBar = true;
    }
}

// Functions to obtain usable space available on screen
function obtainHeight() {
    document.getElementById("wHeight").innerHTML = window.innerHeight - 1;
}
function obtainWidth() {
    document.getElementById("wWidth").innerHTML = window.innerWidth - 1;
}

function obtainDate() {
    var currentDate = new Date(); // Create a Date object
    var year = currentDate.getFullYear(); // 4-digit year (e.g., 2023)
    var month = currentDate.getMonth() + 1; // Month (0-11, so add 1 for Normal Calendar)
    var day = currentDate.getDate(); // Day of the month (1-31)
    // Create a formatted date string
    var formattedDate = year + "-" + month + "-" + day;

    document.getElementById("date").innerHTML = formattedDate;
}

function obtainTime() {
    var currentDate = new Date(); // Create a Date object
    var hours = currentDate.getHours(); // Hours (0-23)
    var minutes = currentDate.getMinutes(); // Minutes (0-59)
    var seconds = currentDate.getSeconds(); // Seconds (0-59)
    var formattedTime = hours + ":" + minutes + ":" + seconds;
    document.getElementById("time").innerHTML = formattedTime;
}

function update() {
    obtainDate();
    obtainTime();
    obtainHeight();
    obtainWidth();
}
