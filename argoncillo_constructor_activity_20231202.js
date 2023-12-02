//TEST CODE
class Person{
    constructor(givenName, surName, age){
        this.givenName = givenName;
        this.surName = surName;
        this.age = age;
    }
}
let newPerson = new Person("Jomel","Argoncillo",25);
let fullName = (newPerson.givenName + " " + newPerson.surName);
console.log(fullName +", " + newPerson.age);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//ACTIVITY ONE

class PersonData{
    constructor(name, age, country){
        this.name = name;
        this.age = age;
        this.country = country;
    }
}
let person1 = new PersonData("Brenda Bulay-og", 39, "Philippines");
let person2 = new PersonData("Chandler Bolocboloc", 34, "United Kingdom");
console.log("1. " + person1.name +"\; " + person1.age + " years old, " + person1.country);
console.log("2. " + person2.name +"\; " + person2.age + " years old, " + person2.country);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//ACTIVITY TWO

class Rectangle{
  constructor(length, width) {
    this.length = length;
    this.width = width;
    this.calcArea = function() {
      return this.length * this.width;
    }
    this.calcPerimeter = function() {
      return (this.length + this.width) * 2;
    }
  }
}
let rectangleParam = new Rectangle(4,6);
let perimeter = rectangleParam.calcPerimeter();
console.log(perimeter);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//ACTIVITY THREE

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
    console.log("Employee Name: ${name}");
    console.log("Monthly Salary: $${salary}");
  }

 calculateAnnualSalary() {
    return this.salary * 12;
  }
}


