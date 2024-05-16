document.addEventListener('DOMContentLoaded', function () {
    const elementos = document.querySelectorAll('#elementos li');
    const botonesEliminar = document.querySelectorAll('.eliminar');

    botonesEliminar.forEach(function (boton, index) {
        boton.addEventListener('click', function () {
            eliminarElemento(index);
            console.log(index);
        });
    });

    function eliminarElemento(index) {

        elementos[index].remove();
    }

});