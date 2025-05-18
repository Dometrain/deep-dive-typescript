type Contact =
  | {
      subject: "return";
      billNumber?: never;
      purchaseNumber: string;
      message: string;
    }
  | {
      subject: "billing";
      billNumber: string;
      purchaseNumber?: never;
      message: string;
    }
  | {
      subject: "";
      billNumber?: never;
      purchaseNumber?: never;
      message: string;
    };

const data: Contact = {
  subject: "billing",
  billNumber: "123",
  message: "I want to return this item",
};

export function renderContact() {
  const app = document.getElementById("app") as HTMLElement;
  app.innerHTML = `
      <h1>Contact</h1>
      <form action="POST">
        <div>
          <label for="subject">Subject</label><br/>
          <select name="subject">
            <option value=""></option>
            <option value="return">Return</option>
            <option value="billing">Billing</option>
          </select>
        </div>
        
        <div id="billNumberWrapper" class="hidden">
          <label for="billNumber">Bill number</label><br/>
          <input type="text" name="billNumber">
        </div>
        
        <div id="purchaseNumberWrapper" class="hidden">
          <label for="purchaseNumber">Purchase number</label><br/>
          <input type="text" name="purchaseNumber">
        </div>
        
        <div>
          <label for="message">Message</label><br/>
          <textarea name="message"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>`;

  const subjectSelect = document.querySelector<HTMLSelectElement>(
    "select[name=subject]"
  );

  if (!subjectSelect) {
    throw new Error("Subject select not found");
  }

  subjectSelect.addEventListener("change", () => {
    const billNumberWrapper = document.getElementById(
      "billNumberWrapper"
    ) as HTMLElement;
    const purchaseNumberWrapper = document.getElementById(
      "purchaseNumberWrapper"
    ) as HTMLElement;

    if (subjectSelect.value === "billing") {
      billNumberWrapper.classList.remove("hidden");
      purchaseNumberWrapper.classList.add("hidden");
    } else {
      billNumberWrapper.classList.add("hidden");
      purchaseNumberWrapper.classList.remove("hidden");
    }
  });
}
