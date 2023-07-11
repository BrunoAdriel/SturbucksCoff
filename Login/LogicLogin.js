//vinculacion del formulario con JS
const loginForm = document.getElementById('loginForm')

//Funciones
loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const email = document.getElementById('email').value;
    const contrasenia = document.getElementById('contrasenia').value;
    const usuarios = JSON.parse(localStorage.getItem('usuariosNuevos')) || [] ;
    const userValido = usuarios.find(e => e.email === email && e.contrasenia === contrasenia );
    if(!userValido){
        return alert('Contraseña o Email incorrectos!')
    }else{
        alert(`Bienvenido ${userValido.nombre}, te llevaremos al inicio`);
        window.location.href ='../index.html';
    }

})









