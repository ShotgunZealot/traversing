document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('nav a');

    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            console.log(link);
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {

                targetSection.scrollIntoView({
                    behavior: 'smooth'

                });
            }
        });
    });
}); 