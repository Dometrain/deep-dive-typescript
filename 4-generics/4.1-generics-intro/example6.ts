// Many libraries use generics too.
// In React, often must pass type args to useState, useReducer, useContext, etc.

// Simplified version of useState here for example.
// Returns a tuple of two elements:
// 1. The state value
// 2. A function to update state
function useState<T>(initialValue: T): [T, (value: T) => void] {
  let state = initialValue;
  const setState = (value: T) => {
    state = value;
  };
  return [state, setState];
}

// Can omit the type arguments any time the compiler can infer them. This is called type argument inference.
const [counter, setCounter] = useState(0); // counter is inferred to be a number
const [userName, setUsername] = useState(""); // name is inferred to be a string
const [users, setUsers] = useState(["Alice", "Bob"]); // users is inferred to be a string[]

// Must specify type arguments when the compiler can't infer them.
const [firstName, setFirstName] = useState<string | null>(null); // can't infer since we passed null
const [tasks, setTasks] = useState<string[]>([]); // can't infer since we passed an empty array
const [errorMap, setErrorMap] = useState<Record<string, string>>({}); // can't infer since we passed an empty object
const [status, setStatus] = useState<"idle" | "loading" | "error">("error"); // can't infer a string literal represents a union type

// Must specify type args when initial value is ambiguous
// Here, there are two types with a compatible structure
// Also, even without the two types, the compiler can't infer the object's type
type Employee = { name: string; title?: string };
type User = { name: string; role?: string };
const [state, setState] = useState<User>({ name: "Alice" }); // can't infer since there are two types with a compatible structure
