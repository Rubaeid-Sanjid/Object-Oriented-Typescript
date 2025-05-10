{
    // class and object
    class Animal {
        // public name : string;
        // public species : string;
        // sound : string;

        // constructor(name : string, species : string, sound : string){
        //     this.name = name;
        //     this.species = species;
        //     this.sound =sound;
        // }

        // Parameter properties by default makes "public name : string" and "this.name = name"
        constructor(public name : string, public species : string, public sound : string){ }

        makesound(){
            console.log(`This ${this.name} says ${this.sound}`);
        }
    }

    const cat = new Animal("Persian", "cat", "meaw meaw");
    cat.makesound();
}