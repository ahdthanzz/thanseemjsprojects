//class
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

//over riding