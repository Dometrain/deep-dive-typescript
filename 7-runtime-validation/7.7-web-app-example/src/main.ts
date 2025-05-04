import { setupCounter } from "./local-storage.js";
import { setupForm } from "./form.js";
import { setupProducts } from "./api.js";
import { setupProduct } from "./url.js";
import { setupEnvironment } from "./environment.js";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>TypeScript + Zod</h1>

    <section>
      <h2>Demo 1: URL Validation</h2>
      <div id="product"></div>
      <details>
        <summary>Instructions</summary>
        Change the URL to include a product-id param.
        For example: <code>?product-id=1</code>
        If the product-id is valid, it displays.
        If the product-id is malformed, an error message displays.
      </details>
    </section>

    <section>
      <h2>Demo 2: Form Validation</h2>
      <details>
        <summary>Instructions</summary>
        Submit the empty form to see the Zod validation errors.
      </details>

      <form id="form">
        <label for="username">Username</label>
        <input type="text" id="username" name="username" />
        <span id="username-error" class="error"></span>
        <label for="password">Password</label>
        <input type="password" id="password" name="password" />
        <span id="password-error" class="error"></span>
        <button type="submit">Submit</button>
      </form>
    </section>
    
    <section>
      <h2>Demo 3: Local Storage</h2>
      <details>
        <summary>Instructions</summary>
        Click the button to increment the counter.
        Then refresh the browser.
        The value stays between renders because is stored in local storage.
      </details>
      <button id="counter" type="button"></button>
    </section>

    <section>
      <h2>Demo 4: API Validation</h2>
      <div id="products"></div>
      <details>
        <summary>Instructions</summary>
        This displays the results of an API response that's validated and strongly typed via Zod.
        Corrupt the data in <code>db.json</code> to see the Zod validation fail.
      </details>
    </section>

    <section>
      <h2>Demo 5: Environment Variables</h2>
      <div id="environment"></div>
      <details>
        <summary>Instructions</summary>
        The environment variables are loaded from the .env file, and parsed by Zod.
        If expected environment variables are not set, Zod throws an error, which is logged to the console.
        Comment out an environment variable in the .env file to see an error.
      </details>
    </section>
  </div>
`;

setupProducts(document.querySelector<HTMLDivElement>("#products")!);
setupProduct(document.querySelector<HTMLDivElement>("#product")!);
setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
setupForm(document.querySelector<HTMLFormElement>("#form")!);
setupEnvironment(document.querySelector<HTMLDivElement>("#environment")!);
