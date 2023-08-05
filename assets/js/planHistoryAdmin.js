document.addEventListener("DOMContentLoaded", async function() {

  const searchForm = document.getElementById("searchForm");
  const subscriptionSearch = document.getElementById("subscriptionSearch");
  let checkRole = document.getElementById("checkRole");

    const role = localStorage.getItem("role");
    if(role === "STAFF") {
      checkRole.style.display="none";
    }

  const fetchAllPlanHistory = async () => {
    try {
      let req = await request(
        "GET",
        "http://localhost:8080/planHistory/getAllPlanHistory",
        true
      );
      fullName.innerText = req.fullName;

      const val = req?.data;

      const tableHead = `<thead class="text-primary">
        <th>Subscription</th>
        <th>Start Date</th>
        <th>End Date</th>
        <th>Username</th>
      </thead>`;
      const tableRow = val
        .map((i) => {
          return `<tbody>
            <tr>
              <td>${i.subscriptionName}</td>
              <td>${i.startDate}</td>
              <td>${i.endDate}</td>
              <td>${i.nameOfUser}</td>
            </tr>
          </tbody>`;
        })
        .join("");

      document.getElementById("planHistory").innerHTML = `${tableHead}${tableRow}`;
    } catch (error) {
      console.error(error);
      alert("Error occurred while fetching data.");
    }
  };

  const searchPlanHistoryBySubscription = async (searchTerm) => {
    try {
      let params = { "subscriptionName": searchTerm };
      console.log(params);
      let req = await request(
        "POST",
        "http://localhost:8080/planHistory/searchPlanHistoryBySubscription",
        true,
        params
      );
      fullName.innerText = req.fullName;

      const val = req?.data;

      const tableHead = `<thead class="text-primary">
        <th>Subscription</th>
        <th>Start Date</th>
        <th>End Date</th>
        <th>Username</th>
      </thead>`;
      const tableRow = val
        .map((i) => {
          return `<tbody>
            <tr>
              <td>${i.subscriptionName}</td>
              <td>${i.startDate}</td>
              <td>${i.endDate}</td>
              <td>${i.nameOfUser}</td>
            </tr>
          </tbody>`;
        })
        .join("");

      document.getElementById("planHistory").innerHTML = `${tableHead}${tableRow}`;
    } catch (error) {
      console.error(error);
      alert("Error occurred while fetching data.");
    }
  };

  searchForm.addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevent form submission

    const searchTerm = subscriptionSearch.value.trim();
    if (searchTerm) {
      searchPlanHistoryBySubscription(searchTerm);
    } else {
      fetchAllPlanHistory();
    }
  });

  // Call the fetchAllPlanHistory function when the page loads
  fetchAllPlanHistory();
});
