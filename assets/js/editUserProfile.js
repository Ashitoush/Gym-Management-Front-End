const editUserProfile = async () => {
    try {
      // Fetch user data
      let userData = await getUserData();
  
      // Populate the form fields with the fetched data
      populateForm(userData);
  
      // Handle save button click
      document.getElementById("editButton").addEventListener("click", async () => {
        try {
          // Get updated values from the form fields
          let updatedData = getUpdatedData();
  
          // Make API request to update the user profile
          await updateUserProfile(updatedData);
  
          // Redirect to the desired page after successful update
          window.location.href = "userDashboard.html";
        } catch (error) {
          console.error(error);
          alert("Error occurred while updating the user profile.");
        }
      });
    } catch (error) {
      console.error(error);
      alert("Error occurred while fetching user data.");
    }
  };
  
  const getUserData = async () => {
    try {
      let params = {}; // Add any required params for the request
  
      let req = await request("GET", "http://localhost:8080/user/userProfile", true, params);
      return req.data;
    } catch (error) {
      throw error;
    }
  };
  
  const populateForm = (userData) => {
    let fullName = document.getElementById("fullName");
    let email = document.getElementById("email");
    let userName = document.getElementById("userName");
    let firstName = document.getElementById("firstName");
    let middleName = document.getElementById("middleName");
    let lastName = document.getElementById("lastName");
    let address = document.getElementById("address");
    let phoneNumber = document.getElementById("phoneNumber");
    let gender = document.getElementById("gender");
    let dob = document.getElementById("dob");
    let userId = document.getElementById("userId");
  
    fullName.innerText = userData.fullName;
    email.innerText = userData.email;
    userName.innerText = userData.userName;
    firstName.value = userData.firstName;
    middleName.value = userData.middleName;
    lastName.value = userData.lastName;
    address.value = userData.address;
    phoneNumber.value = userData.phoneNumber;
    gender.innerText = userData.gender;
    dob.value = userData.dob;
    userId.value = userData.userId;
  };
  
  const getUpdatedData = () => {
    let fullName = document.getElementById("fullName").innerText;
    let email = document.getElementById("email").innerText;
    let userName = document.getElementById("userName").innerText;
    let firstName = document.getElementById("firstName").value;
    let middleName = document.getElementById("middleName").value;
    let lastName = document.getElementById("lastName").value;
    let address = document.getElementById("address").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let gender = document.getElementById("gender").innerText;
    let dob = document.getElementById("dob").value;
    let userId = document.getElementById("userId").value;
  
    return {
      fullName,
      email,
      userName,
      firstName,
      middleName,
      lastName,
      address,
      phoneNumber,
      gender,
      dob,
      userId
    };
  };
  
  const updateUserProfile = async (data) => {
    try {
      let req = await request("PUT", "http://localhost:8080/user/update", true, data);
      return req.data;
    } catch (error) {
      throw error;
    }
  };
  
  // Call the editUserProfile function when the page loads
  document.addEventListener("DOMContentLoaded", editUserProfile);
  