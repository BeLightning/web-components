function findLengthObj(obj) {
    return Object.keys(obj).length;
}

const student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

const car = {
    marka: "Ford",
    model: "Mustang",
    godina: 1978,
    aclass: "I"
};

console.log(findLengthObj(student)); // 3
console.log(findLengthObj(car));    // 4

