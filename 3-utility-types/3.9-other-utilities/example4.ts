// OmitThisParameter - Omit the first parameter of a function type.

type OriginalFuncType = (this: { value: number }, increment: number) => void;
type NewFuncType = OmitThisParameter<OriginalFuncType>;

const incrementValue: NewFuncType = function (
  this: { value: string }, // Since omitted above, can change the type
  increment
) {
  this.value += increment;
};

const context = { value: 5 };
incrementValue.call(context, 3); // Now, context.value is 8
console.log(context);
