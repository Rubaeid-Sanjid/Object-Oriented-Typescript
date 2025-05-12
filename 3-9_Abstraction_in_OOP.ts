{
    // Abstraction --> 1. Using interface
    //                 2. Using abstract

    // 1. Using interface

    // Idea
    interface Car1 {
        startEngine() : void;
        stopEngine() : void;
        move() : void;
    }
    // Implementation
    class HondaCar implements Car1{
        startEngine(): void {
            console.log("Honda engine is starting.");
        }
        stopEngine(): void {
            console.log("Honda engine has stopped.");
        }
        move(): void {
            console.log("Honda car is moving.");
        }
    }
    const civic = new HondaCar();
    civic.startEngine();

    // 2. Using abstract

    // Idea
    abstract class Car2{
        abstract startEngine() : void;
        abstract stopEngine() : void;
        abstract move() : void;
    }

    // Implementation
    class Toyota extends Car2{
        startEngine(): void {
            console.log("Toyota engine starting");
        }
        stopEngine(): void {
            console.log("Toyota engine has stopped.");
        }
        move(): void {
            console.log("Toyota car is moving.");
        }
    }
    const camry = new Toyota();
    camry.move();
}