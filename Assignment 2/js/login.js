$(document).ready(function () {
    $("#loginForm").submit(function (event) {
        event.preventDefault();

        var username = $("#username").val();
        var password = $("#password").val();

        console.log("username: " + username);

        if (!username || !password) {
            alert("Username or password cannot be empty");
            return;
        }
        console.log(username);

        if (!username.match(/^[A-Z][a-z]+$/)) {
            alert("Username should start with capital letter");
            return;
        }

        if (!password.match(/^[a-z0-9]+$/)) {
            alert("Password should have only small letters and numbers");
            return;
        }

        if (username == "Admin" && password == "admin123") {
            alert("Login successful");
            window.location.href = "home.html"; // Redirecting to other page.
        } else {
            alert("Login failed");
            return;
        }
    });
});
