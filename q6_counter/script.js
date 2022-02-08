let count = 0;
let box = document.querySelector("#box");

// let number = document.querySelectorAll("button.no");
document.querySelector("#increment").addEventListener("click", function () {
    count += 1;
    box.innerHTML = count;
    if (count % 2 == 0) {
        box.style.color = "green";
    } if (count % 2 == 1) {
        box.style.color = "red"
    }
    if (count >= 10) {
        document.querySelector("#increment").disabled = true;
    }
})

document.querySelector("#minus").addEventListener("click", function () {
    count = count - 1;
    box.innerHTML = count;
    if (count % 2 == 0) {
        box.style.color = "green";
    } if (count % 2 == 1) {
        box.style.color = "red"
    }
    if (count <= 0) {
        document.querySelector("#minus").disabled = true;
    }
})

document.querySelector("#reset").addEventListener("click", function () {
    box.innerHTML = 0;
    box.style.color = "green";
    document.querySelector("#increment").disabled = false;
    document.querySelector("#minus").disabled = false;
})


// if (count>10){
//     document.getElementById("btn").disabled = true;

// if (count % 2 == 0) {
//     box.style.color = "green";
// } else if (count % 2 == 1) {
//     box.style.color = "red"
// } 

