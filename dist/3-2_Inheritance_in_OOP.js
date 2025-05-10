"use strict";
{
    class Person {
        constructor(name, age, phone) {
            this.name = name;
            this.age = age;
            this.phone = phone;
        }
        eatsDaily(food) {
            console.log(`${this.name} eats ${food} regularly.`);
        }
    }
    class Student extends Person {
        constructor(name, age, phone) {
            super(name, age, phone);
        }
    }
    class Teacher extends Person {
        constructor(name, age, phone, subjectName) {
            super(name, age, phone);
            this.subjectName = subjectName;
        }
        classHour(time) {
            console.log(`${this.name} takes ${time} hours class.`);
        }
    }
    const teacher1 = new Teacher("Mr. Carlo", 35, "09182749", "OOP");
    console.log(teacher1.name);
    teacher1.classHour(5);
}
