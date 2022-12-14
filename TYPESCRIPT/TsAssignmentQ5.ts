interface Shape{
   shapeName:string,
   printName();
}


class Cone implements Shape {
   shapeName ="Cone";
   pi:number= 3.14;
   r:number;
   l:number;
   area: number;
   constructor(radius:number,slantHeight:number)
   {
    this.r = radius;
    this.l= slantHeight;
   }
   printName(){
   console.log(this.shapeName);
   }
   printArea(){
    this.area = this.pi * this.r *(this.l+this.r);
    console.log("Area of Cone is "+this.area);
   } 
}
class Sphere implements Shape{
    shapeName ="Sphere";
    pi:number = 3.14;
    r:number;
    area:number;
    constructor(radius:number)
   {
    this.r = radius;
   }
    printName(){
        console.log(this.shapeName);
   }
   printArea(){
    this.area = 4* this.pi * this.r *this.r;
    console.log("Area of Sphere is "+this.area);
   } 
}
    
class Rectangle implements Shape{
    shapeName ="Rectangle";
    l:number;
    b:number;
    area: number;
    constructor(length:number,breadth:number)
   {
    this.l = length;
    this.b= breadth;
   }
   printName(){
    console.log(this.shapeName);
   }
   printArea(){
    this.area = this.l * this.b ;
    console.log("Area of Rectangle is "+ this.area);
   } 
   
}

let area1: Cone = new Cone(2,3);
area1.printName();
area1.printArea();

let area2: Sphere = new Sphere(12);
area2.printName();
area2.printArea();

let area3:Rectangle = new Rectangle(3,4);
area3.printName();
area3.printArea();

