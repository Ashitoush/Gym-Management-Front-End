document.addEventListener("DOMContentLoaded", async function () {
  let checkRole = document.getElementById("checkRole");

    const role = localStorage.getItem("role");
    if(role === "STAFF") {
      checkRole.style.display="none";
    }
  var fullName = document.getElementById("fullName");
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
        return ` <li class="list-group-item">
          <h6 class="mb-1" id="announcementTitle">${i.title}</h6>
          <p class="mb-1" id="announcementDesc">
            ${i.message}
          </p>
          <small class="text-muted"
            >Published Date: <span id="announcementDate">${i.announcementDate}</span></small
          >
          <div>
            <button class="btn btn-primary" onclick="editAnnouncement(${i.announcementId})">Edit</button>
            <button class="btn btn-danger" onclick="deleteAnnouncement(${i.announcementId})">Delete</button>
          </div>
        </li>`;
      });

      document.getElementById("announcement").innerHTML = div.join("");
    } catch (error) {
      console.error(error);
      // alert("Error occurred while fetching data.");
    }
  };

  // Call the announcement function when the page loads
  announcement();
});

function editAnnouncement(announcementId) {
  window.location.href = "editAnnouncement.html?id=" + announcementId;
}

function deleteAnnouncement(announcementId) {
  const deleteA = async (announcementId) => {
    try {
      let params = {};

      let req = await request(
        "DELETE",
        "http://localhost:8080/announcement/delete/" + announcementId,
        true,
        params
      );
      
      // Redirect to the updated page after successful deletion
      window.location.href = "announcementAdmin.html";
    } catch (error) {
      console.error(error);
      alert("Error occurred while deleting the announcement.");
    }
  };

  deleteA(announcementId);
}
