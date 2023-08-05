document.addEventListener("DOMContentLoaded", async function () {
  let checkRole = document.getElementById("checkRole");

    const role = localStorage.getItem("role");
    if(role === "STAFF") {
      checkRole.style.display="none";
    }
  });

window.addEventListener("load", populateSubscription);
function populateSubscription() {
  const dropDown = document.getElementById("subscription");
  const amountField = document.getElementById("amount");

  const subscriptionDropDown = async () => {
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

      const selectOption = document.createElement("option");
      selectOption.value = "";
      selectOption.textContent = "Select Subscription";
      dropDown.appendChild(selectOption);

      val.forEach((subscription) => {
        const { subscriptionId, subscriptionName } = subscription;
        const optionElement = document.createElement("option");
        optionElement.value = subscriptionId;
        optionElement.textContent = subscriptionName;
        dropDown.appendChild(optionElement);
      });

      // Add event listener to the subscription dropdown
      dropDown.addEventListener("change", () => {
        const selectedSubscriptionId = parseInt(dropDown.value);
      
        const selectedSubscription = val.find(
          (subscription) => subscription.subscriptionId === selectedSubscriptionId
        );
        
        console.log(selectedSubscription);
        
        if (selectedSubscription) {
          amountField.value = selectedSubscription.amount;
        }
      });
      
      
    } catch (error) {
      console.error(error);
      alert("Error occurred while fetching data.");
    }
  };

  subscriptionDropDown();
}

window.addEventListener("load", populateSubscription);


document.getElementById("signup").onclick = function (event) {
      
    const createPayment = async () => {
      let userName = document.getElementById('username').value;
      let amount = document.getElementById('amount').value;
      let paidAmount = document.getElementById('paidAmount').value;
      let paymentDate = document.getElementById('paymentDate').value;
      let duration = document.getElementById('duration').value;
      let subscription = document.getElementById('subscription').value;
      let startDate = document.getElementById('startDate').value;
      
  
      let params = {
        "nameOfUser": userName,
        "amount": amount,
        "paidAmount": paidAmount,
        "paymentDate": paymentDate,
        "duration": duration,
        "subscriptionId": subscription,
        "startDate": startDate
      };
  
      let req = await request(
        "POST",
        "http://localhost:8080/payment/create",
        true,
        params
      );
      let message = req.message;
  
      // Redirect to login.html
      window.location.href = "adminDashboard.html";
    }
    
    createPayment();
  };
  