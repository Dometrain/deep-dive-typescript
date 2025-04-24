// Exercise 1: Create a `filterAdmins` function that accepts an array of objects
// with a role property of type string, and returns an array of objects that have a `role` property
// of `admin`. Use the const modifier in the type argument so that the function returns an array
// of readonly objects.

// const admins = filterAdmins([
//   {
//     name: "Cory",
//     role: "admin",
//   },
//   {
//     name: "Anne",
//     role: "user",
//   },
// ]);

// const admins2 = filterAdmins([
//   {
//     id: 1,
//     role: "admin",
//   },
//   {
//     id: 2,
//     role: "user",
//   },
// ]);

// console.log(admins); // [{ readonly name: "Cory", readonly role: "admin" }]
// console.log(admins2); // [{ readonly id: 1, readonly role: "admin" }]
