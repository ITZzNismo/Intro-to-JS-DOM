function task4() {
    var link = document.getElementById("task4Link");
    var interceptFunction = function(event) {
        event.preventDefault();
        alert("Why are you leaving my site?");
    }
    
    link.addEventListener("click", interceptFunction);
}