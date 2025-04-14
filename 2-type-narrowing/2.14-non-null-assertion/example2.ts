// Oops! Type assertion needlessly widens the type from `HTMLAnchorElement` to `HTMLElement`
const element = document.querySelector("a") as HTMLElement;
element.innerHTML = "test";

// Can't make this mistake with non-null assertion
const element2 = document.querySelector("a")!;
