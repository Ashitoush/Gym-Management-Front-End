document.getElementById("signup").onclick = function (event) {
    function validateSignup() {
      var email = document.getElementById('email').value;
      var username = document.getElementById('username').value;
      var firstName = document.getElementById('firstName').value;
      var middleName = document.getElementById('middleName').value;
      var lastName = document.getElementById('lastName').value;
      var address = document.getElementById('address').value;
      var phoneNumber = document.getElementById('phoneNumber').value;
      var gender = document.getElementById('gender').value;
      var dateOfBirth = document.getElementById('dateOfBirth').value;
      var password = document.getElementById('password').value;
      var confirmPassword = document.getElementById('confirmPassword').value;
      var today = new Date();
      var selectedDate = new Date(dateOfBirth);
  
      // Clear previous error messages
      var errorElements = document.getElementsByClassName('error');
      for (var i = 0; i < errorElements.length; i++) {
        errorElements[i].innerText = '';
      }
  
      // Validate form values
      var isValid = true;
  
      var emailRegex = /^\S+@\S+\.\S+$/;
      if (!emailRegex.test(email)) {
        document.getElementById('email-error').innerText = 'Invalid email format';
        isValid = false;
      }
  
      if (!email) {
        document.getElementById('email-error').innerText = 'Email is required';
        isValid = false;
      }
  
      if (!username) {
        document.getElementById('username-error').innerText = 'Username is required';
        isValid = false;
      }
  
      if (!firstName) {
        document.getElementById('firstName-error').innerText = 'First Name is required';
        isValid = false;
      }
  
      if (!lastName) {
        document.getElementById('lastName-error').innerText = 'Last Name is required';
        isValid = false;
      }
  
      if (!address) {
        document.getElementById('address-error').innerText = 'Address is required';
        isValid = false;
      }
  
      if (!phoneNumber) {
        document.getElementById('phoneNumber-error').innerText = 'Phone Number is required';
        isValid = false;
      }
  
      if (!gender) {
        document.getElementById('gender-error').innerText = 'Gender is required';
        isValid = false;
      }
  
      if (!dateOfBirth) {
        document.getElementById('dateOfBirth-error').innerText = 'Date of Birth is required';
        isValid = false;
      }
  
      if (selectedDate > today) {
        document.getElementById('dateOfBirth-error').innerText = 'Please enter a valid date of birth';
        isValid = false;
      }
  
      if (!password) {
        document.getElementById('password-error').innerText = 'Password is required';
        isValid = false;
      }
  
      if (!confirmPassword) {
        document.getElementById('confirmPassword-error').innerText = 'Confirm Password is required';
        isValid = false;
      }
  
      if (password !== confirmPassword) {
        document.getElementById('confirmPassword-error').innerText = 'Passwords do not match';
        isValid = false;
      }
  
      // Submit the form if all fields are valid
      if (isValid) {
        signup();
      } else {
        event.preventDefault();
      }
    }
  
    const signup = async () => {
      let email = document.getElementById('email').value;
      let userName = document.getElementById('username').value;
      let firstName = document.getElementById('firstName').value;
      let middleName = document.getElementById('middleName').value;
      let lastName = document.getElementById('lastName').value;
      let address = document.getElementById('address').value;
      let phoneNumber = document.getElementById('phoneNumber').value;
      let gender = document.getElementById('gender').value;
      let dob = document.getElementById('dateOfBirth').value;
      let password = document.getElementById('password').value;
  
      let params = {
        "email": email,
        "userName": userName,
        "firstName": firstName,
        "middleName": middleName,
        "lastName": lastName,
        "password": password,
        "dob": dob,
        "gender": gender,
        "phoneNumber": phoneNumber,
        "address": address
      };
  
      let req = await request(
        "POST",
        "http://localhost:8080/user/create",
        false,
        params
      );
      let message = req.message;
      console.log(req);
  
      // Redirect to login.html
      window.location.href = "login.html";
    }
  
    // Call validate Signup when the signup button is clicked
    validateSignup();
  };
  