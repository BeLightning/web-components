function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        const fizz = i % 3 === 0;
        const buzz = i % 5 === 0;
        const result = fizz && buzz ? "FizzBuzz" : fizz ? "Fizz" : buzz ? "Buzz" : i;
        console.log(result);
    }
}

fizzBuzz();