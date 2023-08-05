document.addEventListener("DOMContentLoaded", async function () {
  let fullName = document.getElementById("fullName");
  let email = document.getElementById("email");
  let userName = document.getElementById("userName");
  let firstName = document.getElementById("firstName");
  let middleName = document.getElementById("middleName");
  let lastName = document.getElementById("lastName");
  let address = document.getElementById("address"); // Corrected ID
  let phoneNumber = document.getElementById("phoneNumber");
  let gender = document.getElementById("gender");
  let dob = document.getElementById("dob");
  let userId = document.getElementById("userId");

  const userDashboard = async () => {
    try {
      let params = {}; // Add any required params for the request

      let req = await request(
        "GET",
        "http://localhost:8080/user/userProfile",
        true,
        params
      );
      const data = req.data; // Added "const" keyword

      fullName.innerText = data.fullName;
      email.innerText = data.email;
      userName.innerText = data.userName;
      firstName.innerText = data.firstName;
      middleName.innerText = data.middleName;

      lastName.innerText = data.lastName;
      address.innerText = data.address;
      phoneNumber.innerText = data.phoneNumber;
      gender.innerText = data.gender;
      dob.value = data.dob;
      userId.value = data.userId;
    } catch (error) {
      console.error(error);
      alert("Error occurred while fetching data.");
    }
  };

  // Call the userDashboard function when the page loads
  userDashboard();

  // Get the edit button element
  const editButton = document.getElementById("editButton");

  // Add a click event listener to the edit button
  editButton.addEventListener("click", function() {
    // Redirect to the edit page
    window.location.href = "./editProfile.html?userId="+userId.value;
  });
});
