var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(wheels, weight, horsePower) {
        this.location = 0;
    }
    Vehicle.prototype.getLocation = function () {
        return this.location;
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(wheels, weight, horsePower) {
        var _this = _super.call(this, wheels, weight, horsePower) || this;
        _this.wheels = wheels;
        _this.weight = weight;
        _this.horsePower = horsePower;
        return _this;
    }
    Car.prototype.drive = function (KM) {
        this.location += KM * this.wheels;
    };
    return Car;
}(Vehicle));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(wheels, weight, horsePower) {
        var _this = _super.call(this, wheels, weight, horsePower) || this;
        _this.wheels = wheels;
        _this.weight = weight;
        _this.horsePower = horsePower;
        return _this;
    }
    Truck.prototype.drive = function (KM) {
        this.location += KM * this.wheels;
    };
    return Truck;
}(Vehicle));
var vehicles = [
    new Car(4, 1000, 5),
    new Truck(8, 5000, 20)
];
for (var _i = 0, vehicles_1 = vehicles; _i < vehicles_1.length; _i++) {
    var item = vehicles_1[_i];
    item.drive(1);
    console.log(item.getLocation());
}
