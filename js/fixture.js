const selectorFecha = document.getElementById('selectorFecha');

const fecha1 = document.getElementById('fecha1');
const fecha2 = document.getElementById('fecha2');
const fecha3 = document.getElementById('fecha3');
const fecha4 = document.getElementById('fecha4');
const fecha5 = document.getElementById('fecha5');
const fecha6 = document.getElementById('fecha6');
const fecha7 = document.getElementById('fecha7');

const selectorCategoria = document.getElementById('selectorCategoria');

const contenidos = document.querySelectorAll(".contenedorDatos");

selectorCategoria.addEventListener('change', function(){
    cambiarValores(contenidos);
})

function cambiarValores(contenedorDatos) {
    contenedorDatos.forEach(contenedor => {
        const segundoParrafo = contenedor.querySelector('p:nth-child(2)');
        
        if (segundoParrafo) {
            segundoParrafo.remove();
        }

        var datosHorario = document.createElement('p');
        if (selectorCategoria.value == "0809") {
            datosHorario.innerHTML = `Categoria 2008-2009 - 08:45hs a 10:30hs`;
        }else if (selectorCategoria.value == "1011"){
            datosHorario.innerHTML = `Categoria 2010-2011 - 08:45hs a 10:30hs`;
        }else if (selectorCategoria.value == "1213"){
            datosHorario.innerHTML = `Categoria 2012-2013 - 08:45hs a 10:30hs`;
        }else if (selectorCategoria.value == "1415"){
            datosHorario.innerHTML = `Categoria 2014-2015 - 10:45hs a 12:15hs`;
        }else if (selectorCategoria.value == "1617"){
            datosHorario.innerHTML = `Categoria 2016-2017 - 10:45hs a 12:15hs`;
        }else if (selectorCategoria.value == "1819"){
            datosHorario.innerHTML = `Categoria 2018-2019 - 10:45hs a 12:15hs`;
        };
        contenedor.appendChild(datosHorario);
    });
};

document.addEventListener('DOMContentLoaded', function(){
    cambiarValores(contenidos);

    fecha1.style.display = 'block';
    fecha2.style.display = 'none';
    fecha3.style.display = 'none';
    fecha4.style.display = 'none';
    fecha5.style.display = 'none';
    fecha6.style.display = 'none';
    fecha7.style.display = 'none';
})


selectorFecha.addEventListener('change', function() {
    fecha1.style.display = 'none';
    fecha2.style.display = 'none';
    fecha3.style.display = 'none';
    fecha4.style.display = 'none';
    fecha5.style.display = 'none';
    fecha6.style.display = 'none';
    fecha7.style.display = 'none';
    
    const opcionSeleccionada = selectorFecha.value;
    document.getElementById(opcionSeleccionada).style.display = 'block';
    cambiarValores(contenidos);
});

