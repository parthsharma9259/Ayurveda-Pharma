document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const rating = document.getElementById('rating').value;
    const comments = document.getElementById('comments').value;

    // Validation
    let isValid = true;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate Username
    if (username.length < 3) {
        alert("Username must be at least 3 characters long.");
        isValid = false;
    }

    // Validate Email
    if (email.length === 0) {
        alert("Email cannot be empty.");
        isValid = false;
    } else if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        isValid = false;
    }

    // Validate Comments
    if (comments.length <= 5) {
        alert("Comments must be greater than 5 characters.");
        isValid = false;
    }

    // If all validations pass
    if (isValid) {
        // Create a new list item for feedback
        const feedbackList = document.getElementById('feedback-list');
        const listItem = document.createElement('li');
        listItem.textContent = `${username} (${email}) - Rating: ${rating} - Comments: ${comments}`;
        feedbackList.appendChild(listItem);

        // Clear the form
        document.getElementById('feedback-form').reset();

        // Display success message
        alert("Feedback submitted successfully!");
    }
});
