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

let no1;
function oddEvan(no1) {
    if (no1%2==0) {
        return "Evan";

    }
    else{
        return "Odd"
    }
    
}
console.log(oddEvan(10))