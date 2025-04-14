import { useState } from "react";

// Can omit the type arguments any time the compiler can infer them. This is called type argument inference.
const [counter, setCounter] = useState(0); // counter is inferred to be a number
const [userName, setUsername] = useState(""); // name is inferred to be a string
const [users, setUsers] = useState(["Alice", "Bob"]); // users is inferred to be a string[]

// Must specify type arguments when the compiler can't infer them.
const [selectedUser, setSelectedUser] = useState<string | null>(); // can't infer since we passed no initial value
const [firstName, setFirstName] = useState<string | null>(null); // can't infer since we passed null
const [tasks, setTasks] = useState<string[]>([]); // can't infer since we passed an empty array
const [errorMap, setErrorMap] = useState<Record<string, string>>({}); // can't infer since we passed an empty object
const [status, setStatus] = useState<"idle" | "loading" | "error">("idle"); // can't infer a string literal represents a union type

type Employee = { name: string; title?: string };
type User = { name: string; role?: string };
const [state, setState] = useState<User>({ name: "Alice" }); // can't infer since there are two types with a compatible structure
