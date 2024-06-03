function Login() {
    const luser = document.getElementById("luser").value;
    const lpass = document.getElementById("lpass").value;

    const ruser = localStorage.getItem("user");
    const rpass = localStorage.getItem("pass");

    let error = false;

    if (luser === "") {
        document.getElementById("error").innerHTML = "Enter Username/EmailId";
        error = true;
    } else {
        document.getElementById("error").innerHTML = "";
    }

    if (lpass === "") {
        document.getElementById("error1").innerHTML = "Enter Password";
        error = true;
    } else {
        document.getElementById("error1").innerHTML = "";
    }

    document.getElementById("success").innerHTML = "";
    document.getElementById("notsuccess").innerHTML = "";

    if (luser === ruser && lpass === rpass) {
        document.getElementById("success").innerHTML = "User login successfully: " + luser;

        setTimeout(() => {
            window.location.href = "homepage.html";
        }, 500);
    } else {
        document.getElementById("notsuccess").innerHTML = "User login unsuccessful";
    }
}