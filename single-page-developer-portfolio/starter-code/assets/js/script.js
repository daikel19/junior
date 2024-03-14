const datos = {
    name: "",
    email: "",
    message: "",
  };
  
  const nameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");
  const messageInput = document.querySelector("#message");
  const errorName = document.querySelector("#error-name");
  const errorEmail = document.querySelector("#error-email");
  const errorMessage = document.querySelector("#error-message");
  
  const formulario = document.querySelector(".contact-form");
  
  nameInput.addEventListener("input", leerTexto);
  emailInput.addEventListener("input", leerTexto);
  messageInput.addEventListener("input", leerTexto);
  
  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const { name, email, message } = datos;
  
 
    if (name === "" || email === "" || message === "") {
      errorName.textContent = "El nombre es obligatorio";
      errorEmail.textContent = "El email es obligatorio";
      errorMessage.textContent = "El mensaje es obligatorio";
      return;
    }
  
 
    if (!validarEmail(email)) {
      errorEmail.textContent = "El email no es válido";
      return;
    }
 
    console.log("Formulario enviado con éxito:", datos);
  

    mostrarMensaje("Mensaje enviado correctamente");
  });
  
  function leerTexto(e) {
    datos[e.target.id] = e.target.value;
  }
  
  function mostrarMensaje(mensaje) {
    const alerta = document.createElement("p");
    alerta.textContent = mensaje;
    alerta.classList.add("Mensaje");
    formulario.appendChild(alerta);
    setTimeout(() => {
      alerta.remove();
    }, 2000);
  }
  
  function validarEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  