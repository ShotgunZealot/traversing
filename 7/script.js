document.addEventListener('DOMContentLoaded', function () {
    const campoBusqueda = document.getElementById('busqueda');
    const parrafos = document.querySelectorAll('p');

    campoBusqueda.addEventListener('input', function () {
        const textoBusqueda = campoBusqueda.value.trim().toLowerCase();

        parrafos.forEach(function (parrafo) {

            const textoParrafo = parrafo.textContent.toLocaleLowerCase();
            if (textoParrafo.includes(textoBusqueda)) {
                const textoResaltado = parrafo.textContent.replace(new RegExp(textoBusqueda, 'gi'), '<span class="resaltado">$&</span>');
                parrafo.innerHTML = textoResaltado;
            } else {
                parrafo.innerHTML = parrafo.textContent;
            }
        });
    });
});
