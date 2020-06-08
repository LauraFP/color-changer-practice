var time;
var body;

function setTime() {
  var now = new Date();
  time.innerHTML = now.toString().substring(16, 24);
  body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

window.onload = function () {
  time = document.getElementById("time");
  body = document.getElementsByTagName("body")[0];
  setInterval(setTime, 1000);
}
