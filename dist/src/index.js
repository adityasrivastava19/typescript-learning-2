"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = {
    name: 'Alice',
    age: 30,
    address: {
        city: 'Example City',
        country: 'Example Country',
        pincode: 845401,
    },
};
function legal(user) {
    if (user.age >= 18) {
        return true;
    }
    return false;
}
console.log(legal(user) ? "legal" : "not legal");
let person = {
    name: "aditya",
    age: 21,
    greet() {
        return "hi";
    },
};
console.log(person.greet());
//# sourceMappingURL=index.js.map