Problem: You want to narrow a type by checking if a property exists on an object.

Solution: Use the `in` operator.

JavaScript uses the `in` operator to support looping over an object's keys:

```ts
const user = { id: 1, name: "Alice" };

for (const key in user) {
  console.log(key);
}
```

But TypeScript uses the `in` operator for type narrowing. You can use the `in` operator to safely check if a property exists on an object:

```ts
type Car = {
  numDoors: number;
};

type Motorcycle = {
  hasWindshield: boolean;
};

const car = {
  numDoors: 4,
};

const motorcycle = {
  numWheels: 2,
};

function example(vehicle: Car | Motorcycle) {
  if ("numDoors" in vehicle) {
    console.log(vehicle.numDoors);
  }

  if ("hasWindshield" in vehicle) {
    console.log(vehicle.hasWindshield);
  }
}
```
