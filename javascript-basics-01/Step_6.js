var first = prompt("Your first number:")
document.getElementById("first_number").value = first;
var second = prompt("Your second number")
document.getElementById("second_number").value = second;
var sum = first % second;
document.getElementById("validate").addEventListener("click", function() {
    alert(sum);
}); 