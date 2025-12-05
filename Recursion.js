//Json -Javscript object Notation
/* let user ={
    name:"Thanseem",
    age:24,
    salary : 2000,
};

//Change JSON Data forobject
console.log(JSON.stringify(user)); */

//Json type  String to change Object
// let user = '{"Name":"Thanseem" ,"age":23}';
// console.log(JSON.parse(user));

//Date and Time Data Type

/* let bday = new Date();
console.log(bday.getTime());
.getmonth
.Date */

//Recursive Functions
//-Base Case
//-Update Statement
//-Recursive

/* function factorial(n) {
    if (n === 1) {
        return 1; // base case
    }
    return n * factorial(n - 1); // recursive case
}

console.log(factorial(10)); // Output: 120 call


function add(n) {
    if (n == 1) {
        return 1;
    }
    return n + add(n - 1);

}
console.log(add(5)); */

let user = {
    name: 'thanseem',
    age: 24,
    salary: 50000,
    city: 'kalmunai',
};
//object ah change panuthu JSON type aa
console.log(JSON.stringify(user));

//Normal string convert to object
let user1 = '{"name": "Thanseem" ,"age" :24}';
console.log(JSON.parse(user1));

// Date and Time
let bday = new Date('2001-01-03');
console.log(bday.getFullYear());
console.log(bday.getMonth());

//Recursion
//oru topic loop lah varathu
//import topbi
//-base case
//-update statement
//-recursive call

/* function factorial(n) {
    if (n == 0) {  //base case
        return 1;
    }


    return n * factorial(n - 2);

}

console.log(factorial(10)); */

function add(no) {
    if (no == 0) {
        return 1;

    }
    return no + add(no - 1);

}
console.log(add(5));