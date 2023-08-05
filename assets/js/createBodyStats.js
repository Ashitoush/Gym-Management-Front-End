document.getElementById("createBodyStats").onclick = function (event) {
    const createBodyStats = async () => {
      let height = document.getElementById("height").value;
      let weight = document.getElementById("weight").value;
      // let bmi = document.getElementById("bmi").value;
      // let bmiStatus = document.getElementById("bmiStatus").value;
      let bicep = document.getElementById("bicep").value;
      let waist = document.getElementById("waist").value;
      let bodyFatPercentage = document.getElementById("bodyFatPercentage").value;
  
      try {
        let params = {
          "bicep": bicep,
          "waist": waist,
          // bmi: bmi,
          // bmiStatus: bmiStatus,
          "bodyFatPercentage": bodyFatPercentage,
          "height": height,
          "weight": weight
        };
  
        let req = await request(
          "POST",
          "http://localhost:8080/bodyStats/create",
          true,
          params
        );
        
        window.location.href = "bodyStats.html";
        // Handle the response as needed
      } catch (error) {
        console.error(error);
        alert("Error occurred while fetching data.");
      }
    };
  
    // Call the createBodyStats function
    createBodyStats();
  };
  