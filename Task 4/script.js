function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/login", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            if (response.success) {
                document.getElementById("login-form").style.display = "none";
                document.getElementById("secured-page").style.display = "block";
                document.getElementById("username-display").innerText = username;
            } else {
                document.getElementById("login-message").innerText = response.message;
            }
        }
    };
    xhr.send(JSON.stringify({username: username, password: password}));
}
