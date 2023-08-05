let checkRole = document.getElementById("checkRole");

    const role = localStorage.getItem("role");
    if(role === "STAFF") {
      checkRole.style.display="none";
    }