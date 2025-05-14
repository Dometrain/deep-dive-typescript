// Real world symbol example

const uniqueId = Symbol("uniqueId");

class User {
  private data: { [key: symbol]: any } = {};

  setProperty(key: symbol, value: any) {
    this.data[key] = value;
  }

  getProperty(key: symbol): any {
    return this.data[key];
  }
}

const user = new User();
user.setProperty(uniqueId, 12345);

console.log(user.getProperty(uniqueId)); // Output: 12345
