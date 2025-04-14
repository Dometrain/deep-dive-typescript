function controlFlowExample(x: string | null) {
  if (x !== null) {
    return x.toUpperCase();
  }

  console.log(`${x} is null`);
}

function processValue(value?: number) {
  if (value) {
    console.log(`Number value: ${value.toFixed(2)}`);
  } else {
    console.log("No value provided");
  }
}

processValue(123.456);
