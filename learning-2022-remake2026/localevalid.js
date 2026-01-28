$("button").on('click', function () {
    const localeInput = document.getElementById('locale');
    const localeRegex = /^[a-z]{2}([_][A-Z]{2})?$/;
    const resultElement = $("p");
    
    if (localeInput.value.match(localeRegex)) {
        resultElement.text('OK').css('color', 'green');
    } else {
        resultElement.text('Error!').css('color', 'red');
    }
});