var loginValue = localStorage.getItem("loginValue");

function userLogOut() {
  localStorage.setItem("loginValue", "false");
  window.location.href = "index.html";
}

//Getting data from backend using api call and putting that data in the table.

var responseArr;
$.get(
  "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders",
  function (data) {
    responseArr = data;
    data.map((item) => {
      createRows(item);
      $("#count").html(data.length);
    });

    // for(var i = 0 ; i < responseArr.length ; i++){

    //     createRows(responseArr[i]);
    //     $('#count').html(data.length);
    // }
  }
);

function createRows(data) {

  //Adding table rows to the table

  let tr = `
        <tr class="table-row">
            <td class="secondary-text-styles">${data.id}</td>
            <td class="primary-text-styles">${data.customerName}</td>
            <td class="primary-text-styles">${data.orderDate}<br><span class="secondary-text-styles">${data.orderTime}</span></td>
            <td class="secondary-text-styles">$${data.amount}</td>
            <td class="primary-text-styles">${data.orderStatus}</td>
        </tr>`;
  $("#orderData").append(tr);
}

//checking the New checkbox clicked and updating the table

var newCheckBox = document.getElementById("newCheckbox");
newCheckBox.addEventListener("change", function (event) {
  event.preventDefault();
  let orderDataElement = document.getElementById("orderData");
  let trElement = orderDataElement.getElementsByTagName("tr");
  for (let i = 0; i < trElement.length; i++) {
    let td = trElement[i].getElementsByTagName("td")[4];
    if (td) {
      let textValue = td.textContent || td.innerHTML;
      if (textValue === "New") {
        if (this.checked === true) {
          trElement[i].style.display = "";
          $("#count").html(parseInt($("#count").html()) + 1);
        } else {
          trElement[i].style.display = "none";
          $("#count").html(parseInt($("#count").html()) - 1);
        }
      }
    }
  }
  console.log(orderDataElement.getElementsByTagName("tr").length);
});

//checking the Packed checkbox clicked and updating the table

var packedCheckbox = document.getElementById("packedCheckbox");
packedCheckbox.addEventListener("change", function (event) {
  event.preventDefault();
  let orderDataElement = document.getElementById("orderData");
  let trElement = orderDataElement.getElementsByTagName("tr");
  for (let i = 0; i < trElement.length; i++) {
    let td = trElement[i].getElementsByTagName("td")[4];
    if (td) {
      let textValue = td.textContent || td.innerHTML;
      if (textValue === "Packed") {
        if (this.checked === true) {
          trElement[i].style.display = "";
          $("#count").html(parseInt($("#count").html()) + 1);
        } else {
          trElement[i].style.display = "none";
          $("#count").html(parseInt($("#count").html()) - 1);
        }
      }
    }
  }
  console.log(orderDataElement.getElementsByTagName("tr").length);
});

//checking the InTransit checkbox clicked and updating the table

var intansitCheckbox = document.getElementById("intansitCheckbox");
intansitCheckbox.addEventListener("change", function (event) {
  event.preventDefault();
  let orderDataElement = document.getElementById("orderData");
  let trElement = orderDataElement.getElementsByTagName("tr");
  for (let i = 0; i < trElement.length; i++) {
    let td = trElement[i].getElementsByTagName("td")[4];
    if (td) {
      let textValue = td.textContent || td.innerHTML;
      if (textValue === "InTransit") {
        if (this.checked === true) {
          trElement[i].style.display = "";
          $("#count").html(parseInt($("#count").html()) + 1);
        } else {
          trElement[i].style.display = "none";
          $("#count").html(parseInt($("#count").html()) - 1);
        }
      }
    }
  }
  console.log(orderDataElement.getElementsByTagName("tr").length);
});

//checking the Delivered checkbox clicked and updating the table

var deliveredCheckBox = document.getElementById("deliveredCheckBox");
deliveredCheckBox.addEventListener("change", function (event) {
  event.preventDefault();
  let orderDataElement = document.getElementById("orderData");
  let trElement = orderDataElement.getElementsByTagName("tr");
  for (let i = 0; i < trElement.length; i++) {
    let td = trElement[i].getElementsByTagName("td")[4];
    if (td) {
      let textValue = td.textContent || td.innerHTML;
      if (textValue === "Delivered") {
        if (this.checked === true) {
          trElement[i].style.display = "";
          $("#count").html(parseInt($("#count").html()) + 1);
        } else {
          trElement[i].style.display = "none";
          $("#count").html(parseInt($("#count").html()) - 1);
        }
      }
    }
  }
  console.log(orderDataElement.getElementsByTagName("tr").length);
});
