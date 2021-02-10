class SomeClass {
  a = 1;
  printA() {
    console.log(this.a);
  }
  run() {
    this.printA();
  }
}

const some = new SomeClass();

const print = ::some.run;

print()

export default SomeClass;
