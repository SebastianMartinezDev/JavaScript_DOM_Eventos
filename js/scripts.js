// querySelector
const heading = document.querySelector('.header__texto h2'); //Retorna 0 o 1 Elemento
// console.log(heading);

// querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
// console.log(enlaces[0]);


// getElementById
const heading2 = document.getElementById('heading');
// console.log(heading2);

// Generar un nuevo enlace
const nuevoEnlace = document.createElement('A');

// Agregar el href
nuevoEnlace.href =  'nuevo-enlace.html';

// Agregar el texto
nuevoEnlace.textContent = 'Tienda';

// Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');

// Agregar nuevo enlace al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);


console.log(nuevoEnlace);


// Eventos

// console.log(1);

// window.addEventListener('load',function(){ //Load espera a que todo esté listo (HTML, CSS, Img, etc)
//     console.log(2);
// });

// window.onload = function(){ //onLoad espera a que todo esté listo
//     console.log(3);
// };

// document.addEventListener('DOMContentLoaded', function(){ //Sólo espera que se descargue HTML pero no espera a CSS e imágenes
//     console.log(4);
// });

// console.log(5);

// window.onscroll = function(){
//     console.log('scrolling...');
// };


// Seleccionar elementos y asociarles eventos //

// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(evento){
//     console.log(evento);
//     evento.preventDefault();

//     // Validar el formulario //

//     console.log('Enviar Formulario');
// });


// Eventos de los inputs y textarea
const datos = {
    nombre: '',
    email: '',
    mensaje: '',
};

// Variables
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

// addEventListener
nombre.addEventListener('input',leerTexto);
email.addEventListener('input',leerTexto);
mensaje.addEventListener('input',leerTexto);

//Evento de submit
formulario.addEventListener('submit',function(evento){
    evento.preventDefault();

    // Validar el formulario
    const { nombre, email, mensaje } = datos;

    if(nombre === '' || email === '' || mensaje === ''){
        mostrarAlerta('Todos los campos son obligatorios','error');
        return;
    }

    // Enviar el formulario
    mostrarAlerta('El mensaje se envió correctamente', 'correcto');
});

// Funciones
function leerTexto(e){
    datos[e.target.id] = e.target.value;    
    //console.log(datos);    
}

function mostrarAlerta(mensaje,tipo){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    alerta.classList.add(tipo);

    formulario.appendChild(alerta);

    // Desaparición de alerta
    setTimeout(() => {alerta.remove()}, 5000);
}

//Se resolvió de manera más compacta

// function mostrarError(mensaje){
//     error.classList.add('error');

//     formulario.appendChild(error);

//     // Desaparición de alerta
//     setTimeout(() => {error.remove()}, 5000);
// }

// function mostrarCorrecto(mensaje){
//     correcto.classList.add('correcto');

//     formulario.appendChild(correcto);

//     // Desaparición de alerta
//     setTimeout(() => {correcto.remove()}, 5000);
// }

