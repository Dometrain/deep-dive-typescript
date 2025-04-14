import { setupCounter } from "./counter.js";
import { setupForm } from "./form.js";
import "./url.js";
import "./api.js";
import "./environment.js";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>TypeScript + Zod</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <form id="form">
      <label for="username">Username</label>
      <input type="text" id="username" name="username" />
      <span id="username-error" class="error"></span>
      <label for="password">Password</label>
      <input type="password" id="password" name="password" />
      <span id="password-error" class="error"></span>
      <button type="submit">Submit</button>
    </form>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
setupForm(document.querySelector<HTMLFormElement>("#form")!);
