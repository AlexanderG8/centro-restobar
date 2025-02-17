document.addEventListener('DOMContentLoaded', function() {
    // Navegación responsiva
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Verificación de edad en página de bebidas
    if (window.location.pathname.includes('bebidas.html')) {
        const birthYear = prompt('Por favor, ingresa tu año de nacimiento:');
        const currentYear = new Date().getFullYear();
        const age = currentYear - parseInt(birthYear);

        if (isNaN(age)) {
            debugger
            alert('Por favor, ingresa un año válido.');
            window.location.href = 'index.html';
        } else if (age < 18) {
            debugger
            alert('Lo sentimos, debes ser mayor de 18 años para ver las bebidas alcohólicas.');
            // Ocultar la sección de bebidas alcohólicas
            const alcoholicSection = document.getElementById('alcoholicas');
            if (alcoholicSection) {
                alcoholicSection.style.display = 'none';
            }
        } else {
            debugger
            alert('Puedes ver todas nuestras bebidas, incluidas las bebidas con alcohol.');
        }
    }

    // Animación de entrada para las tarjetas de bebidas
    const bebidaCards = document.querySelectorAll('.bebida-card');
    bebidaCards.forEach((card, index) => {
        card.style.setProperty('--card-index', index);
    });
});