// /* let car = {
//     color: "Red",
//     name: "Nexon",
//     price: 3000,
//     onRoad(){
//         return this.price +2;

//     }
// };
// // car.name = "BMW";
// // car ['Modelnumbr']=2024;
// // console.log(car.color);
// // console.log(car.name);
// // console.log(car);
// // delete car.name;
// // console.log(car);
// car['ModelYear'] =2024;
// console.log(car.onRoad()); */

// let user = {

//     name: 'thanseem',
//     age: 12
// }
// // user ['Name:'] = 'Thanseem';
// // // user["Name:"] ="R.Thanseem";
// // console.log(user);
// // user.Name ='R.Thanseem';
// // console.log(user);
// // console.log(user);
// // user.name ='R.Thanseem';
// // console.log(user.name);
// // delete user.name;
// // console.log(user.name);

// //=========//in opertor ================

// //user and key ntu kodutha key laha irukura value varum
// // for (key in user){
// //     console.log(user[key]);
// // }
// // for (key in user){
// //     console.log([key]);
// // }
// //key value mattum varum output ok
// // for (key in user){
// //     console.log([key + '-'+ user[key]]);
// // }

// //value of referance
// // let a ={
// //     name: 'thanseem',
// //     age : 24
// // };
// // let b =a ;
// // console.log(a,b);

// // b.age = 75,
// // b.name ='ahamed',
// // console.log(a,b);

// // toteal ah change panna iyalah ok one oen ah change pannaiyalum

// // const a = {
// //     name: 'thanseem',
// //     age: 23,
// // };

// // a.age = 24;
// // a.name = 'ahd';
// // console.log(a,a);

// let a = {
//     name: 'thanseem',
//     age: 24,
// };
// b = a;
// console.log(a);
// a = {};
// console.log(b);

// // const names = ["thsneem" ,"ahmed"];
// // console.log(names[0]);


// let name1 = {
//     fn: "thanseem",
//     ln: "ahamed",
//     age: 24
// }

// console.log(name1);
// name1.age = 25;
// console.log(name1);

// for (key in name1) {
//     console.log(name1[key]);
//     console.log([key]);
//     console.log([key + '--' + name1[key]]);

// }

// let person ={
//     F_Name:'Thanaseem',
//     age :24,
//     Eye_Color: 'Blue',
//     onRoad(){
//         return this.age +2,
//         this.Eye_Color + "Red";
//     }
// }

// console.log(person.Eye_Color);
// delete person.age;
// console.log(person);
// person['City'] = 'Kalmunai';
// console.log(person);
// // Change of properties
// person['age'] =23;
// person.age= 24;
// console.log(person);
// console.log(person.onRoad());

// let user = {
//     /* key*/name : 'thanseem',/* Value */
//     age :24,
// }
// for (key in user){
//     console.log(key +'-' +user[key]);
// }

// Refrence 
// let a = {
//     name: 'tnaseem',
//     age: 23
// }

// let b = a;
// console.log(a,'this for b',b);

// b.age=24
// console.log('this a -', a, 'this b -',b);
// const vanthu totel object ah change panna vidathu 
// athea one properties ah change panna vidum ok

let a ={
    name :'thanseem',
    age : 24,
};
b=a;
console.log(a);
a={};
console.log(b);