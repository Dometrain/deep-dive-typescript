// Type-safe URLs via a template literal type

type Page = "home" | "about" | "contact";
type PageUrl = `https://example.com/${Page}`;

// Autocomplete!
// Didn't have to copy paste the entire URL for each page
const href: PageUrl = "https://example.com/about";

function redirect(url: PageUrl) {
  // Redirect logic here
  console.log(`Redirecting to ${url}`);
}

// Example usage
redirect("https://example.com/contact");
