// Get the current time in milliseconds
var startTime = new Date().getTime();

// Update the time spent every second
setInterval(function () {
    var currentTime = new Date().getTime();
    var timeSpent = (currentTime - startTime) / 1000; // Convert to seconds
    document.getElementById("time-spent").innerHTML = "You spent so far " + timeSpent + " seconds without connecting with me on LinkedIn";
}, 1000);