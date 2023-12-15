class ThisBox {
  contents: string = '';
  set(value: string) {
    this.contents = value;
    // returns the instance of the class
    return this;
  }
}
class ClearableBox extends ThisBox {
  clear() {
    this.contents = '';
  }
}

const a = new ClearableBox();
const b = a.set('hello');
console.log(b);
