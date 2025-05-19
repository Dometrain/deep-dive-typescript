const ul = document.getElementsByTagName("ul")[0]; // Get the first <ul> element

console.log(ul.children); // HTMLCollection(2) [li, li] (only <li> elements)

console.log(ul.childNodes); // NodeList(5) (newline, text, <li>, text, <li>)

// Can also use querySelector or querySelectorAll to get elements, but return different types
const first = document.querySelector("li"); // HTMLLIElement | null
const all = document.querySelectorAll("li"); // NodeListOf<HTMLLIElement>, so can iterate over it

all.forEach((li) => {
  console.log(li.innerHTML); // <li>Item 1</li>, <li>Item 2</li>
});
