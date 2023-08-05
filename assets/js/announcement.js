document.addEventListener("DOMContentLoaded", async function () { 
    var fullName = document.getElementById('fullName');
    const announcement = async () => {
      try {
        let params = {}; // Add any required params for the request
  
        let req = await request(
          "GET",
          "http://localhost:8080/announcement/getAllAnnouncement",
          true,
          params
        );
        fullName.innerText = req.fullName;
        const val = req?.data;
        const div = val.map((i) => {
          return ` <li  class="list-group-item">
          <h6 class="mb-1" id="announcementTitle">${i.title}</h6>
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
        alert("Error occurred while fetching data.");
      }
    };
  
    // Call the userDashboard function when the page loads
    announcement();
  });
  