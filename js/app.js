/*function hello(name) {
  return "hello! " + name;
}
function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}
function multiply(x, y) {
  return x * y;
}
function divide(x, y) {
  return x / y;
}
function power(x, y) {
  return x ** y;
}*/
function hello(name) {
  alert("hello " + name + "!");
}
var potato = prompt("whats your name?");
if (potato === "" || potato === null) {
  alert("please put something there!");
  window.location.reload();
} else if (potato.length < 2) {
  alert("Too short");
  window.location.reload();
} else {
  hello(potato);
}

var heart = $("heart");
heart.on("click", function() {
  $(this).removeClass("far");
  $(this).addClass("fa clicked-heart");
});

var heart = $("#heart");

heart.on("click", function() {
  $(this).removeClass("far");
  $(this).addClass("fa clicked-heart");
});
