
const registerForm = document.querySelector('#registerForm')

registerForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const nombre = document.querySelector('#nombre').value
    const apellido = document.querySelector('#apellido').value
    const email = document.querySelector('#email').value
    const contraseña = document.querySelector('#contraseña').value

    const usuarios = JSON.parse(localStorage.getItem('usuariosNuevos')) || [];
    const usuarioRegistrado = usuarios.find (e => e.email === email );
    if(usuarioRegistrado){
        return alert('Este email ya esta registrado')
    }


    usuarios.push({nombre: nombre, apellido: apellido, email: email, contraseña: contraseña})
    localStorage.setItem('usuariosNuevos', JSON.stringify(usuarios))
    alert('Registro Exitoso!!')
})
