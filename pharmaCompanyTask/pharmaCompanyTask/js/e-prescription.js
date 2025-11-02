document.getElementById('prescription-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const prescriptionFile = document.getElementById('prescription-file').files[0];
    const message = document.getElementById('message').value;

    // Display a success message (for demonstration purposes)
    alert(`Prescription submitted successfully by ${fullName}.`);

    // Clear the form
    document.getElementById('prescription-form').reset();
});
