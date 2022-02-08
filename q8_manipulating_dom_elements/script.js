// PLACE YOUR CODE HERE
let empha = document.querySelectorAll(".emphasis");
for (let e of empha) {
    e.style.fontFamily = "Verdana";
}

let fin = document.querySelectorAll("li.finished");
for (let f of fin) {
    f.style.textDecoration = "line-through";
}

let todo = document.querySelectorAll("#low-priority li.todo");
for (let t of todo) {
    t.style.backgroundColor = "blue";
}

let alert = document.querySelectorAll(".alert");
for (let a of alert) {
    a.style.color = "red";
}