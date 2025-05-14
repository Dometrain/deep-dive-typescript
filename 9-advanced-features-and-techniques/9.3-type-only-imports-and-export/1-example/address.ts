interface Address {
  city: string;
  country: Country;
}

type Country = "USA" | "UK" | "Canada" | "Mexico";

// Type only export (or could export each separately above)
export type { Address, Country };

export function logAddress(address: Address) {
  console.log(`Address: ${address.city}, ${address.country}`);
}

// side effect
logAddress({
  city: "New York",
  country: "USA",
});
