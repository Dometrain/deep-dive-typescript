// Type argument inference
// Many JavaScript features use generics in TypeScript
// Example: Set - a collection of unique values

// Can omit the type argument when time the compiler can infer them. This is called type argument inference.
const ages = new Set([1, 2, 3]); // Set<number>
const names = new Set(["Cory", "Sam"]); // Set<string>

// Must specify type arguments when the compiler can't infer them.
const prices = new Set<number>(); // can't infer since we initialized empty
const carModels = new Set<string>([]); // can't infer since we initialized empty array
const materials = new Set<"steel" | "aluminum" | "plastic">(["plastic"]); // can't infer it's a union

// Must specify type args when initial value is ambiguous
// Here, there are two types with a compatible structure
// Also, even without the two types, the compiler can't infer the object's type
type Employee = { name: string; title?: string };
type User = { name: string; role?: string };
const employees = new Set<Employee>([{ name: "Alice" }]); // can't infer since 2 compatible types
