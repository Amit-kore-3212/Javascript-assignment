var login = function () {
    var username = document.getElementById('username');
    var password = document.getElementById('password');
    if (username) {
        var name_1 = username.value;
        if (name_1 == '') {
            alert("Please provide username");
        }
        localStorage.setItem('username', name_1);
    }
    if (password) {
        var secret = password.value;
        if (secret.length < 6) {
            alert("Password should have atleast 6 characters");
        }
        localStorage.setItem('password', secret);
    }
    window.location.href = 'TodoTs.html';
};
function persist() {
    document.getElementById('username').value = localStorage.getItem('username'),
        document.getElementById('password').value = localStorage.getItem('password');
}
