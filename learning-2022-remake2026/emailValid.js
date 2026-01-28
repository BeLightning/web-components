$("button").on('click', function () {
    const emailInput = document.getElementById('email_');
    const emailRegex = /^[a-zA-Z0-9_+.]{5,}@[a-zA-Z0-9.-]{2,}\.[a-zA-Z]{3,}$/;
    const resultElement = $("p");
    
    if (emailInput.value.match(emailRegex)) {
        resultElement.text('OK').css('color', 'green');
    } else {
        resultElement.text('Error!').css('color', 'red');
    }
});