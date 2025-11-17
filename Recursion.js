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

function factorial(n) {
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
console.log(add(5));