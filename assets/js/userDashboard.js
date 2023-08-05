document.addEventListener("DOMContentLoaded", async function () {
  let fullName = document.getElementById("fullName");
  let remainingDay = document.getElementById("remainingDay");
  let expirationDate = document.getElementById("expirationDate");
  let subscriptionName = document.getElementById("subscriptionName");
  let subscriptionDuration = document.getElementById("subscriptionDuration");
  let dueAmount = document.getElementById("dueAmount");
  let lastPayment = document.getElementById("lastPayment");
  let paymentDate = document.getElementById("paymentDate");
  let bodyFatPercentage = document.getElementById("bodyFatPercentage");
  let bmi = document.getElementById("bmi");
  let bmiStatus = document.getElementById("bmiStatus");
  let height = document.getElementById("height");
  let weight = document.getElementById("weight");
  let biceps = document.getElementById("biceps");
  let waist = document.getElementById("waist");
  let dueMessage = document.getElementById("dueMessage");

  const userDashboard = async () => {
    try {
      let params = {}; // Add any required params for the request

      let req = await request(
        "GET",
        "http://localhost:8080/dashboard/user",
        true,
        params
      );
      const val = req?.announcementData;
      console.log(val);
      fullName.innerText = req.fullName;
      remainingDay.innerText = req.remainingDays;
      expirationDate.innerText = req.expirationDate;
      subscriptionName.innerText = req.subscriptionName;
      subscriptionDuration.innerText = req.subscriptionDuration;
      dueAmount.innerText = req.dueAmount;
      lastPayment.innerText = req.lastPaymentAmount;
      paymentDate.innerText = req.paymentDate;
      bodyFatPercentage.innerText = req.bodyStats.bodyFatPercentage;
      bmi.innerText = req.bodyStats.bmi;
      bmiStatus.innerText = req.bodyStats.bmiStatus;
      height.innerText = req.bodyStats.height;
      weight.innerText = req.bodyStats.weight;
      biceps.innerText = req.bodyStats.bicep;
      waist.innerText = req.bodyStats.waist;

      if (req.dueAmount > 0) {
        dueMessage.innerText = "Due Remaining"
      }

      const div = val.map((i) => {
        return ` <li  class="list-group-item">
        <h6 class="mb-1" id="announcementTitle">${i.title} 1</h6>
        <p class="mb-1" id="announcementDesc">
          ${i.message}
        </p>
        <small class="text-muted"
          >Published Date: <span id="announcementDate">${i.announcementDate}</span></small
        >
      </li>`;
      });

      document.getElementById("announcement").innerHTML = div.join("");
    } catch (error) {
      console.error(error);
      // alert("Error occurred while fetching data.");
    }
  };

  // Call the userDashboard function when the page loads
  userDashboard();
});