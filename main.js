function fromValidate(params) {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var error = document.getElementById("error");
    var text = "";
    if(email.indexOf("@") == -1) {
        text = "please enter a valid email !";
        error.innerHTML = text;
        return false;
    } else if (password.length < 5){
        text = "please enter a valid password !";
        error.innerHTML = text;
        return false;
    } else {
        alert("Done");
        return true ;
    }
}