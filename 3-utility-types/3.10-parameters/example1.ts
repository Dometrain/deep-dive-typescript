function greet(name: string, age: number): void {
  console.log(`Hello ${name}, you are ${age} years old.`);
}

type GreetParameters = Parameters<typeof greet>;
