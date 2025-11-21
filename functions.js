/* let a = 12;
let b = 24;
            //this is parameters//
function add(a, b=12) {
    console.log(a+b);
    console.log(a*b-a);

}
//call the function
add(a,b);
 */

//Scope variable
/* let a = 12;
let b = 24;

//let c; //global variable

function add(a, b) {
    c = (a + b); 
    return c ; 
    //local variable

}
//call the function
add(a, b);
console.log("this is a local variable ::::: ",c);
 */

/* let no1;
function oddEvan(no1) {
    if (no1%2==0) {
        return "Evan";

    }
    else{
        return "Odd"
    }
    
}
// console.log(oddEvan(10));
let oddOrEvan = oddEvan;
console.log(oddOrEvan(4)); */

/* let a = 12;
let oddOrEvan =(a)=> a%2==0 ? "Evan" : "Odd" ;
console.log(oddOrEvan(10)); */
/* 
function operation(op, a, b) {
    return op(a,b);

}

// this is function
let add = (a, b) => a + b;
let sub = (a, b) => a - b;

console.log(operation(add,3,2)); */

/* function cal(op, a, b,) {
    return op(a, b);

}

let add = (a, b) => a = b;
let sub = (a, b) => a - b;
console.log(cal(sub, 4, 5));

let multi = (a) => a*5 ;
console.log(multi(6)); */
function ope(ab, a, b) {
    return ab(a, b)

}
let add = (a, b) => (a + b);
function sub(a, b) {
    return (a - b);

}
console.log(sub(4,3));
console.log(sub(5,3));
// console.log(ab(7,5));
console.log(add(7,5));