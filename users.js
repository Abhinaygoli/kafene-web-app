var loginValue = localStorage.getItem("loginValue");

function userLogOut() {
  localStorage.setItem("loginValue", "false");
  window.location.href = "index.html";
}

//Getting data from backend using api call and putting that data in the table.

var responseArr;
$.get(
  "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users",
  function (data) {
    responseArr = data;
    data.map((item) => {
      createRows(item);
    });

    userSearchFun();

    //Implementing reset functionality

    $("#resetBtn").click(function (event) {
      event.preventDefault();
      $("#searchBox").val("");
      $("#orderData tr").css("display", "");
    });
  }
);


function createRows(data) {

  //Adding table rows to the table

  let tr = `
  <tr class="table-row">
  <td class="secondary-text-styles">${data.id}</td>
  <td class="secondary-text-styles"><img src=${data.profilePic}/></td>
  <td class="secondary-text-styles">${data.fullName}</td>
  <td class="primary-text-styles">${data.dob}</td>
  <td class="secondary-text-styles">${data.gender}</td>
  <td class="secondary-text-styles">${data.currentCity}, ${data.currentCountry}</td>
</tr>`;
  $("#orderData").append(tr);
}


//Calling userSearchFun 


const userSearchFun = () => {
  $("#search-form").submit((event) => {
    let searchValueElement = document
      .getElementById("searchBox")
      .value.toUpperCase();
    event.preventDefault();
    if (searchValueElement.length < 2) {
      alert("Please enter atleast 2 characters");
      $("#orderData tr").css("display", "");
    } else {
        //getting data from the backend using api call to filter user data based on user name
      $.get(
        `https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users?fullName=${searchValueElement}`,
        function () {
          let tablebodyElement = document.getElementById("orderData");
          let trElement = tablebodyElement.getElementsByTagName("tr");
          for (let i = 0; i < trElement.length; i++) {
            let td = trElement[i].getElementsByTagName("td")[2];
            if (td) {
              let textValue = td.textContent || td.innerHTML;

              if (textValue.toUpperCase().indexOf(searchValueElement) > -1) {
                trElement[i].style.display = "";
              } else {
                trElement[i].style.display = "none";
              }
            }
          }
        }
      );
    }
  });
};
