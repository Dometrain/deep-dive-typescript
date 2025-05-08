// ThisType - Marker for a contextual `this` type

type ObjectWithMethods = {
  data: { x: number; y: number };
  methods: {
    moveBy(dx: number, dy: number): void;
  } & ThisType<{ x: number; y: number }>; // specify the type of `this` in methods
};

const obj: ObjectWithMethods = {
  data: { x: 0, y: 0 },
  methods: {
    moveBy(dx, dy) {
      this.x += dx;
      this.y += dy;
    },
  },
};
