document.addEventListener("DOMContentLoaded", async function () {
    let height = document.getElementById("height");
    let weight = document.getElementById("weight");
    let bmi = document.getElementById("bmi");
    let bmiStatus = document.getElementById("bmiStatus");
    let bicep = document.getElementById("bicep");
    let waist = document.getElementById("waist");
    let bodyFatPercentage = document.getElementById("bodyFatPercentage");
    let bodyStatsId = document.getElementById("bodyStatsId");
  
    const fetchBodyStats = async () => {
      try {
        let req = await request(
          "GET",
          "http://localhost:8080/bodyStats/getBodyStatsByUserId",
          true
        );
        const data = req.data;
  
        bicep.value = data.bicep;
        waist.value = data.waist;
        bmi.value = data.bmi;
        bmiStatus.value = data.bmiStatus;
        bodyFatPercentage.value = data.bodyFatPercentage;
        height.value = data.height;
        weight.value = data.weight;
        bodyStatsId.value = data.bodyStatsId;
      } catch (error) {
        console.error(error);
        alert("Error occurred while fetching data.");
      }
    };
  
    // Call the fetchBodyStats function when the page loads
    fetchBodyStats();
  
    const editButton = document.getElementById("editButton");
  
    // Add a click event listener to the edit button
    editButton.addEventListener("click", async function () {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const editedBodyStatsId = urlParams.get("bodyStatsId");

        const params = {
            "height": height.value,
            "weight": weight.value,
            "bicep": bicep.value,
            "waist": waist.value,
            "bodyFatPercentage": bodyFatPercentage.value 
          };
  
        let req = await request(
          "PUT",
          `http://localhost:8080/bodyStats/update/${editedBodyStatsId}`,
          true,
          params
        );
  
        // Redirect to the bodyStats.html page
        window.location.href = "./bodyStats.html";
      } catch (error) {
        console.error(error);
        alert("Error occurred while updating data.");
      }
    });
  });
  