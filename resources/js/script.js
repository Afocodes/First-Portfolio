// Get the current time in milliseconds
var startTime = new Date().getTime();

// Update the time spent every second
setInterval(function () {
    var currentTime = new Date().getTime();
    var timeSpent = (currentTime - startTime) / 1000; // Convert to seconds
    document.getElementById("time-spent").innerHTML = "Time spent on this page: " + timeSpent + " seconds";
}, 1000);