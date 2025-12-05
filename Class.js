/* /* //Class Java script
/* 
let user = {
    name: "thanseem",
    age: 24,
    display: function () {

    }

} 
// create class
class User {
    /*     name = 'thnaseem';
        age = 24;
    #name;//private propertiy
    #age;
    constructor(name, age) {
        this.#age = age;
        this.#name = name;

    }
    display() {
        console.log("Name:", this.#name);
        console.log('Age : ', this.#age);


    }
    get name() { //class ila irukum private value ah edukurathu ku use pannara
        return "Your Name " + this.#name;

    }
    get age() {
        return 'Your Age => ' + this.#age;
    }
    set age (age){
        if (age == 24){
            this.#age =26;
        }
        else{
            this.#age=age;
        }

    }
    set name(name) {
        if (name == 'Thanseem') {
            this.#name = 'Ahamed';

        } else {
            this.#name = name;

        }


    }

}
let thansim = new User('Thanseem', 24);

// thansim.display()//Function call
// console.log(thansim.age);

thansim.name = 'Thanseem';
thansim.age =24;
console.log(thansim.name);
console.log(thansim.age);


//class features
  */

// class MathHelper {
//   static add(a, b) {
//     return a + b;
//   }
// }

// console.log(MathHelper.add(10, 20)); // 30

/* class sum{
    
} */


/* let car ={
    name : 'alto',
    price : 250000,
    color : 'Red',
    display : function(){

    }
}; */
//class create
/* class Car {
    name;
    age;


    constructor(name, age) {
        this.age = age;
        this.name = name;

    }
    display() {
        console.log('Name :', this.name);
        console.log('Age :', this.age)
    }

}
let th = new Car('thnaseem', 24);
console.log(th.name)
th.display(); */

// special function for class
class user {
    #name; //private proprtiy
    #age;
    #color;

    constructor(name, age) {
        this.#age = age;
        this.#name = name;

    }
    display() {
        console.log('Name :', this.#name);
        console.log('Age :', this.#age)
    }
    get name() {
        return "Name =>" + this.#name;
    }
    get age() {
        return 'this your age' + this.#age;
    }
    //value set panurathu
    set name(name) {
        if (name == 'thanseem') {
            this.#name = 'ahamed';


        } else {
            this.#name = name;

        }


    }
    set age(age) {
        if (age == 24) {
            this.#age = 23;
        }
        else {
            this.#age = age;
        }


    }

}

let rt = new user("thanseem", 24);
rt.name = 'thanseem';
rt.age =24 ;
console.log(rt.name);
console.log(rt.age);