class Travel {
  //   static => accessible on the class itself rather than a particular instance

  static mainGoal = 'to travel the world and make money while doing so';

  static getGoal() {
    console.log(this.mainGoal);
    console.log(Travel.mainGoal);
    return;
  }
}

console.log(Travel.getGoal());

class MyClass {
  private static x = 0;
}
console.log(MyClass.x);
