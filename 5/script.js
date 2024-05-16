document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formulario');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');

    emailInput.addEventListener('input', function () {
        if (!validarEmail(emailInput.value)) {
            emailError.textContent = '¡Correo electrónico no válido!';
            emailError.style.display = 'block';
        } else {
            emailError.style.display = 'none';
        }
    });

    passwordInput.addEventListener('input', function () {
        if (passwordInput.value.length < 6) {
            passwordError.textContent = '¡La contraseña debe tener al menos 6 caracteres!';
            passwordError.style.display = 'block';
        } else {
            passwordError.style.display = 'none';
        }
    });

    formulario.addEventListener('submit', function (event) {
        if (!validarEmail(emailInput.value)) {
            emailError.textContent = '¡Correo electrónico no válido!';
            emailError.style.display = 'block';
            event.preventDefault(); 
        }

        if (passwordInput.value.length < 6) {
            passwordError.textContent = '¡La contraseña debe tener al menos 6 caracteres!';
            passwordError.style.display = 'block';
            event.preventDefault(); 
        }
    });

    function validarEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
