interface user {
    name: string;
    age: number;
    address: {
        city: string;
        country: string;
        pincode: number;
    };
}

let user: user = {
    name: 'Alice',
    age: 30,
    address: {
        city: 'Example City',
        country: 'Example Country',
        pincode: 845401,
    },
};
function legal(user:user):boolean{
if(user.age>=18)
{
    return true;
}
return false;
}
console.log(legal(user)?"legal":"not legal")

//
interface people{
    name:string,
    age:number,
    greet:()=>string
}
let person:people={
    name:"aditya",
    age:21,
    greet() {
        return "hi"
    },
}
console.log(person.greet());
// the interface dont store value in itself it just define the structure of the object and the type of the value that can be stored in it.
interface student{
    name:string ,
    age:number,
}
class teacher implements student{
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
let student = new teacher("aditya", 21);
//just the contructor calling 
console.log(student.name)
class shape{
    area()
    {
        console.log("area of shape")
    }
}
class rectangle extends shape{
    width:number 
    height:number
    constructor(width:number,height:number)
   { super();
    this.height=height;
    this.width=width;
   }
}
const rec=new rectangle(10,20);
rec.area();
// type in typescript 
type userType ={
    name:string ,
    age:number
}
function ilegal(consumer:userType):boolean
{
    if(consumer.age>=18)
    {
        return true;
    }
    return false;
}

// union ans interswcrion 
//1> intersection type -> the and operation 
//Intersection (&): The value must satisfy both types simultaneously.
 type employe={
name:string ,
age:number
addresh:string
 }

 type maneger={
    name:string,
    id:number
 }

 type teamLead=maneger&employe

 let e: employe = {
    name:"aditya",
    age:21,
    addresh:"motihari"
 }
 console.log(e.name+" the employe")

 let m:maneger={
    name:"aditya maneger",
    id:1234
 }
 console.log(m.name)

 let t:teamLead={
    name:"aditya teamlead",
    age:21,
    id:1234,
    addresh:"motihari"
 }
 console.log(t.name)
 
 //2> union type -> the or 
 //Union (|): The value can be either one type or both, 
 // as long as it satisfies at least one type.
type hr=employe|maneger

let h={
    name:"aditya hr",
    id:1234,
    age:1234
}
console.log(h.name)
// user and admin example by creating a functiom 
interface user1 {
    name:string,
    age:number
}

interface admin{
    name:string ,
    addresh:string 
}

type userOrAdmin=user1|admin;
function greetbyname(abc:userOrAdmin)
{
    console.log(abc.name);
}
let pp:user1={
    name:"aditya user",
    age: 21,
}
greetbyname(pp);
let aa:admin={
    name:"aditya admin",
    addresh:"chandmari"
}
greetbyname(aa)

//arrays in typescript
//The ! is called the non-null assertion operator in TypeScript.
function max(nums: number[]): number {
    let max = -100000000000;

    for (let i = 0; i < nums.length; i++) {
        if (max <= nums[i]!) {
            max = nums[i]!;
        }
    }

    return max;
}
let a:number[]=[1,3,4,56,7,8,]
console.log("max = "+max(a))
// problem 
interface arrayuser{
    firstName:string,
     lastName:string,
    age:number
}
function useriegal(used:arrayuser[])
{
    let ans:arrayuser[]=[];
    for(let i=0;i<used.length;i++)
    {
        if(used[i]!.age>18){
            ans.push(used[i]!);
        }
    }
    return ans;
}

const users: arrayuser[] = [

    {

        firstName: "Aditya",

        lastName: "Srivastava",

        age: 22

    },

    {

        firstName: "Rahul",

        lastName: "Sharma",

        age: 17

    },

    {

        firstName: "Priya",

        lastName: "Verma",

        age: 25

    }

];
console.log(useriegal(users))