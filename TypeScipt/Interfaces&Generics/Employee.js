var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Department = /** @class */ (function () {
    function Department(deptName, employees) {
        this.deptName = deptName;
        this.employees = employees;
    }
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.removeEmployee = function (id) {
        this.employees = this.employees.filter(function (employee) { return employee.id !== id; });
        console.log(this.employees);
    };
    Department.prototype.getTotalSalary = function () {
        return this.employees.reduce(function (sum, employee) { return sum + employee.salary; }, 0);
    };
    Department.prototype.listEmployees = function () {
        for (var _i = 0, _a = this.employees; _i < _a.length; _i++) {
            var employee = _a[_i];
            console.log(employee.name);
        }
    };
    return Department;
}());
var d1 = new Department("IT", [{ id: 1, name: "abc", position: "Developer", salary: 60000 },
    { id: 2, name: "xyz", position: "Designer", salary: 50000 },
    { id: 3, name: "pqr", position: "tester", salary: 40000 }]);
console.log(d1);
console.log(d1.getTotalSalary());
d1.removeEmployee(1);
d1.listEmployees();
//Creating Utlity function
function updateSalary(employee, newSalary) {
    return __assign(__assign({}, employee), { salary: newSalary });
}
var newSal = updateSalary({ id: 2, name: "xyz", position: "Designer", salary: 50000 }, 9000);
console.log(newSal);
