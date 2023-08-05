document.addEventListener("DOMContentLoaded", async function () {
  let checkRole = document.getElementById("checkRole");

    const role = localStorage.getItem("role");
    if(role === "STAFF") {
      checkRole.style.display="none";
    }
  });

document.getElementById("signup").onclick = function (event) {
      
    const createAnnouncement = async () => {
      let title = document.getElementById('title').value;
      let message = document.getElementById('message').value;
      let announcementDate = document.getElementById('announcementDate').value;
      
  
      let params = {
        "title": title,
        "message": message,
        "announcementDate": announcementDate
      };
  
      let req = await request(
        "POST",
        "http://localhost:8080/announcement/create",
        true,
        params
      );
  
      // Redirect to login.html
      window.location.href = "adminDashboard.html";
    }
    
    createAnnouncement();
  };
  