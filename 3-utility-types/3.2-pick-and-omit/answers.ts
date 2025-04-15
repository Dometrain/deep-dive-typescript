// Exercise: Testing knowledge of TypeScript's Pick and Omit utility types

// Question 1:
// Given the following interface, use the Pick utility type to create a new
// type that only includes the 'title' and 'completed' properties.

interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

type TodoTitleAndCompleted = Pick<Todo, "title" | "completed">;

// Question 2:
// Given the following interface, use the Omit utility type to create a new
// type that excludes the 'id' and 'description' properties.

interface Task {
  id: number;
  name: string;
  description: string;
  dueDate: Date;
}

type TaskWithoutIdAndDescription = Omit<Task, "id" | "description">;
