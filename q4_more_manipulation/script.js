let header = document.querySelector("h1");
header.style.color = "green";

let bills = document.querySelector(".finished");
bills.innerText = "Repay credit card debt";

let urgent = document.querySelector("li#urgent");
urgent.style.borderWidth = "2px";
urgent.style.borderColor = "black";
urgent.style.borderStyle = "solid";

document.querySelector(".emphasis").style.textDecoration = "underline";

let pText = document.querySelector("p.emphasis");
pText.style.backgroundColor = "orange";
pText.style.fontSize = "32px";
pText.style.lineHeight = "24px";

document.querySelector("li#urgent span.todo").style.backgroundColor = "yellow";

let header2 = document.querySelector("h2");
header2.innerHTML = `<span class="greetings">About Us</span>`