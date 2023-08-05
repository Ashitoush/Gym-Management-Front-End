document.getElementById("login").onclick = function () {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let params = {
        "email": email,
        "password": password,
    };

    function validateForm(event) {
      // Get the email and password fields
      var emailField = document.getElementById("email");
      var passwordField = document.getElementById("password");

      // Get the error message elements
      var emailError = document.getElementById("email-error");
      var passwordError = document.getElementById("password-error");

      // Reset the error messages
      emailError.textContent = "";
      passwordError.textContent = "";

      // Validate email
      var email = emailField.value.trim();
      if (email === "") {
        emailError.textContent = "Email address is required";
        emailField.focus();
        event.preventDefault(); // Prevent form submission
        return false;
      }

      var emailRegex = /^\S+@\S+\.\S+$/;
      if (!emailRegex.test(email)) {
          emailError.textContent = "Invalid email format";
          emailField.focus();
          event.preventDefault();
          return false;
      }

      // Validate password
      var password = passwordField.value.trim();
      if (password === "") {
        passwordError.textContent = "Password is required";
        passwordField.focus();
        event.preventDefault(); // Prevent form submission
        return false;
      }

      return true; // Form is valid, allow submission
    }

    // // Attach form validation on submit event
    // var form = document.getElementById("loginForm");
    // form.addEventListener("click", validateForm);

    const login = async () => {
        try {
          let req = await request(
            "POST",
            "http://localhost:8080/user/login",
            false,
            params
        );
        
        let status = req.status;
        console.log(status)
        let role = req.Role

        if (status === "200" && role === "USER") {
            window.location.href = 'userDashboard.html';
            localStorage.setItem('token', req.JwtToken)
        } else if (status === "200" && (role === "ADMIN" || role === "STAFF")) {
            window.location.href = 'adminDashboard.html';
            localStorage.setItem('token', req.JwtToken);
            localStorage.setItem('role', role)
        } else {
            alert('Cannot Login');
            console.log("Hello alert");
        }
        } catch (error) {
          let errorMessage = document.getElementById("error-message");
          errorMessage.textContent = "Wrong Credentials";
        }
        
    }

    validateForm();
    login();
   
}

