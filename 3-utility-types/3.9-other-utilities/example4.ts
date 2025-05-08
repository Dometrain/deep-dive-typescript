// OmitThisParameter - Omit the first parameter of a function type.

type OriginalFunctionType = (
  this: { value: number },
  increment: number
) => void;

type NewFunctionType = OmitThisParameter<OriginalFunctionType>;

const incrementValue: NewFunctionType = function (
  this: { value: string }, // Since omitted above, I can change the type
  increment
) {
  this.value += increment;
};

const context = { value: 5 };
incrementValue.call(context, 3); // Now, context.value is 8
console.log(context);
