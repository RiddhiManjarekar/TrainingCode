interface Employee{
    id:number;
    name:string;
    position:string;
    salary:number;
}
interface Manager extends Employee{
    teamSize:number;
}

class Department{

    deptName:string;
    private employees:Employee[];

    constructor(deptName:string,employees:Employee[]){
    this.deptName=deptName;
    this.employees=employees;
}

    addEmployee(employee:Employee):void{
        this.employees.push(employee);
    }

    removeEmployee(id:number):void{
        this.employees = this.employees.filter(employee => employee.id !== id);
        console.log(this.employees);
    }
    getTotalSalary():number{
      return this.employees.reduce((sum,employee)=>sum+employee.salary,0);  
    }

    listEmployees():void{
        for(let employee of this.employees){
            console.log(employee.name);
        }
    }
}
const d1=new Department("IT",[{id:1,name:"abc",position:"Developer",salary:60000},
                            {id:2,name:"xyz",position:"Designer",salary:50000},
                            {id:3,name:"pqr",position:"tester",salary:40000}]);
console.log(d1);
console.log(d1.getTotalSalary());
d1.removeEmployee(1);
d1.listEmployees();



//Creating Utlity function
function updateSalary<T extends Employee>(employee:T,newSalary:number):T{
    return {...employee,salary:newSalary};
}

const newSal=updateSalary({id:2,name:"xyz",position:"Designer",salary:50000},9000);
console.log(newSal);