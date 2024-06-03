function Register() {

    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;
    const pass1 = document.getElementById("pass1").value;

    let error = false;

    if(user === ""){
        document.getElementById("error").innerHTML = "Enter Username/EmailId";
        error = true;
    } else {
        document.getElementById("error").innerHTML = "";
    }

    if(pass === ""){
        document.getElementById("error1").innerHTML = "Enter Password";
        error = true;
    } else {
        document.getElementById("error1").innerHTML = "";
    }

    if(pass1 === ""){
        document.getElementById("error2").innerHTML = "Enter Re-enter Password";
        error = true;
    } else {
        document.getElementById("error2").innerHTML = "";
    }

    if (pass !== pass1) {
        document.getElementById("error3").innerHTML = "Passwords do not match";
        error = true;
    } else {
        document.getElementById("error3").innerHTML = "";
    }

    if (error) {
        return;
    }

    localStorage.setItem("user", user);
    localStorage.setItem("pass", pass);

    document.getElementById("success").innerHTML = "User registered successfully"+user;

    setTimeout(() => {
        window.location.href = "LogPage.html";
    }, 500);
}
