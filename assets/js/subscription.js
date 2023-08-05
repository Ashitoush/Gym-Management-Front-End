document.addEventListener("DOMContentLoaded", async function () { 
    var fullName = document.getElementById('fullName');
    let checkRole = document.getElementById("checkRole");

    const role = localStorage.getItem("role");
    if(role === "STAFF") {
      checkRole.style.display="none";
    }
    const subscription = async () => {
      try {
        let params = {}; // Add any required params for the request
  
        let req = await request(
          "GET",
          "http://localhost:8080/subscription/getAllSubscription",
          true,
          params
        );
        fullName.innerText = req.fullName;

        const val = req?.data;

        const div = val.map((i) => {
            console.log(i);
          return `<div class="col-md-3">
          <div class="card card-user">
            <div class="card-header">
              <h5 class="card-title">${i.subscriptionName}</h5>
            </div>
            <div class="card-body">
              <div class="card-text mb-5">
                Description: <br />${i.subscriptionDescription}
              </div>
              <h6 class="card-text">Price: Rs. ${i.amount}</h6>
              <h6 class="card-text">Duration: ${i.duration}</h6>
            </div>
          </div>
        </div>`;
        }).join('');
  
        document.getElementById("subscription").innerHTML = div;
      } catch (error) {
        console.error(error);
        alert("Error occurred while fetching data.");
      }
    };
  
    // Call the userDashboard function when the page loads
    subscription();
  });
  