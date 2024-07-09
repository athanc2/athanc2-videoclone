// valid username 
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

function usernameFirstChar(username) {
    const firstChar = username.charAt(0);
    const isAlphabetic = /^[a-zA-Z]$/.test(firstChar);

    if (!isAlphabetic) {
        document.getElementById('u2').style.color = "red";
        userInputField.classList.add('invalid-text');
        userInputField.classList.remove('valid-text');
    } else {
        userInputField.classList.add('valid-text');
        userInputField.classList.remove('invalid-text');
        document.getElementById('u2').style.color = "green";
    }
}

function usernameRules() {
    document.getElementById('username-rules').style.display = "block";
}

userInputField.addEventListener('input', function (e) {
    let username = e.target.value;
    if (!username) {
        console.log(false);
    } else {
        usernameLengthCheck(username);
        usernameFirstChar(username);
    }
});

userInputField.addEventListener('focus', usernameRules);

// valid password
var passwordInputField = document.getElementById('password');
var confirmPasswordInputField = document.getElementById('confirm-password');

function validpassword(password) {
    const passwordRules = document.getElementById('password-rules');
    const validlength = password.length >= 8;
    const validupperCase = /[A-Z]/.test(password);
    const validnumber = /[0-9]/.test(password);
    const specialChar = /[\/\*\-\+\!\@\#\$\^\&\~\[\]]/.test(password);
    if (!validlength) {
        document.getElementById('p1').style.color = "red";
        userInputField.classList.add('invalid-text');
        userInputField.classList.remove('valid-text');
    } else {
        document.getElementById('p1').style.color = "green";
        userInputField.classList.add('valid-text');
        userInputField.classList.remove('invalid-text');
    }
    if (!validupperCase) {
        document.getElementById('p2').style.color = "red";
        userInputField.classList.add('invalid-text');
        userInputField.classList.remove('valid-text');
    } else {
        document.getElementById('p2').style.color = "green";
        userInputField.classList.add('valid-text');
        userInputField.classList.remove('invalid-text');
    }
    if (!validnumber) {
        document.getElementById('p3').style.color = "red";
        userInputField.classList.add('invalid-text');
        userInputField.classList.remove('valid-text');
    } else {
        document.getElementById('p3').style.color = "green";
        userInputField.classList.add('valid-text');
        userInputField.classList.remove('invalid-text');
    }

    if (!specialChar) {
        document.getElementById('p4').style.color = "red";
        userInputField.classList.add('invalid-text');
        userInputField.classList.remove('valid-text');
    } else {
        document.getElementById('p4').style.color = "green";
        userInputField.classList.add('valid-text');
        userInputField.classList.remove('invalid-text');
    }
}

passwordInputField.addEventListener('input', function (e) {
    const password = e.target.value;
    validpassword(password);
    passwordmatch(password, confirmPasswordInputField.value);
});

passwordInputField.addEventListener('focus', function () {
    document.getElementById('password-rules').style.display = "block";
});


// matching passwords
function passwordsMatch(password, confirmPassword) {
    const match = password === confirmPassword;
    document.getElementById('p5').style.color = match ? "green" : "red";
}

confirmPasswordInputField.addEventListener('input', function (e) {
    const confirmPassword = e.target.value;
    passwordsMatch(passwordInputField.value, confirmPassword);
});

confirmPasswordInputField.addEventListener('focus', function () {
    document.getElementById('matchpassword-rules').style.display = "block";
});
