$("button").on('click', function () {
    const numberInput = document.getElementById('numb');
    const phoneRegex = /^(\+359|0)[0-9]{6,9}$/;
    const resultElement = $("p");
    
    if (numberInput.value.match(phoneRegex)) {
        resultElement.text('OK').css('color', 'green');
    } else {
        resultElement.text('Error!').css('color', 'red');
    }
});