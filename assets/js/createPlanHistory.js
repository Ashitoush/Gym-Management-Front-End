document.addEventListener("DOMContentLoaded", async function () {
  let checkRole = document.getElementById("checkRole");

    const role = localStorage.getItem("role");
    if(role === "STAFF") {
      checkRole.style.display="none";
    }
  });
document.getElementById("signup").onclick = function (event) {

    const createPlanHistory = async () => {
      let userName = document.getElementById('userName').value;
      let startDate = document.getElementById('startDate').value;
      let endDate = document.getElementById('endDate').value;
      let subscriptionName = document.getElementById('subscriptionName').value;
  
      let params = {
        "nameOfUser": userName,
        "startDate": startDate,
        "endDate": endDate,
        "subscriptionName": subscriptionName
      };
  
      let req = await request(
        "POST",
        "http://localhost:8080/planHistory/create",
        true,
        params
      );
  
      // Redirect to login.html
      window.location.href = "adminDashboard.html";
    }
    
    createPlanHistory();
  };
  