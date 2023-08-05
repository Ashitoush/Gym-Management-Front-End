document.addEventListener("DOMContentLoaded", async function () {
    let fullName = document.getElementById("fullName");
    let checkRole = document.getElementById("checkRole");

    const role = localStorage.getItem("role");
    if(role === "STAFF") {
      checkRole.style.display="none";
    }
    const userList = async () => {
      try {
        let params = {}; // Add any required params for the request
  
        let req = await request(
          "GET",
          "http://localhost:8080/user/getAllUser",
          true,
          params
        );
        const val = req?.data; // Added "const" keyword

        fullName.innerText = req.fullName;
                
        const tableHead = `<thead class="text-primary">
        <th>Username</th>
        <th>Email</th>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Phone Number</th>
        <th>Address</th>
        <th>Date of Birth</th>
      </thead>`;
        const tableRow = val.map((i) => {
            console.log(i);
          return `<tbody>
          <tr>
            <td>${i.userName}</td>
            <td>${i.email}</td>
            <td>${i.firstName}</td>
            <td>${i.lastName}</td>
            <td>${i.phoneNumber}</td>
            <td>${i.address}</td>
            <td>${i.dob}</td>
          </tr>
        </tbody>`;
        }).join('');

        document.getElementById("userList").innerHTML = `${tableHead}${tableRow}`;

      } catch (error) {
        console.error(error);
        alert("Error occurred while fetching data.");
      }
    };
  
    // Call the userDashboard function when the page loads
    userList();
  });
  