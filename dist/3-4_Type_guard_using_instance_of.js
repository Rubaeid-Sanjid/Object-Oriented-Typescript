"use strict";
{
    class Animal {
        constructor(name, species) {
            this.name = name;
            this.species = species;
        }
        makeSound() {
            console.log(`${this.name} is making sound`);
        }
    }
    class Dog extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        makeBark() {
            console.log("Barking...");
        }
    }
    class Cat extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        makeMew() {
            console.log("Mewing...");
        }
    }
    // More smart way to handle instanceof
    const isDog = (animal) => {
        return animal instanceof Dog;
    };
    const isCat = (animal) => {
        return animal instanceof Cat;
    };
    const getAnimal = (animal) => {
        if (animal instanceof Dog) { // type guard directly using instanceof
            animal.makeBark();
        }
        else if (isCat(animal)) { // type guard using a separate function
            animal.makeMew();
        }
        else {
            animal.makeSound();
        }
    };
    const dog = new Dog("Germen Shepherd", "dog");
    const cat = new Cat("Persian", "cat");
    getAnimal(dog);
    getAnimal(cat);
}
