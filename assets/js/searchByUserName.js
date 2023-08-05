document.addEventListener("DOMContentLoaded", async function () {
  let checkRole = document.getElementById("checkRole");

    const role = localStorage.getItem("role");
    if(role === "STAFF") {
      checkRole.style.display="none";
    }
  });
document.getElementById("usernameSearch").addEventListener("keyup", function() {
    var searchValue = this.value.toLowerCase();
    var table = document.getElementById("payment");
    var rows = table.getElementsByTagName("tr");
    
    for (var i = 0; i < rows.length; i++) {
      var username = rows[i].getElementsByTagName("td")[0];
      if (username) {
        var usernameValue = username.textContent || username.innerText;
        if (usernameValue.toLowerCase().indexOf(searchValue) > -1) {
          rows[i].style.display = "";
        } else {
          rows[i].style.display = "none";
        }
      }
    }
  });