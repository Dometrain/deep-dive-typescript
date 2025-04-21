// Form validation with Zod
import { z } from "zod";

// Imagine we have a form with a username and password
const formSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters long"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export function setupForm(form: HTMLFormElement) {
  const usernameInput = form.querySelector<HTMLInputElement>("#username")!;
  const passwordInput = form.querySelector<HTMLInputElement>("#password")!;
  const usernameError = form.querySelector<HTMLSpanElement>("#username-error")!;
  const passwordError = form.querySelector<HTMLSpanElement>("#password-error")!;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Clear previous error messages
    usernameError.textContent = "";
    passwordError.textContent = "";

    // Validate the form data
    const result = formSchema.safeParse({
      username: usernameInput.value,
      password: passwordInput.value,
    });

    if (!result.success) {
      // Show error messages
      result.error.issues.forEach((error) => {
        if (error.path[0] === "username") {
          usernameError.textContent = error.message;
        } else if (error.path[0] === "password") {
          passwordError.textContent = error.message;
        }
      });
    } else {
      console.log("Form submitted successfully:", result.data);
    }
  });
}
