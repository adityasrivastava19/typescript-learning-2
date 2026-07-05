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
class teacher {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let student = new teacher("aditya", 21);
//just the contructor calling 
console.log(student.name);
class shape {
    area() {
        console.log("area of shape");
    }
}
class rectangle extends shape {
    width;
    height;
    constructor(width, height) {
        super();
        this.height = height;
        this.width = width;
    }
}
const rec = new rectangle(10, 20);
rec.area();
function ilegal(consumer) {
    if (consumer.age >= 18) {
        return true;
    }
    return false;
}
let e = {
    name: "aditya",
    age: 21,
    addresh: "motihari"
};
console.log(e.name + " the employe");
let m = {
    name: "aditya maneger",
    id: 1234
};
console.log(m.name);
let t = {
    name: "aditya teamlead",
    age: 21,
    id: 1234,
    addresh: "motihari"
};
console.log(t.name);
let h = {
    name: "aditya hr",
    id: 1234,
    age: 1234
};
console.log(h.name);
//# sourceMappingURL=index.js.map