var name = prompt("Your name please:");
document.getElementById("name").value = name;
var surname = prompt("Your surname please:");
document.getElementById("surname").value = surname;
var city = prompt("Your city please:");
document.getElementById("city").value = city;


document.getElementById("validate").onclick = function() {
    alert(`
        Name: ${name}
        Surname: ${surname}
        City: ${city}
    `)
};

