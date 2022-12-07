document.getElementById("validate").addEventListener("click", function () {
  var age = document.getElementById("age").value;
  if (age < 18) {
    alert("you are under 18")
} else{
    alert("you are over 18");
}
});
