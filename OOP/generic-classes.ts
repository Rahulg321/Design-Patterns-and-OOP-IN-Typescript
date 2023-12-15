class Box<Type> {
  contents: Type;
  constructor(value: Type) {
    this.contents = value;
  }
}

const stringBox = new Box<string>('the magic awaits you');

const arrayBox = new Box<string[]>(['rahul', 'Juliaane', 'Jacqueline']);

// console.log(arrayBox.contents);

class MyTHISClass {
  name = 'MyClass';

  travelCountry = 'Norway';

  getName() {
    return this.name;
  }

  getCountry = () => {
    return this.travelCountry;
  };
}

class MySecondTHISClass extends MyTHISClass {
  constructor() {
    super();
    super.getName();
    // super.getCountry(); => we cant access an arrow function using a super call
  }
}
const c = new MyTHISClass();

console.log(c.getName());

const obj = {
  name: 'obj',
  getName: c.getName,
};

// Prints "obj", not "MyClass"
// since it was called inside obj function 'this ' refers to the obj
console.log(obj.getName());
