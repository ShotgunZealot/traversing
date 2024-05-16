document.addEventListener('DOMContentLoaded', function () {

    let elements = document.querySelectorAll('.color');

    elements.forEach(function(element){
        element.addEventListener('mouseover', function(){

            element.style.color = 'blue';
        });
        element.addEventListener('mouseout', function(){
            element.style.color = 'black';
        });
    });
});