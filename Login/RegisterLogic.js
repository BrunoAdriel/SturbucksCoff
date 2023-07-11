//vinculo el formulario al JS
const registerForm = document.querySelector('#registerForm');

//obtencion de datos y guardado en local
registerForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const nombre = document.querySelector('#nombre').value;
    const email = document.querySelector('#email').value;
    const contrasenia = document.querySelector('#contrasenia').value;
    const contraseniaConfirm = document.querySelector('#contraseniaConfirm').value;

    const usuarios = JSON.parse(localStorage.getItem('usuariosNuevos')) || [];
    const usuarioRegistrado = usuarios.find (e => e.email === email );
    if(usuarioRegistrado){
        return alert('Este email ya esta registrado');
    } else if(contrasenia != contraseniaConfirm){
        return alert('las contraseñas no coindicen!');
    } 
    else{
        alert('Registro Exitoso!! Te llevaremos a la pagina de Ingreso.');
        window.location.href = 'Login.html'
    }

//subida de datos al array en el caso de que se cumplan las condiciones
    usuarios.push({nombre: nombre, email: email, contrasenia: contrasenia, contraseniaConfirm: contraseniaConfirm})
    localStorage.setItem('usuariosNuevos', JSON.stringify(usuarios))

})
