// login
document.querySelector('#authModal .btn').addEventListener('click', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        Swal.fire("Error", "Please enter both email and password!", "error");
        return;
    }

    try {
        const response = await fetch('http://localhost:3030/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        if (response.ok) {
            Swal.fire("Success", data.message, "success");
            // Store token in localStorage or sessionStorage for future authenticated requests
            localStorage.setItem('auth_token', data.token);
        } else {
            Swal.fire("Error", data.message || "Something went wrong", "error");
        }
    } catch (error) {
        console.error(error);
        Swal.fire("Error", "An unexpected error occurred.", "error");
    }
});

// signup
document.querySelector('#authModal1 .btn').addEventListener('click', async (e) => {
    e.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('password').value;

    if (!firstName || !lastName || !email || !password || password !== confirmPassword) {
        Swal.fire("Error", "Please fill all fields and make sure passwords match!", "error");
        return;
    }

    try {
        const response = await fetch('http://localhost:3030/api/auth/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ firstName, lastName, email, password }),
        });

        const data = await response.json();
        if (response.ok) {
            Swal.fire("Success", "Registration successful! Please check your email to verify your account.", "success");
        } else {
            Swal.fire("Error", data.message || "Something went wrong", "error");
        }
    } catch (error) {
        console.error(error);
        Swal.fire("Error", "An unexpected error occurred.", "error");
    }
});
