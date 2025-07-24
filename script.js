// Toggle Menu for Mobile
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
});

// Contact Form Submission with Formspree
const contactForm = document.getElementById('contact-form');
const statusMsg = document.getElementById('status-msg');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        statusMsg.textContent = "⏳ Sending message...";
        statusMsg.style.color = "#1d4ed8";
        statusMsg.style.display = "block";

        const formData = new FormData(contactForm);

        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                statusMsg.textContent = "✅ Message sent successfully!";
                statusMsg.style.color = "green";
                contactForm.reset();
            } else {
                statusMsg.textContent = "❌ Failed to send message. Please try again.";
                statusMsg.style.color = "red";
            }

        } catch (error) {
            statusMsg.textContent = "❌ Network error. Please check your internet connection.";
            statusMsg.style.color = "red";
        }

        setTimeout(() => {
            statusMsg.textContent = "";
            statusMsg.style.display = "none";
        }, 5000);
    });
}
