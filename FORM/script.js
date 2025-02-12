// Function to handle form submission
function submitForm(event) {
    event.preventDefault(); // Prevent default form submission

    // Clear previous validation message
    document.getElementById('form-message').textContent = "";

    // Validate the form before submitting
    if (!validateForm()) {
        return; // If validation fails, stop submission
    }

    // Simulate successful form submission
    console.log('Form submitted');
    
    // Reset the form after submission
    document.getElementById('applicationForm').reset();

    // Show success message
    document.getElementById('form-message').textContent = "Your application has been submitted successfully!";

    // Use location.href to reload the page
    setTimeout(function() {
        location.href = location.href; // Refresh the page using href
    }, 3000); // 3-second delay to show confirmation message
}

// Function to validate the form inputs
function validateForm() {
    // Validate name
    const name = document.getElementById('name').value;
    if (name === "") {
        showErrorMessage("Name is required.");
        return false;
    }

    // Validate email
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        showErrorMessage("Please enter a valid email address.");
        return false;
    }

    // Validate phone number
    const phone = document.getElementById('phone').value;
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        showErrorMessage("Please enter a valid 10-digit phone number.");
        return false;
    }

    // Validate country selection
    const country = document.getElementById('country').value;
    if (country === "") {
        showErrorMessage("Please select a country.");
        return false;
    }

    return true; // All validations passed
}

// Function to show error messages
function showErrorMessage(message) {
    document.getElementById('form-message').textContent = message;
    document.getElementById('form-message').style.color = 'red';
}
