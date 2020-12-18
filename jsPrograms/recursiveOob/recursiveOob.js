let initial = "Hello, world!";
console.log(initial);
for (let i = 0; i < 10; i++) {
    initial = initial.replace(/[aeiou]/gi, "oob");
    console.log(initial);
}