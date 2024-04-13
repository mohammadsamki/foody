var registerForm = document.getElementById('registerForm');
var email = document.getElementById('form2Example1')
var password = document.getElementById('form2Example2')

registerForm.addEventListener('submit',function (e){
    e.preventDefault();
    var allusers = JSON.parse(localStorage.getItem('userDataFromLocal'));
    // console.log(allusers);
    for (var i = 0 ; i<allusers.length;i++){
        if(allusers[i].email == email.value && allusers[i].password == password.value){
            console.log('email already exists');
            alert('login successful');
            localStorage.setItem('isLoggedIn',true);
            window.location.href='index.html';
        }
        else {
            console.log('email not exists');
            alert('login failed check your email and password');
        }
    }
})