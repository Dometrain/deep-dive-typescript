# Recursion

A mapped type can be recursive, meaning that it can refer to itself in its definition. This is useful for creating complex data structures like trees or linked lists, or for handling nested objects.

# Example: Recursive Mapped Type

```ts
type TreeNode<T> = {
  value: T;
  children: TreeNode<T>[];
};

type Tree<T> = {
  root: TreeNode<T>;
};

const tree: Tree<number> = {
  root: {
    value: 1,
    children: [
      {
        value: 2,
        children: [],
      },
      {
        value: 3,
        children: [
          {
            value: 4,
            children: [],
          },
        ],
      },
    ],
  },
};
```
