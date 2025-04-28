// Exercise: Non-Null Assertions in TypeScript

// Question 1:
// This code retrieves an HTML element with the id `example`.
// You know the element with the id exists.
// Use a non-null assertion to narrow the type of `element`.
// and eliminate the need for the if statement check.

const element = document.getElementById("example");
if (element) console.log(element.innerHTML);

// Question 2:
// The object `user` has an optional `profile`.
// To eliminate the need for the ts-expect-error comment,
// use a non-null assertion to assert the profile exists when calling `getProfileName`.

type User = {
  profile?: Profile;
};

type Profile = {
  name: string;
  age: number;
};

const user: User = {
  profile: {
    name: "Alice",
    age: 30,
  },
};

// @ts-expect-error: profile might be undefined
getProfileName(user.profile);

function getProfileName(profile: Profile): string {
  return profile.name;
}
