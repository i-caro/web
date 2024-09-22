document.addEventListener('DOMContentLoaded', function() {
    // Efecto hover en el botón de descarga
    const downloadButton = document.querySelector('.btn-primary');
    downloadButton.addEventListener('mouseover', () => {
        downloadButton.style.transform = 'scale(1.1)';
        downloadButton.style.transition = 'transform 0.3s';
    });

    downloadButton.addEventListener('mouseout', () => {
        downloadButton.style.transform = 'scale(1)';
    });

    // Animación en la apertura del menú móvil
    const navbarToggler = document.querySelector('.navbar-toggler');
    navbarToggler.addEventListener('click', () => {
        if (!navbarToggler.classList.contains('active')) {
            navbarToggler.style.transform = 'rotate(90deg)';
            navbarToggler.classList.add('active');
        } else {
            navbarToggler.style.transform = 'rotate(0deg)';
            navbarToggler.classList.remove('active');
        }
    });

    // Efecto de animación suave para las cards
    const cards = document.querySelectorAll('.animate-card');
    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'scale(1.05)';
            card.style.transition = 'transform 0.3s, box-shadow 0.3s';
        });

        card.addEventListener('mouseout', () => {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = 'none';
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Manejar el envío del formulario
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        if (name && email) {
            alert(`Gracias ${name}, hemos recibido tu mensaje con el email: ${email}.`);
            contactForm.reset();
        } else {
            alert('Por favor completa todos los campos.');
        }
    });
});