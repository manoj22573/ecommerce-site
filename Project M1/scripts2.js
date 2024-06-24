// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // Registration Form Validation
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function (event) {
            // Prevent the form from submitting
            event.preventDefault();

            // Validate the form fields
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();
            const email = document.getElementById('email').value.trim();
            
            if (!validateUsername(username)) {
                alert('Please enter a valid username (at least 4 characters long).');
                return;
            }

            if (!validatePassword(password)) {
                alert('Password must be at least 8 characters long and include at least one number and one special character.');
                return;
            }

            if (!validateEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // If validation passes, submit the form (this could be an AJAX call instead)
            alert('Registration successful!');
            registerForm.submit();
        });
    }

    // Login Form Validation
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            // Prevent the form from submitting
            event.preventDefault();

            // Validate the form fields
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();
            
            if (!validateUsername(username)) {
                alert('Please enter a valid username.');
                return;
            }

            if (!validatePassword(password)) {
                alert('Please enter your password (at least 8 characters long).');
                return;
            }

            // If validation passes, submit the form (this could be an AJAX call instead)
            alert('Login successful!');
            loginForm.submit();
        });
    }

    // Utility functions for validation
    function validateUsername(username) {
        return username.length >= 4;
    }

    function validatePassword(password) {
        const passwordPattern = /^(?=.*[0-9])(?=.*[!@#\$%\^&\*])/; // At least one number and one special character
        return password.length >= 8 && passwordPattern.test(password);
    }

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email validation pattern
        return emailPattern.test(email);
    }
});
