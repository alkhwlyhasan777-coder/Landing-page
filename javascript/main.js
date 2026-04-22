// 1. Sticky Navbar
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// 2. Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// 3. Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const icon = themeToggle.querySelector('i');
    
    if (body.classList.contains('dark-theme')) {
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    }
});

// Load Saved Theme
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
    themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
}

// 4. Testimonials Slider (Swiper.js)
const swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: { delay: 3000 },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// 5. Contact Form Validation & LocalStorage
const contactForm = document.getElementById('contact-form');
const statusMsg = document.getElementById('form-status');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        // Save to LocalStorage
        const formData = { name, email, message, date: new Date().toLocaleString() };
        localStorage.setItem('lastContactQuery', JSON.stringify(formData));
        
        // Show Success
        statusMsg.innerText = "Message sent successfully! (Saved to local storage)";
        statusMsg.style.color = "green";
        contactForm.reset();
    } else {
        statusMsg.innerText = "Please fill in all fields.";
        statusMsg.style.color = "red";
    }
});