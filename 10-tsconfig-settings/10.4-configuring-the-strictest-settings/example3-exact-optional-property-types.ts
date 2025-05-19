// Exact optional property types example

interface Manufacturer {
  name: string;
  foundingDate?: Date; // Must explicitly allow undefined with exactOptionalPropertyTypes true;
}

const acme: Manufacturer = {
  name: "Acme",
  foundingDate: undefined, // Error. Can omit, but can't set to undefined with exact optional property types
};
