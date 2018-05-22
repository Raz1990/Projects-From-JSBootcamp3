interface IVehicle {
    drive: (KM: number) => void;
}

abstract class Vehicle implements IVehicle {
    constructor(wheels: number, weight: number, horsePower: number) {

    }

    protected location: number = 0;

    getLocation(){
        return this.location;
    }

    abstract drive(KM: number);

}

class Car extends Vehicle {
    constructor(private wheels: number,private weight: number,private horsePower: number){
        super(wheels, weight, horsePower);
    }

    drive(KM: number){
        this.location+= KM * this.wheels;
    }
}

class Truck extends Vehicle {
    constructor(private wheels: number,private weight: number,private horsePower: number){
        super(wheels, weight, horsePower);
    }

    drive(KM: number){
        this.location+= KM * this.wheels;
    }
}

const vehicles : Vehicle[] = [
    new Car(4,1000,5),
    new Truck(8,5000,20)
];

for (let item of vehicles){
    item.drive(1);
    console.log(item.getLocation());
}