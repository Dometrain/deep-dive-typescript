// Parameters - Extracts the types of the parameters of a function type
type LogFunction = (message: string, color: "black" | "red") => void;
type LogFunctionParams = Parameters<LogFunction>;

// Can use on function declaration via `typeof`
function greet(name: string, age: number): void {
  console.log(`Hello ${name}, you are ${age} years old.`);
}

type GreetParameters = Parameters<typeof greet>;
