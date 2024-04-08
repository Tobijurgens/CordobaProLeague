const selector = document.getElementById('selectorFecha');

const fecha1 = document.getElementById('fecha1');
const fecha2 = document.getElementById('fecha2');
const fecha3 = document.getElementById('fecha3');
const fecha4 = document.getElementById('fecha4');
const fecha5 = document.getElementById('fecha5');
const fecha6 = document.getElementById('fecha6');
const fecha7 = document.getElementById('fecha7');

document.addEventListener('DOMContentLoaded', function(){
    fecha1.style.display = 'block';
    fecha2.style.display = 'none';
    fecha3.style.display = 'none';
    fecha4.style.display = 'none';
    fecha5.style.display = 'none';
    fecha6.style.display = 'none';
    fecha7.style.display = 'none';
})


selector.addEventListener('change', function() {
    fecha1.style.display = 'none';
    fecha2.style.display = 'none';
    fecha3.style.display = 'none';
    fecha4.style.display = 'none';
    fecha5.style.display = 'none';
    fecha6.style.display = 'none';
    fecha7.style.display = 'none';

    const opcionSeleccionada = selector.value;
    document.getElementById(opcionSeleccionada).style.display = 'block';
});