// InstanceType - Get the Instance Type of a Class
class Point {
  x = 0;
  y = 0;
}

type PointInstanceType = InstanceType<typeof Point>;
