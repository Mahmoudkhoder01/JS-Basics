let g = document.querySelector(".green");
let r = document.querySelector(".red");
let b = document.querySelector(".blue");
let d = document.getElementById("text");

g.onclick = function () {
  d.style.color = "green";
};

r.onclick = function () {
  d.style.color = "red";
};

b.onclick = function () {
  d.style.color = "blue";
};
