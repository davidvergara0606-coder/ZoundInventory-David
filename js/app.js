document.addEventListener('DOMContentLoaded', () => {
    
    const formLogin = document.getElementById('formLogin');
    if (formLogin) {
        formLogin.addEventListener('submit', (e) => {
            e.preventDefault(); 
            const correo = document.getElementById('loginCorreo').value;
            alert(`¡Hola, David! Intentaste ingresar con: ${correo}`);
        });
    }

    const formRegistro = document.getElementById('formRegistro');
    if (formRegistro) {
        formRegistro.addEventListener('submit', (e) => {
            e.preventDefault();
            const nombre = document.getElementById('regNombre').value;
            const password = document.getElementById('regPassword').value;
            const passwordConfirm = document.getElementById('regPasswordConfirm').value;

            if (password !== passwordConfirm) {
                alert('Las contraseñas no coinciden. Verifica de nuevo.');
                return;
            }
            alert(`¡Usuario ${nombre} capturado con éxito!`);
        });
    }
});