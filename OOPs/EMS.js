class Employee {
    constructor(name, id, salary) {
        this.name = name;
        this.id = id;
        this.#salary = salary;
    }
    #salary;
    getSalary() {
        return this.#salary;
    }
    calculateBonus() {
        return this.#salary * 0.01; 
    }
}

class Manager extends Employee {
    calculateBonus() {
        return this.getSalary() * 0.3;
    }
}

class Engineer extends Employee {
    calculateBonus() {
        return this.getSalary() * 0.2;
    }
}

class Intern extends Employee {
    calculateBonus() {
        return this.getSalary() * 0.02;
    }
}

const emp1 = new Manager("XYZ", "m1", 60000);
console.log(emp1.calculateBonus()); 

 
