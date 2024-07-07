var userInputField = document.getElementById('username');

function usernameLengthCheck(username) {
    if (username.length < 3) {
        document.getElementById('u1').style.color = "red";
        userInputField.classList.add('invalid-text');
        userInputField.classList.remove('valid-text');
    } else {
        document.getElementById('u1').style.color = "green";
        userInputField.classList.add('valid-text');
        userInputField.classList.remove('invalid-text');
    }
}

function usernameFirstChar() {
    document.getElementById('username-rules').style.display = "block";
}

userInputField.addEventListener('input', function (e) {
    let username = e.target.value;
    if (!username) {
        console.log(false);
    } else {
        usernameLengthCheck(username);
    }
});

userInputField.addEventListener('focus', usernameFirstChar);
