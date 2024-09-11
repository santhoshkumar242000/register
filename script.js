// Switch between Login and Register Forms
function toggleForms() {
    document.getElementById('loginForm').classList.toggle('hidden');
    document.getElementById('registerForm').classList.toggle('hidden');
}

// Handle Login
function login(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Simple email validation (you can extend this with a real backend check)
    if (email === 'user@example.com' && password === 'password') {
        alert('Login successful');
    } else {
        alert('Invalid login credentials');
    }
}

// Handle Register
function register(event) {
    event.preventDefault();
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // Simulate registration process (replace with actual backend logic)
    alert(`Registration successful for ${email}`);
    toggleForms();
}
