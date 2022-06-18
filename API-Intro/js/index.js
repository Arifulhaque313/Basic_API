const user = {
    id: 11,
    name: "Ariful Islam Sajib",
    age: 24
}

const stingified = JSON.stringify(user);

// console.log(user);

const converted = JSON.parse(stingified)

console.log(stingified);
console.log(user);
