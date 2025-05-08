// ThisParameterType - Get the type of a function's this parameter

function toHex(this: Number) {
  return this.toString(16);
}

type ToHexThisParam = ThisParameterType<typeof toHex>;

// This assures the param for this function is the same as the this param of the toHex function
function numberToString(n: ToHexThisParam) {
  return toHex.apply(n);
}
