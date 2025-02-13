class Employee {
    name:string;
    id :number;
    private salary:number;

    constructor(name:string, id:number, salary:number) {
        this.name = name;
        this.id = id;
        this.salary = salary;
    }
    
    get findSalary():number {
        return this.salary;
    }
    get calcBonus():number {
        return this.findSalary * 0.01; 
    }
}

class Manager extends Employee {
    get calcBonus():number {
        return this.findSalary * 0.3;
    }
}

class Engineer extends Employee {
    get calcBonus() :number{
        return this.findSalary * 0.2;
    }
}

class Intern extends Employee {
    get calcBonus() {
        return this.findSalary * 0.02;
    }
}

const emp1 = new Manager("XYZ", 111, 60000);
console.log(emp1.calcBonus); 

 
