var x = document.getElementById("show");
var y = document.getElementById("hide");
var z = document.getElementById("texte")

x.onclick = function(){
    z.style.display = "block";
}

y.onclick = function(){
    z.style.display = "none";
}