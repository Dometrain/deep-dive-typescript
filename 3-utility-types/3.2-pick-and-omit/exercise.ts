// Exercise: Pick and Omit utility types

// Question 1:
// Given the following interface, use the Pick utility type to create a
// new type that only includes the 'title' and 'completed' properties.

interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

// Question 2:
// Given the following interface, use the Omit utility type to create a new
// type that excludes the 'id' and 'description' properties.

interface Task {
  id: number;
  name: string;
  description: string;
  dueDate: Date;
}
