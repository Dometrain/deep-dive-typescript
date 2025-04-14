const element = document.getElementById("my-element");

// TypeScript can't "see" the HTML, so it says the element could be null
// Use non-null assertion to tell TypeScript that it won't be null (or can use above)
element!.innerHTML = "Hello, World!";
