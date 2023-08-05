document.addEventListener("DOMContentLoaded", async function () {
  let height = document.getElementById("height");
  let weight = document.getElementById("weight");
  let bmi = document.getElementById("bmi");
  let bmiStatus = document.getElementById("bmiStatus");
  let bicep = document.getElementById("bicep");
  let waist = document.getElementById("waist");
  let bodyFatPercentage = document.getElementById("bodyFatPercentage");
  let bodyStatsId = document.getElementById("bodyStatsId");
  let fullName = document.getElementById("fullName");

  const fetchBodyStats = async () => {
    try {
      let req = await request(
        "GET",
        "http://localhost:8080/bodyStats/getBodyStatsByUserId",
        true
      );
      // const data = req.data;

      if (req.create == 0) {
        window.location.href = "createBodyStats.html?userId="+req.userId;
      } else {
        bicep.value = req.data.bicep;
        fullName.innerText = req.fullName;
      waist.value = req.data.waist;
      bmi.value = req.data.bmi;
      bmiStatus.value = req.data.bmiStatus;
      bodyFatPercentage.value = req.data.bodyFatPercentage;
      height.value = req.data.height;
      weight.value = req.data.weight;
      bodyStatsId.value = req.data.bodyStatsId;
      } 

    } catch (error) {
      console.error(error);
      alert("Error occurred while fetching data.");
    }
  };

  // Call the fetchBodyStats function when the page loads
  fetchBodyStats();
  const editButton = document.getElementById("editButton");

  // Add a click event listener to the edit button
  editButton.addEventListener("click", function() {
    // Redirect to the edit page
    window.location.href = "./editBodyStats.html?bodyStatsId="+bodyStatsId.value;
  });
});

// document.getElementById("createBodyStats").onclick = async function (event) {
//   event.preventDefault(); // Prevent form submission

//   const createBodyStats = async () => {
//     height = document.getElementById("height").value;
//     weight = document.getElementById("weight").value;
//     bmi = document.getElementById("bmi").value;
//     bmiStatus = document.getElementById("bmiStatus").value;
//     bicep = document.getElementById("bicep").value;
//     waist = document.getElementById("waist").value;
//     bodyFatPercentage = document.getElementById("bodyFatPercentage").value;

//     try {
//       let params = {
//         bicep: bicep,
//         waist: waist,
//         bmi: bmi,
//         bmiStatus: bmiStatus,
//         bodyFatPercentage: bodyFatPercentage,
//         height: height,
//         weight: weight,
//       };

//       let req = await request(
//         "POST",
//         "http://localhost:8080/bodyStats/create",
//         true,
//         params
//       );

//       window.location.href = "login.html";
//       // Handle the response as needed
//     } catch (error) {
//       console.error(error);
//       alert("Error occurred while fetching data.");
//     }
//   };

//   // Call the createBodyStats function
//   createBodyStats();
// };
