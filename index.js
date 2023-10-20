function loginFormValidation(){
    var nameElement = document.getElementById("username");
    var passwordElement = document.getElementById("password");

    var nameOfTheUser = nameElement.value;
    var passwordOfTheUser = passwordElement.value;

    //Checking name and password are same 

    if(nameOfTheUser == passwordOfTheUser && nameOfTheUser.length > 1){
        alert("Login Successful!");
        localStorage.setItem("loginValue","true");
    }else{
        alert(`Please enter valid credentials ${nameOfTheUser} ${passwordOfTheUser}`);
    }
}

//getting value from the local storage and checking it true or false.
var loginValue = localStorage.getItem("loginValue");
if(loginValue == "true"){
    location.href = "order page.html"
}
