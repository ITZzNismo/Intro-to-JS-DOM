function task2() {
    var pTag = document.getElementById("task2ID");
    var task2Text = document.createTextNode("This is task 2 ");
    pTag.appendChild(task2Text);
    var task2 = document.getElementById("task2ID");
    task2.appendChild(task2Text);
}