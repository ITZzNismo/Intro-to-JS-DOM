function task5() {
    var input = document.getElementById("task5Input");
    var button = document.getElementById("task5SubmitButton");
    var output = document.getElementById("task5Output");
    var submitFunction = function(event) {
        event.preventDefault();
        output.innerHTML = input.value + " * 5 = " + (5 * input.value);
    };

    button.addEventListener("click", submitFunction);
}