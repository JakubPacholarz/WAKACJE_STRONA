// This file contains JavaScript code for interactive features of the website, such as form validation, dynamic content loading, and event handling.

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Form validation for contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name === '' || email === '' || message === '') {
                alert('Please fill in all fields.');
            } else {
                alert('Thank you for your message!');
                contactForm.reset();
            }
        });
    }

    // Dynamic content loading for destinations
    const loadDestinations = async () => {
        const response = await fetch('path/to/destinations.json');
        const destinations = await response.json();
        const destinationsContainer = document.getElementById('destinations-container');

        destinations.forEach(destination => {
            const destinationElement = document.createElement('div');
            destinationElement.classList.add('destination');
            destinationElement.innerHTML = `
                <h3>${destination.name}</h3>
                <p>${destination.description}</p>
                <img src="${destination.image}" alt="${destination.name}">
            `;
            destinationsContainer.appendChild(destinationElement);
        });
    };

    loadDestinations();
});