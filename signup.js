function fromValidate(params) {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var emailornum = document.getElementById("emailornum").value;
    var passwordd = document.getElementById("passwordd").value;
    var error = document.getElementById("error");
    var text = "";
    if(firstname.length <3){
        text = "please enter a valid name !";
        error.innerHTML = text;
        return false;
    } else if (lastname.length <3){
        text = "please enter a valid name !";
        error.innerHTML = text;
        return false;
    } else if (emailornum.indexOf("@") == -1) {
        text = "please enter a valid email or phone number !";
        error.innerHTML = text;
        return false;
    } else if (passwordd.length < 5){
        text = "please enter a valid password !";
        error.innerHTML = text;
        return false;
    } else {
        alert("Done");
        return true ;
    }
}