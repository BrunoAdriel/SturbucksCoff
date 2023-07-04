//Pagina de Registro 

function contentRegister(){
let nombre = document.getElementById("Name");
let apellido = document.getElementById("Surname")
let contraseña1 = document.getElementById("Pass1");
let contraseña2 = document.getElementById("Pass2");
let email = document.getElementById("Email");
let cumpleaños = document.getElementById("Birthday");

console.log(nombre.innerHTML);
console.log(apellido.innerHTML);
console.log(contraseña1.innerHTML);
console.log(contraseña2.innerHTML);
console.log(email.innerHTML);
console.log(cumpleaños.innerHTML);
}

contentRegister();