// USE THOSE VARIABLES TO MODIFY THE DOM ELEMENTS
let header = document.querySelector('h1').innerText = "Hello world!";
let important = document.querySelector('#important');
important.style.backgroundColor = "red";
let todo = document.querySelector('li.todo');
todo.style.fontFamily = "Verdana";
todo.style.fontSize = "16px";

// LEAVE THE BELOW ALONE! DON'T TOUCH
try {
   module.exports = exports = {header, important, todo};
} catch (e) {}