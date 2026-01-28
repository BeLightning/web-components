$("button").on('click', function () {
    const passwordInput = document.getElementById('pass');
    // Minimum 8 chars, at least one digit, one lowercase, one uppercase
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,63}$/;
    const resultElement = $("p");
    
    if (passwordInput.value.match(passwordRegex)) {
        resultElement.text('OK').css('color', 'green');
    } else {
        resultElement.text('Error!').css('color', 'red');
    }
});