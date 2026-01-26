// Menu responsivo
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    // Toggle do menu mobile
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        menuToggle.classList.toggle('is-active');
    });

    // Fecha o menu ao clicar em um link (mobile)
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                menuToggle.classList.remove('is-active');
            }
        });
    });

    // Fecha o menu ao clicar fora dele (mobile)
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
            nav.classList.remove('nav-active');
            menuToggle.classList.remove('is-active');
        }
    });

    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Formulário de contato
    const contactForm = document.querySelector('#contato form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simula envio do formulário
            const formData = new FormData(contactForm);
            const nome = formData.get('nome');
            const email = formData.get('email');
            const mensagem = formData.get('mensagem');
            
            if (nome && email && mensagem) {
                alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.`);
                contactForm.reset();
            }
        });
    }
});