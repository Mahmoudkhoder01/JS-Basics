document.getElementById("validate").addEventListener("click", function() {
    var first = document.getElementById("first_number").value;
    var second = document.getElementById("second_number").value;
    var sum = first % second;
    alert(sum);
});