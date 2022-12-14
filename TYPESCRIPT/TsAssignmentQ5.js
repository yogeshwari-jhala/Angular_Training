var Cone = /** @class */ (function () {
    function Cone(radius, slantHeight) {
        this.shapeName = "Cone";
        this.pi = 3.14;
        this.r = radius;
        this.l = slantHeight;
    }
    Cone.prototype.printName = function () {
        console.log(this.shapeName);
    };
    Cone.prototype.printArea = function () {
        this.area = this.pi * this.r * (this.l + this.r);
        console.log("Area of Cone is " + this.area);
    };
    return Cone;
}());
var Sphere = /** @class */ (function () {
    function Sphere(radius) {
        this.shapeName = "Sphere";
        this.pi = 3.14;
        this.r = radius;
    }
    Sphere.prototype.printName = function () {
        console.log(this.shapeName);
    };
    Sphere.prototype.printArea = function () {
        this.area = 4 * this.pi * this.r * this.r;
        console.log("Area of Sphere is " + this.area);
    };
    return Sphere;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(length, breadth) {
        this.shapeName = "Rectangle";
        this.l = length;
        this.b = breadth;
    }
    Rectangle.prototype.printName = function () {
        console.log(this.shapeName);
    };
    Rectangle.prototype.printArea = function () {
        this.area = this.l * this.b;
        console.log("Area of Rectangle is " + this.area);
    };
    return Rectangle;
}());
var area1 = new Cone(2, 3);
area1.printName();
area1.printArea();
var area2 = new Sphere(12);
area2.printName();
area2.printArea();
var area3 = new Rectangle(3, 4);
area3.printName();
area3.printArea();
