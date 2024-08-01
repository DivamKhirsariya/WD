var person = {
    name: "Divam",
    age: 20,
    occupation: "Full Stack Developer"
};
console.log(person.name);
console.log(person.age);
console.log(person.occupation);

document.getElementById("Element1").innerHTML = "Hello! Divam";

function changeText() {
    var element = document.getElementById("Element2");
    element.innerHTML = "Hola! Divam";
}