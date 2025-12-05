/* //Error Handling

// let a = undefined;

// try {
//     console.log(a.name); Error Varapohura code inga podanum

// }
// catch (error) {
//     console.log("Error for this") //* *** handle Panura code
//     throw new Error("this for error");
//     throw new TypeError("Thsi Typr error");
//     throw new SyntaxError("Thsi Syntex error");

// }
let a = new Array(
    name = "Thanseem"
);

try {
    console.log(a[name]);
}
catch(error){
    console.log('error');
}
 */

/* let a = undefined;


try{
    console.log(a.name); //error vara chance irukunta try bloack lah than use panura ok

}
catch(err){
    console.log("error this ");//error vantha handle panura code than ithu ok
   // throw new Error("iam create error");
    //throw new TypeError('');
    throw SyntaxError ('','');
} */

let aq = new Array();
try{
    console.log(aq[-1]);
}
catch(error){
    console.log(error);

}

let username = undefined;
try{
    console.log(username.name);
}
catch(error){
    console.log('this error for username ');
}