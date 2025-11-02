document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form form');
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const phoneField = document.getElementById('phone');
    const messageField = document.getElementById('message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Validation
        const name = nameField.value.trim();
        const email = emailField.value.trim();
        const phone = phoneField.value.trim();
        const message = messageField.value.trim();
        let isValid = true;

        // Validate Name
        if (name.length < 3) {
            alert("Name must be at least 3 characters long.");
            isValid = false;
        }

        // Validate Email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            isValid = false;
        }

        // Validate Phone
        if (phone.length !== 10 || phone === "1234567890" || isNaN(phone)) {
            alert("Enter a valid 10-digit phone number.");
            isValid = false;
        }

        // Validate Message
        if (message.length <= 5) {
            alert("Message must be greater than 5 characters.");
            isValid = false;
        }

        // If all validations pass
        if (isValid) {
            alert("Submission successful!");
            window.location.href = '../index.html'; // Redirect to index.html
        }
    });
});