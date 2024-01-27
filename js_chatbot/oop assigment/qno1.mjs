class Person {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }
  display_details() {
    //console.log(`Name: ${this.name}`);
    //console.log(`age: ${this.age}`);
    //console.log(`country: ${this.country}`);
  }
}

const person1 = new Person("Adnan", 22, "pakistan");
const person2 = new Person("Fahad", 5, "pakistan");
