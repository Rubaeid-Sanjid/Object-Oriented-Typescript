{
    class Shape{
        getArea() : number{
            return 0;
        }
    }

    class Circle extends Shape{
        radius : number;
        constructor(radius : number){
            super();
            this.radius = radius;
        }
        getArea(): number {
            return Math.PI * this.radius * this.radius;
        }
    }

    class Rectangle extends Shape{
        height : number;
        width : number;
        constructor(height : number, width : number){
            super();
            this.height = height;
            this.width = width;
        }
        getArea(): number {
            return this.height * this.width;
        }
    }

    const getShapeArea = (shape : Shape)=>{
        console.log(shape.getArea());
    }

    const shape1 = new Shape();
    const shape2 = new Circle(5);
    const shape3 = new Rectangle(5, 5);

    getShapeArea(shape1);
    getShapeArea(shape2);
    getShapeArea(shape3);
}