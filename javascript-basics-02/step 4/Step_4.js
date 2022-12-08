document.querySelector("[name='button']").onclick = function () {
  let yesOrno = prompt(
    "Do you need to delete this? Type yes if you need and no if you don't"
  );
  if (yesOrno == "yes") {
    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("city").value = "";
  } else if (yesOrno == "no") {
    alert("It will not erased, you are lucky")
  }
};
