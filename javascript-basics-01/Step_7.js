var shoeSize = prompt("Your hsoe size please");
document.getElementById("shoe_size").value = shoeSize;
var year = prompt("Your year age please:");
document.getElementById("year").value = year;
var result = (shoeSize * 2 + 5)*50 - year + 1766;
document.getElementById("validate").addEventListener("click", function() {
    alert(result);
});