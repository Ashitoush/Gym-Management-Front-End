document.addEventListener("DOMContentLoaded", async function () {
    let fullName = document.getElementById("fullName");
    let totalUser = document.getElementById("totalUser");
    let totalSubscription = document.getElementById("totalSubscription");
    let dueAmount = document.getElementById("dueAmount");
    let amountCollected = document.getElementById("amountCollected");
    
    let checkRole = document.getElementById("checkRole");
    let checkRoleForButton = document.getElementById("checkRoleForButton");
    const role = localStorage.getItem("role");
    if(role === "STAFF") {
      checkRole.style.display="none";
      checkRoleForButton.style.display="none";
    }
  
    const adminDashboard = async () => {
      try {
        let params = {}; // Add any required params for the request
  
        let req = await request(
          "GET",
          "http://localhost:8080/dashboard/admin",
          true,
          params
        );
       
        fullName.innerText = req.fullName;
        totalUser.innerText = req.totalUser;
        totalSubscription.innerText = req.totalSubscription;
        dueAmount.innerText = req.dueAmount;
        amountCollected.innerText = req.totalAmountCollected;

      } catch (error) {
        console.error(error);
        alert("Error occurred while fetching data.");
      }
    };
  
    // Call the userDashboard function when the page loads
    adminDashboard();
  });
