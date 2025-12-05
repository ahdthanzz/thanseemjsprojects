/* //class
class Car {
    name;
    milage;
    color;

    constructor(name, milage, color) {
        this.name = name;
        this.color = color;
        this.milage = milage;

    }
    display() {
        console.log('This cunstruotor car');
        console.log("Color :" + this.color);
        console.log("Name :" + this.name);
        console.log("Milage :" + this.milage);
    }

}

//inheritanse
class Vehicle extends Car {
    models;
    constructor(name, milage, color, models) {
        super(name, milage, color) //parent ah call pannaum
        this.models = models;
        
    }
    display() {
        console.log('Vehicle display');
    }

}
// let car = new Car("Alto" ,15000, 'Red');
// car.display();
let vehicle = new Vehicle("BMW", 12545, 'Black', "2021");
vehicle.display();
console.log(vehicle);

//over riding */

class Animal {
    legs;
    tail;
    constructor(legs, tail) {

        this.legs = legs;
        this.tail = tail;
    }
    display() {
        console.log("animal display");
        console.log(this.legs);
        console.log(this.tail);
    }

}
// inga animal vanthu perant class Human vanthu child class ok
class Human extends Animal {
    nataionality;
    constructor(legs, tail, nataionality) {
        super(legs, tail);//parent ah inga call pannaum ok
        this.nataionality = nataionality;
        
    }
    display() {
        console.log("Human Display");
        console.log(this.legs);
        console.log(this.tail);
        console.log(this.nataionality);

    }

}
/* let anime = new Animal(2,true,"srilankan");
anime.display(); */
let th = new Human(4, false, "srilankan", 5);
th.display();

//over raiding parent 