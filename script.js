var btn1 = document.querySelector('.btn1');
var email = document.querySelector('.email');
var password = document.querySelector('.password');

btn1.addEventListener('click', function(){
    if(email.value === ""){
        alert('Please provide your Email');
    } else if(password.value === ""){
        alert('Please provide your password');
    } else if (email.value !== "smith419jason@gmail.com" || password.value !== "Confirm.1"){
        alert('Please provide correct credentials');
    } else {
        alert('You are being logged in');
        window.location.href = "./account.html"; // Redirect to account.html
    }
});
