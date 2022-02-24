class Person{
    static CompanyName="Amazon";//static Member Variable
    constructor(name,age,address){
        //set the values for 3 properties
        this.name=name;
        this.age=age;
        this.address=address;
    }
//instance method
    getData(){
        let personData=`
        Name:${this.name}
        Age:${this.age}
        Address:${this.address}
        `
        console.log(personData);
    }
   

//static method
    static getCompanyName(){
        console.log(Person.CompanyName);//Amazon
    }



}

class Employee extends Person{
    static companyNew="google";
    constructor(name,age,address,designation,salary){
        super(name,age,address);
        this.designation=designation;
        this.salary=salary;
    }

//instance method
    getData(){
        let employeeData=`
        Name:${this.name}   
        Age:${this.age}
        Address:${this.address}
        Designation:${this.designation}
        Salary:${this.salary}
        `
        console.log(employeeData);
    }
//static method
    static getCompanyName(){
        console.log(Employee.companyNew);//google
    }

}




//create an Object of Employee
let employee1=new Employee("jack",45,"Hyderbad","Manager",5000000);

employee1.getData();//access of instance method
Employee.getCompanyName();//access of static method


//create an Object of Person
let person1=new Person("Joe",35,"Hyderbad");
person1.getData();//access of instance method
Person.getCompanyName();//access of static method