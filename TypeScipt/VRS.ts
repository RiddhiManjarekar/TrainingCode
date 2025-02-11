// Vehicle Rental System
class Vehicle {
    brand:string;
    model:string;
    rentPricePerDay:number;
    constructor(brand:string, model:string, rentPricePerDay:number) {
        this.brand = brand;
        this.model = model;
        this.rentPricePerDay = rentPricePerDay;
    }
    calculateRentalCost(days:number) :number{
        return this.rentPricePerDay * days;
    }
}

class Car extends Vehicle {
    calculateRentalCost(days:number):number {
        return super.calculateRentalCost(days) * 1.1; 
    }
}

class Bike extends Vehicle {
    calculateRentalCost(days:number):number {
        return super.calculateRentalCost(days) * 0.9; 
    }
}

class Truck extends Vehicle {
    calculateRentalCost(days:number):number {
        return super.calculateRentalCost(days) * 1.5; 
    }
}

const vehicle1 = new Car("Audi", "A4", 50);
console.log("Cost of Car: "+vehicle1.calculateRentalCost(5));

const vehicle2 = new Bike("Honda", "PCX", 30);
console.log("Cost of Bike: "+vehicle2.calculateRentalCost(5));

const vehicle3 = new Truck("Tata", "Xenon", 70);
console.log("Cost of Truck: "+vehicle3.calculateRentalCost(5));