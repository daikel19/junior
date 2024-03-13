const datos={
    nombre: '',
    email: '',
    mensaje: '',
}

const nombre=document.querySelector('#form-name')
const email=document.querySelector('#form-email')
const mensaje=document.querySelector('#form-message')

const formulario=document.querySelector(".send-message-button")

nombre.addEventListener('input', leerTexto)
email.addEventListener('input', leerTexto)
mensaje.addEventListener('input', leerTexto)
   



formulario.addEventListener('submit' , function (e){
     e.preventDefault();

     console.log("zorra")
     //Comprobar que no haya campos en datos vacío

    const {nombre, email, mensaje}=datos;

     if( nombre==="" || email==="" || mensaje==""){
        //si esta vacio algun campo mostrar error
        mostrarError("Todos los campos son obligatorios")
        return;
     }
    
    
     //Y  si todo esta corrector enviar y mostrar mensaje enviado
     console.log("Todo bien")
    mostrarMensaje("Mensaje enviado correctamente")
})
function leerTexto(e){
    datos[e.target.id]=e.target.value;
    console.log(datos)
}
function mostrarError(mensaje){
    const alerta=document.createElement('p')
    alerta.textContent=mensaje;
    alerta.classList.add('error');
    formulario.appendChild(alerta)
    setTimeout(()=>{
        alerta.remove()
    },2000);
}

function mostrarMensaje(mensaje){
    const alerta=document.createElement('p')
    alerta.textContent=mensaje;
    alerta.classList.add('Mensaje');
    formulario.appendChild(alerta)
    setTimeout(()=>{
        alerta.remove()
    },2000);
}


