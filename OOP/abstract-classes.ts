abstract class BluePrint {
  abstract getName(): string;

  logSomething() {
    console.log('this is ', this.getName());
  }
}

class Reflex extends BluePrint {
  getName() {
    return 'Juliaane Hough';
  }
}

const e = new Reflex();

class Person {
  constructor(public name: string, public age: number) {}
}

class Employee {
  constructor(
    public name: string,
    public age: number,
    public address: string
  ) {}
}

// OK
const p1: Person = new Employee('ekta sharma', 39, 'Omaxe plaza');
