// Often use a template literal type

// Goal: create a new type with a getX function for each property instead:
type Getters<Type> = {
  [Property in keyof Type as `get${Capitalize<
    string & Property
  >}`]: () => Type[Property];
};

type Product = {
  id: number;
  name: string;
  price: number;
};

type LazyProduct = Getters<Product>;
