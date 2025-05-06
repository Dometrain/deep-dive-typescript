// InstanceType Utility Type
class Point {
  x = 0;
  y = 0;
}

type PointInstanceType = InstanceType<typeof Point>;
