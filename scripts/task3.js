function task3() {
    var mouseOverEvent = document.getElementById("task3Event");
    var myFunction = function() {
        alert("This is the task 3 alert");
    };

    mouseOverEvent.addEventListener("mouseover", myFunction);
}