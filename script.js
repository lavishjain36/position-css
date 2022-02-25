// class Rectangle{
// constructor(length,breadth){
// this.length=length;
// this.breadth=breadth;

// }

// //logic to get area of rectangle
// getArea(){
//     return this.length*this.breadth;

// }
// }



// class Square extends Rectangle{
// constructor(length){
//     super(length,length);

// }

// getPerimeter(){
// return 2*this.length+this.breadth;
// }

// }


// //create an object for rectangle
// let rectobj=new Rectangle(10,20);
// console.log(rectobj.getArea());


// //create an object for square 
// let squareobj=new Square(10);

// console.log(squareobj.getArea());



// // DRY=>Dont Repeat Yourself


// Polymorphism=>
// poly+Morphism=>
// Inheritance=>
// Same method which can be used on different objects
// drive()

// class Car{
// drive(){
//  console.log("This is slow Running Method")
// }
// }

// class MotorCylce extends Car{
// drive(){
//     console.log("This is Fast Running Method")
// }
// }


// //create an object for car
// let car1=new Car(); 
// // car1.drive();

// //create an object for MotorBike 
// let motorbike=new MotorCylce();
// motorbike.drive();


//Encapsulation=>
// ATM+Netbanking=>
// Brother,Sister,Father,Wife
// Hiding the data from the user
// The Wrapping or binding the Data into a single unit 
// getter=>to get or read the values from the object
// setter=>to set or write the values 

class Car{
    setAttribute(model,year){
        this.model=model;
        this.year=year;
    }

   getAttribute(model,year){
         return this.model+" "+this.year;
    }
}


let car1=new Car();
car1.setAttribute("Nexon",2018);
console.log(car1.getAttribute());

