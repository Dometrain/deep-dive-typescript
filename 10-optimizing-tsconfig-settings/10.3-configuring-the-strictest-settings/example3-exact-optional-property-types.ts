// Exact optional property types example

interface Vehicle {
  make: string;
  manufactureDate?: Date;
}

const vehicle: Vehicle = {
  make: "Toyota",
  manufactureDate: undefined, // Error. Can omit, but can't set to undefined with exact optional property types
};
