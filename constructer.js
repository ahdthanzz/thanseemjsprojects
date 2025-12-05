/* ///constructor and function is are same
//constructre is rules ofr the first letter is capital


function User() {
    this.name = 'thanseem';
    this.age = function () {
        return 22;
    }
    


}
//object create
// let th = new User('thanseem',24);
// let rt = new User('ahd',25);
// console.log(th);
// console.log(rt);
// let thh= new User();
let th = new User();
console.log(th.age());


 */

/* function Ex() {
    this.no1 = 5;
    this.no2 = 6;
    this.add = function (no3) {
        return this.no1 + this.no2 + no3;

    }

}

let adding = new Ex();
console.log(adding.add(5)); */

// function example() {
//     this.name = 'thanseem';
//     this.age =25,
//     this.city = "Kalmunai"

// }
// let th = new example();
// console.log(th.city);
// console.log(th.age);
// console.log(th.name);


// function User() {
//     this.name ="Thanseem",
//     this.age = 24;  
//     this.color =function(){
//         return 'blue';
//     } 
// }
// let hello = new User();
// let hi = new User("ahmed");
// console.log(hello.age);
// console.log(hi.age);
// console.log(hello);
// console.log(hello.color());

/* function Number() {
    this.num1 =12;
    this.num2 =24;
    this.add = function(num3){
        return this.num1 +  this.num2 + num3;
    }

}
let adding = new Number();
console.log(adding.add(40)) */

/* 
function User() {
    this.name = 'thanseem';
    this.age =function(){
        return 23
    }
    
}

//crate object
 let th = new User ();
 console.log(th);
 console.log(th.age()); */

//question
function Add() {
    this.num1 = 5;
    this.num2 = 6;
    this.sum = function (num3) {
        return this.num1 + this.num2 + num3;
    }
}
let rt = new Add();
console.log(rt.sum(4)); 