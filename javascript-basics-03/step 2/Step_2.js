var x = document.getElementById("show");
var y = document.getElementById("hide");
var z = document.getElementById("texte")
var as = document.querySelectorAll("a")

as.forEach((e) => {
    e.addEventListener("click", (e) =>{
    if(e.target.id == "hide"){
        z.style.display = "none"
    } else {
        z.style.display = "block"
    }
})});