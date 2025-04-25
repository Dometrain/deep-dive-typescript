// Recursive types define structures that reference themselves.
type TreeNode<T> = {
  value: T;
  children: TreeNode<T>[]; // Recursive type. `TreeNode` can have children that are also TreeNode<T>.
};

type Tree<T> = {
  root: TreeNode<T>;
};

// Example usage:
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
