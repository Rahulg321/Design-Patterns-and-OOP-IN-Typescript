class Point {
  readonly name: string = 'hello world';
  x: number;
  y: number;

  // othername may or maynot exist
  constructor(otherName?: string) {
    this.x = 12;
    this.y = 122;

    if (otherName !== undefined) {
      this.name = otherName;
    }
  }

  // err() {
  //   this.name = 'something else';
  // }
}

const pt = new Point();

pt.x = 12;

// getters and setters

class getterSetter {
  private address = 'rupa mistri street';
  private _bodyCount = 12;
  private _length = 0;

  private setDeliveryOptions() {
    console.log(this.address);
  }

  logDeliveryOptions() {
    console.log(this.address);
  }

  // we define a getter and setter for a private variable so that we can perform some additional logic before exposing them to outside public
  get length() {
    return this._length;
  }

  set length(value) {
    this._length = value;
  }
}

const instance = new getterSetter();

instance.length = 12;

console.log(instance.length);

// private cannot access outside of the class
// console.log(instance._bodyCount);
// console.log(instance.logDeliveryOptions());

// index singatures
// allows for dynamic number of properties in a class

class DynamicProp {
  private phoneNumber = '122312312';
  protected codeAuthor = 'rahul';

  [s: string]: any | ((s: string) => boolean) | ((s: number) => boolean);
  // add any prop into the class
  // [key: string]: any;
}

const dynamic = new DynamicProp();

dynamic.checkValue = checkEven;

function checkEven(num: number) {
  return num % 2 === 0 ? true : false;
}

//class heritage implementing an interface in ts
interface Pingable {
  ping(): void;
  pong?(): boolean;
}

class Sonar implements Pingable {
  ping() {
    console.log('pinigng something');
  }
}

class Solar implements Pingable {
  ping() {
    console.log('pinigng something');
  }

  pong() {
    console.log('ponging something');
    return false;
  }
}

// extending a class using inheritance
class Base {
  k = 4;

  private _friends = ['rishi', 'maniket', 'shivam'];
  protected sportName = 'badminton';

  greet() {
    console.log('hi there');
  }
}

class Derived extends Base {
  name: string;
  constructor() {
    super();
    this.name = 'rahul';
  }

  logSomething() {
    console.log(this.sportName);
  }

  // when overriding params should be optional
  greet(s?: string) {
    if (s) {
      console.log('hi there', s);
    } else {
      super.greet();
    }
  }
}
