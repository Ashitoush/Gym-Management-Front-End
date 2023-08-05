document.addEventListener("DOMContentLoaded", async function() {
  var fullName = document.getElementById("fullName");
  var reverseOrderButton = document.getElementById("reverseDate");
  var isReverseOrder = reverseOrderButton.getAttribute("data-reverse-order") === "true";
  var searchDate = document.getElementById("date");

  searchDate.addEventListener("change", async function(event) {
    var selectedDate = event.target.value;
    try{
      let params = {
        "date": selectedDate
      }
      let req = await request(
        "POST",
        "http://localhost:8080/payment/searchPaymentUserByDate",
        true,
        params
      )
      const val = req?.data;

    const tableHead = `<thead class="text-primary">
      <th>Payment Date</th>
      <th>Paid Amount</th>
      <th>Amount</th>
      <th>Username</th>
      <th class="text-right" style="padding-right: 2rem">
        Due Amount
      </th>
    </thead>`;
    const tableRow = val
      .map((i) => {
        return `<tbody>
          <tr>
            <td>${i.paymentDate}</td>
            <td>${i.paidAmount}</td>
            <td>${i.amount}</td>
            <td>${i.nameOfUser}</td>
            <td class="text-right" style="padding-right: 2rem">${i.dueAmount}</td>
          </tr>
        </tbody>`;
      })
      .join("");

    document.getElementById("payment").innerHTML = `${tableHead}${tableRow}`;
    } catch(error) {
      alert("No Entries Found");
    }
  });

  const paymentAdmin = async function() {
    try {
      let params = {}; // Add any required params for the request

      let apiUrl = isReverseOrder
        ? "http://localhost:8080/payment/getPaymentsByUserReverse"
        : "http://localhost:8080/payment/getPaymentsByUserId";

      let req = await request("GET", apiUrl, true, params);
      fullName.innerText = req.fullName;

      const val = req?.data;

      const tableHead = `<thead class="text-primary">
        <th>Payment Date</th>
        <th>Paid Amount</th>
        <th>Amount</th>
        <th class="text-right" style="padding-right: 2rem">
          Due Amount
        </th>
      </thead>`;
      const tableRow = val
        .map((i) => {
          return `<tbody>
            <tr>
              <td>${i.paymentDate}</td>
              <td>${i.paidAmount}</td>
              <td>${i.amount}</td>
              <td class="text-right" style="padding-right: 2rem">${i.dueAmount}</td>
            </tr>
          </tbody>`;
        })
        .join("");

      document.getElementById("payment").innerHTML = `${tableHead}${tableRow}`;
    } catch (error) {
      console.error(error);
      // alert("Error occurred while fetching data.");
    }
  };

  // Call the paymentAdmin function when the page loads
  paymentAdmin();

  // Toggle reverse order when the button is clicked
  reverseOrderButton.addEventListener("click", async function() {
    isReverseOrder = !isReverseOrder;
    this.setAttribute("data-reverse-order", isReverseOrder.toString());
    this.innerText = isReverseOrder ? "Latest Date First" : "Oldest Date";
    paymentAdmin();
  });
});
