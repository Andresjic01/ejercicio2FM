function validar(event) {
    var mensaje = document.getElementById("mensaje");
    var emailInput = document.getElementById("email");
    var email = emailInput.value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var mostrardiv = document.getElementById("mostrar");
    var fondomodal =document.getElementById("fondomodal")
    

    if (emailRegex.test(email)) {
        event.preventDefault();
        mostrardiv.style.display="block";
        document.getElementById("resultado").textContent = email;
        fondomodal.style.display= "block"
    } else {
        event.preventDefault();
        mensaje.style.display = "block";
        emailInput.style.background = "hsl(4, 100%, 67%, 0.400)";
}
}

var formulario = document.getElementById("form");
formulario.addEventListener("submit", validar);

function cerrar(params) {
    var cerrarmodal = document.getElementById("mostrar");
    var cerrarfondo = document.getElementById("fondomodal");

    cerrarfondo.style.display = "none"
    cerrarmodal.style.display = "none"
    
}