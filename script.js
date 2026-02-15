document.addEventListener('DOMContentLoaded', () => {
    /* Mobile Navigation */
    const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu');
            document.body.style.overflow = 'hidden';
        });
    }

    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
            document.body.style.overflow = 'auto';
        });
    }

    // Close menu when a link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
            document.body.style.overflow = 'auto';
        });
    });

    /* Header Background Change on Scroll */
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 50) {
            header.classList.add('scroll-active');
        } else {
            header.classList.remove('scroll-active');
        }
    });

    /* Parallax Hero Effect */
    const heroBg = document.querySelector('.hero-parallax-bg');
    window.addEventListener('scroll', () => {
        let offset = window.pageYOffset;
        if (heroBg) {
            // Apply parallax only if visible
            if (offset < window.innerHeight) {
                heroBg.style.transform = `translateY(${offset * 0.4}px)`;
            }
        }
    });

    /* Scroll Reveal Animation */
    const revealElements = document.querySelectorAll('.section-title, .section-text, .about-grid, .gallery-item, .service-card, .contact-grid');

    // Add the reveal class to all elements initially
    revealElements.forEach(el => el.classList.add('reveal'));

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
                // Unobserve once revealed to maintain performance
                // revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    /* Booking Form Handling */
    const bookingForm = document.querySelector('.booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = bookingForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerText;

            submitBtn.innerText = 'Sending Request...';
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.7';

            // Simulate API call for booking request
            setTimeout(() => {
                alert('Thank you for choosing Mamo! Your booking request has been sent. We will contact you shortly to confirm your appointment.');
                bookingForm.reset();
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
                submitBtn.style.opacity = '1';
            }, 2000);
        });
    }

    /* WhatsApp Link Dynamics */
    // Ensure the WhatsApp link is active and properly formatted
    // (Actual link is in HTML, but we could add dynamic tracking here if needed)
});
