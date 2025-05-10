{
    class Person{
        name : string;
        age : number;
        phone : string;

        constructor(name : string, age : number, phone : string){
            this.name = name;
            this.age = age;
            this.phone = phone;
        }

        eatsDaily(food : string){
            console.log(`${this.name} eats ${food} regularly.`);
        }
    }

    class Student extends Person{
        constructor(name : string, age : number, phone : string){
            super(name, age, phone);
        }
    }

    class Teacher extends Person{
        subjectName : string;

        constructor(name : string, age : number, phone : string, subjectName : string){
            super(name, age, phone);
            this.subjectName = subjectName;
        }

        classHour(time : number){
            console.log(`${this.name} takes ${time} hours class.`);
        }
    }

    const teacher1 = new Teacher("Mr. Carlo", 35, "09182749", "OOP");
    console.log(teacher1.name);
    teacher1.classHour(5);
}