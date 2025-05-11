// Exact optional property types example

interface Vehicle {
  manufactureDate?: Date;
}

const vehicle: Vehicle = {
  manufactureDate: undefined,
};
