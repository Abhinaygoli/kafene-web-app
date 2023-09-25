var loginValue = localStorage.getItem("loginValue");

function userLogOut() {
  localStorage.setItem("loginValue", "false");
  window.location.href = "index.html";
}

//Getting data from backend using api call and putting that data in the table.

var responseArr;
$.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products", function (data) {
  responseArr = data;
  data.map((item) => {
    createRows(item);
    $("#count").html(data.length);
  });


  // for(var i = 0 ; i < responseArr.length ; i++){

  //     createRows(responseArr[i]);
  //     $('#count').html(data.length);
  // }
});
function createRows(data) {

  //Adding table rows to the table
  
  let tr = `
    <tr class="table-row">
        <td class="secondary-text-styles">${data.id}</td>
        <td class="primary-text-styles">${data.medicineName}</td>
        <td class="secondary-text-styles">${data.medicineBrand}</td>
        <td class="primary-text-styles">${data.expiryDate}</td>
        <td class="secondary-text-styles">$${data.unitPrice}</td>
        <td class="secondary-text-styles">${data.stock}</td>
    </tr>`;
  $("#orderData").append(tr);
}


//updating expired products


var expiredCheckBoxElement = document.getElementById("expired-check-box");
expiredCheckBoxElement.addEventListener("change", function (event) {
  event.preventDefault();
  let tablebodyElement = document.getElementById("orderData");
  let trElement = tablebodyElement.getElementsByTagName("tr");
  for (let i = 0; i < trElement.length; i++) {
    let td = trElement[i].getElementsByTagName("td")[3];
    if (td) {
      let textValue = myParser(td.textContent || td.innerHTML);
      if (new Date(textValue).getTime() < new Date().getTime()) {
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
});


//updating low cost products


var lowStockCheckBoxElement = document.getElementById('low-stock-check-box');
lowStockCheckBoxElement.addEventListener('change', function (event) {
    event.preventDefault();
    let tablebodyElement = document.getElementById('orderData');
    let trElement = tablebodyElement.getElementsByTagName('tr');
    for (let i = 0; i < trElement.length; i++) {
        let td = trElement[i].getElementsByTagName('td')[5];
        if (td) {
            let textValue = td.textContent || td.innerHTML;
            if (textValue < 100){
                if(this.checked === true){
                    trElement[i].style.display = "";
                    $('#count').html(parseInt($('#count').html()) + 1 );
                }else{
                    trElement[i].style.display = "none";
                    $('#count').html(parseInt($('#count').html()) - 1 );
                }     
            }
        }
    }
})


function myParser (date) {
    var arr = date.split('-');
    return arr.join(' ')
}
