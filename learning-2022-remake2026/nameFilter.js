$("button").click(() => {
    const name = $("input").val().trim();
    
    if (!name) {
        $("p").text("Error: Name cannot be empty");
        return;
    }
    
    const nameArray = name.split(" ").filter(word => word.length > 0);
    
    if (nameArray.length < 2) {
        $("p").text("Error: Please enter first and last name");
        return;
    }
    
    const firstName = nameArray[0];
    const lastName = nameArray[nameArray.length - 1];
    const correct = /^[A-Za-z|А-Яа-я.-]{2,}$/;
    
    if (name.match(correct)) {
        $("p").text(`${name} - ${lastName}, ${firstName}`);
    } else {
        $("p").text("Error: Invalid name format");
    }
});