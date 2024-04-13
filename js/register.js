var registerForm = document.getElementById('registerForm');
var userName = document.getElementById('form3Example1c');
var email = document.getElementById('form3Example3c');
var password = document.getElementById('form3Example4c');
var confirmPassword = document.getElementById('form3Example4cd');
var dataFromStorage = JSON.parse(localStorage.getItem('userDataFromLocal'));
console.log(dataFromStorage);
if (dataFromStorage ==null) {
    var allUsers=[];
}
else {
    var allUsers=dataFromStorage;
}

registerForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    var userData={
        username:userName.value,
        email:email.value,
        password:password.value,
        confirmPassword:confirmPassword.value
    }
    allUsers.push(userData);
    console.log(allUsers);
    localStorage.setItem('userDataFromLocal',JSON.stringify(allUsers));

    
})
