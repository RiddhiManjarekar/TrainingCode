var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(name, id, salary) {
        this.name = name;
        this.id = id;
        this.salary = salary;
    }
    Object.defineProperty(Employee.prototype, "findSalary", {
        get: function () {
            return this.salary;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "calcBonus", {
        get: function () {
            return this.findSalary * 0.01;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Manager.prototype, "calcBonus", {
        get: function () {
            return this.findSalary * 0.3;
        },
        enumerable: false,
        configurable: true
    });
    return Manager;
}(Employee));
var Engineer = /** @class */ (function (_super) {
    __extends(Engineer, _super);
    function Engineer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Engineer.prototype, "calcBonus", {
        get: function () {
            return this.findSalary * 0.2;
        },
        enumerable: false,
        configurable: true
    });
    return Engineer;
}(Employee));
var Intern = /** @class */ (function (_super) {
    __extends(Intern, _super);
    function Intern() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Intern.prototype, "calcBonus", {
        get: function () {
            return this.findSalary * 0.02;
        },
        enumerable: false,
        configurable: true
    });
    return Intern;
}(Employee));
var emp1 = new Manager("XYZ", 111, 60000);
console.log(emp1.calcBonus);
