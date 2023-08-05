document.addEventListener("DOMContentLoaded", async function () {
  let checkRole = document.getElementById("checkRole");

    const role = localStorage.getItem("role");
    if(role === "STAFF") {
      checkRole.style.display="none";
    }
  });
document.getElementById("signup").onclick = function (event) {
      
    const createSubscription = async () => {
      let subscriptionName = document.getElementById('subscriptionName').value;
      let subscriptionDescription = document.getElementById('subscriptionDescription').value;
      let duration = document.getElementById('duration').value;
      let amount = document.getElementById('amount').value;
      
      
  
      let params = {
        "subscriptionName": subscriptionName,
        "subscriptionDescription": subscriptionDescription,
        "duration": duration,
        "amount": amount
      };
  
      let req = await request(
        "POST",
        "http://localhost:8080/subscription/create",
        true,
        params
      );
      let message = req.message;
  
      // Redirect to login.html
      window.location.href = "adminDashboard.html";
    }
    
    createSubscription();
  };
  