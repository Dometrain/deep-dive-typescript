const ul = document.getElementsByTagName("ul")[0]; // Get the first <ul> element

console.log(ul.children); // HTMLCollection(2) [li, li] (only <li> elements)

console.log(ul.childNodes); // NodeList(5) (newline, text, <li>, text, <li>)

// Can also use querySelector or querySelectorAll to get elements, but return different types
const first = document.querySelector("li"); // one HTMLLIElement
const all = document.querySelectorAll("li"); // NodeListOf<HTMLLIElement>, so can iterate over it
