document.addEventListener("DOMContentLoaded", function () {
  let checkRole = document.getElementById("checkRole");

    const role = localStorage.getItem("role");
    if(role === "STAFF") {
      checkRole.style.display="none";
    }
    const urlParams = new URLSearchParams(window.location.search);
    const announcementId = urlParams.get("id");

    if (announcementId) {
      fetchAnnouncementDetails(announcementId);
    } else {
      console.error("No announcement ID found in the URL.");
    }
  });

  const fetchAnnouncementDetails = async (announcementId) => {

    let title = document.getElementById('title');
    let message = document.getElementById('message');
    let announcementDate = document.getElementById('announcementDate');
    let fullName = document.getElementById('fullName');
    let id = document.getElementById("id");
    try {
      let params = {}; // Add any required params for the request

      let req = await request(
        "GET",
        "http://localhost:8080/announcement/getAnnouncementById/"+announcementId,
        true,
        params
      );

      fullName.innerText = "Admin";
      val = req?.data;

      title.value = val.title;
      message.value = val.message;
      announcementDate.value = val.announcementDate;
      id.value = val.announcementId;
      
    } catch (error) {
      console.error(error);
      alert("Error occurred while fetching data.");
    }
};