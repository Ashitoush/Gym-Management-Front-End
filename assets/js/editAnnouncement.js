document.addEventListener("DOMContentLoaded", async function () {
  let checkRole = document.getElementById("checkRole");

    const role = localStorage.getItem("role");
    if(role === "STAFF") {
      checkRole.style.display="none";
    }
  });
const editAnnouncement = async () => {

    let title = document.getElementById('title').value;
    let message = document.getElementById('message').value;
    let announcementDate = document.getElementById('announcementDate').value;
    let id = document.getElementById("id").value;
    console.log(id);
    try {
     let params = {
        "title": title,
        "message": message,
        "announcementDate": announcementDate,
     };

      let req = await request(
        "PUT",
        "http://localhost:8080/announcement/update/"+id,
        true,
        params
      );

      window.location.href = "announcementAdmin.html";
      
    } catch (error) {
      console.error(error);
    //   alert("Error occurred while fetching data");
    alert(error);
    }

}

document.getElementById("updateBtn").addEventListener("click", editAnnouncement);