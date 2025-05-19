function validateMessage(message: string) {
  // debugger;
  if (message.length > 1000) {
    return "Your message is over 1000 characters.";
  } else if (message.length === 0) {
    return "Your message is empty.";
  } else {
    return "Your message is valid.";
  }
}

console.log(validateMessage("This is a test message.")); // This is a test message.
