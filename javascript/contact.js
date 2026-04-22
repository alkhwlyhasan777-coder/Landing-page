// Contact Page Logic
document.addEventListener('DOMContentLoaded', () => {
    setupContactForm();
});

function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            submitContactForm();
        });
    }
}

function submitContactForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('formMessage');
    
    // Validation
    if (!name || !email || !subject || !message) {
        showMessage('Please fill in all fields', 'error', formMessage);
        return;
    }
    
    if (!isValidEmail(email)) {
        showMessage('Please enter a valid email address', 'error', formMessage);
        return;
    }
    
    // Simulate form submission
    showMessage('Thank you! Your message has been sent successfully. We will get back to you soon.', 'success', formMessage);
    
    // Save to localStorage (demo)
    const messages = JSON.parse(localStorage.getItem('contact_messages') || '[]');
    messages.push({
        name,
        email,
        subject,
        message,
        date: new Date().toLocaleString()
    });
    localStorage.setItem('contact_messages', JSON.stringify(messages));
    
    // Reset form
    document.getElementById('contactForm').reset();
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showMessage(message, type, element) {
    element.textContent = message;
    element.className = `form-message ${type}`;
    element.style.display = 'block';
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        element.style.display = 'none';
    }, 5000);
}