// Multiple type parameters can be used
function combine<T, U>(a: T, b: U): T & U {
  return { ...a, ...b };
}
const combined = combine({ name: "Alice" }, { age: 30 });

// Can provide helpful names, typically prefixed with "T"
function combine2<TFirst, TSecond>(a: TFirst, b: TSecond): TFirst & TSecond {
  return { ...a, ...b };
}

// Another naming option
function combine3<T1, T2>(a: T1, b: T2): T1 & T2 {
  return { ...a, ...b };
}
