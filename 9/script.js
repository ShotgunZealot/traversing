document.addEventListener('DOMContentLoaded', function () {
    const toggleElements = document.querySelectorAll('.toggle');


    toggleElements.forEach(function (toggleElement) {
        toggleElement.addEventListener('click', function () {

            const sublist = this.nextElementSibling;
            this.textContent = sublist.classList.contains('show') ? '-' : '+';
            sublist.classList.toggle('show');
            
        });
    });
});
