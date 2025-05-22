// In JS, you can throw about anything

// Typical:
throw new Error("oops");

// But also allowed:
throw "error";
throw 1;
throw { uhOh: "it failed" };
throw new Promise(() => {});
throw undefined;
throw null;
