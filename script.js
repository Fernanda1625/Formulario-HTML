function validarFormulario()
{
var enviar = true;
var expRegNombre=/^[a-záéíóúñ\s]+$/i;
var expRegApellido=/^[a-záéíóúñ\s]+$/i;
var expRegEmail=/^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/;
var expRegUrl=/^(http|https|ftp)+\:+\/\/+(www\.|)+[a-z0-9\-\.]+([a-z\.]|)+\.[a-z]{2,4}$/i; 
var expRegTelefono=/[0-9]{9}$/; 
var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var direccion = document.getElementById("direccion");
var email = document.getElementById("email");
var url = document.getElementById("url");
var telefono = document.getElementById("telefono");
var mensaje = document.getElementById("mensaje");
var formulario = document.getElementById("formulario");
if(!nombre.value)
{
	alert("Escriba su nombre por favor.");
	enviar=false;
	nombre.focus();
}else if(!expRegNombre.exec(nombre.value))
{
	alert("Este campo acepta solo letras a-zA-Z.");
	enviar=false;
	nombre.focus();
}else if(!apellido.value)
{
	alert("Escriba su apellido por favor.");
	enviar=false;
	apellido.focus();
}else if(!expRegApellido.exec(apellido.value))
{
	alert("Este campo solo acepta letras a-zA-Z.");
	enviar=false;
	apellido.focus();
}else if(!direccion.value)
{
	alert("Escriba su direcci&oacute;n por favor.");
	enviar=false;
	direccion.focus();
}else if(!email.value)
{
	alert("Escriba su email por favor.");
	enviar=false;
	email.focus();
}else if(!expRegEmail.exec(email.value))
{
	alert("Ingrese un email valido por favor.");
	enviar=false;
	email.focus();
}else if((url.value!="") == !expRegUrl.exec(url.value))
{
	alert("Escriba una direccion URL valida por favor.");
	enviar=false;
	url.focus();
}else if(!telefono.value)
{
	alert("Escriba su numero de telefono.");
	enviar=false;
	telefono.focus();
}else if(!expRegTelefono.exec(telefono.value))
{
	alert("este campo acepta solo numeros 0-9.");
	enviar=false;
	telefono.focus();
}else if(!mensaje.value)
{
	alert("Escribe tu mensaje para Fernanda.");
	enviar=false;
	mensaje.focus();
}
if(enviar)
}
	document.formulario.submit()
}
}

window.onload=function()
{
    var botonEnviar = document.getElementById("enviar");
	botonEnviar.onclick=validarFormulario;
}	