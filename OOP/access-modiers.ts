class Parent {
  protected m = 10;
}
class Child extends Parent {
  // No modifier, so default is 'public'
  m = 15;
}
const d = new Child();
console.log(d.m); // OK

class MySafe {
  private secretKey = 12345;
}

const s = new MySafe();
console.log(s['secretKey']);
