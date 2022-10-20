var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var ageError = document.getElementById('age-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName() {
    var names = document.getElementById('name').value;
    if (names.length == 0) {
        nameError.innerHTML = ' name is required!';
        nameError.style.color = 'red';
        return false;
    }
    if (!names.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Write full name';
        nameError.style.color = 'red';
        return false;
    }
    nameError.innerHTML = '';
    return true;
}

function validatePhone() {
    var phonenum = document.getElementById('phone').value;
    if (phonenum.length == 0) {
        phoneError.innerHTML = 'phone number required!';
        phoneError.style.color = 'red';
        return false;
    }
    if (phonenum.length !== 10) {
        phoneError.innerHTML = 'phone number should be 10 digits';
        phoneError.style.color = 'red';
        return false;
    }
    if (!phonenum.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'only digits please!';
        phoneError.style.color = 'red';
        return false;
    }
    phoneError.innerHTML = '';
    return true;
}

function validateEmail() {
    var emails = document.getElementById('email').value;
    if (emails.length == 0) {
        emailError.innerHTML = 'Email is required!';
        emailError.style.color = 'red';
        return false;
    }
    if (!emails.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{3}$/)) {
        emailError.innerHTML = 'Email is invalid';
        emailError.style.color = 'red';
        return false;
    }
    emailError.innerHTML = '';
    return true;
}

function validateAge() {
    var myage = document.getElementById('age').value;
    if (myage.length == 0) {
        ageError.innerHTML = 'Age is required!';
        ageError.style.color = 'red';
        return false;
    }
    if (!myage.match(/^[0-9]{1,2}$/)) {
        ageError.innerHTML = 'Age not valid';
        ageError.style.color = 'red';
        return false;
    }
    ageError.innerHTML = '';
    return true;
}

function validateMessage() {
    var messages = document.getElementById('message').value;
    var required = 10;
    var left = required - messages.length;
    if (messages.length == 0) {
        messageError.innerHTML = 'This fiels is empty!';
        messageError.style.color = 'red';
        return false;
    }
    if (left > 0) {
        messageError.innerHTML = 'Type minimum TEN words';
        messageError.style.color = 'red';
        return false;
    }
    messageError.innerHTML = '';
    return true;
}

function validateButton() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateName || !validateMessage) {
        submitError.innerHTML = 'All fields are required to submit!';
        submitError.style.color = 'red';
        submitError.style.display = 'block';
        setTimeout(function () { submitError.style.display = 'none'; }, 3000);
        return false;
    }
    submitError.innerHTML = "Submitted successfully";
    submitError.style.color = 'seagreen';
    return true;
}
