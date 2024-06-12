/* const imagenes = document.querySelectorAll('.equipos');

imagenes.forEach(imagen => {
    imagen.addEventListener('click', function() {
        if (!document.fullscreenElement) {
            imagen.requestFullscreen().catch(err => {
                console.error(`Error al intentar entrar en modo pantalla completa: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    });
}); */
/* const imagenes = document.querySelectorAll('.equipos img');

imagenes.forEach(imagen => {
    imagen.addEventListener('click', function() {
        const popup = document.createElement('div');
        popup.classList.add('popup');
        const imgPopup = document.createElement('img');
        imgPopup.src = this.src;
        popup.appendChild(imgPopup);
        document.body.appendChild(popup);
        popup.addEventListener('click', function() {
            this.remove();
        });
    });
}); */