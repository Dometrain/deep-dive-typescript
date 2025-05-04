import * as z from "zod";

// Exercise: Testing Your Knowledge of Zod

// Question 1: Create a Zod schema for an employee object with the following properties:
// - id: a string
// - name: a string
// - age: a number that must be between 0 and 150
// - email: a string that must be a valid email address
// - isAdmin: a boolean
// Then, use Zod's infer to derive an `Employee` type from the schema.

// Question 2: Create a Zod schema for an array of employees using the employee schema defined above.

// Question 3: Create a Zod schema representing a company with the following properties:
// - companyId: a string
// - companyName: a string
// - employees: an array of employees using the employeesSchema defined in question 2
// Then, use Zod's infer to derive a `Company` type from the schema.
