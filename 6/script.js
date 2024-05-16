document.addEventListener('DOMContentLoaded', function () {
    const elementos = document.querySelectorAll('.elemento');

    elementos.forEach(function (elemento) {
        elemento.addEventListener('click', function () {
         
            if (elemento.style.backgroundColor === 'red') {
                elemento.style.backgroundColor = 'blue';

            } else {
                
                elemento.style.backgroundColor = 'red';
            }
        });
    });
});