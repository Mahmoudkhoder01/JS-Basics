document.getElementById("validate").addEventListener("click", function() {
    var shoeSize = document.getElementById("shoe_size").value;
    var year = document.getElementById("year").value;
    var result = (shoeSize * 2 + 5)*50 - year + 1766;
    alert(result);
});