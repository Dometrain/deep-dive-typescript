// Strings
import { z } from "zod";

z.string().max(5);
z.string().min(5);
z.string().length(5);
z.string().regex(/^[0-9]+$/);
z.string().includes("string");
z.string().startsWith("string");
z.string().endsWith("string");

// String-related methods
z.email();
z.url();
z.emoji();
z.uuid();
z.nanoid();
z.cuid();
z.cuid2();
z.ulid();
z.ipv4();
z.base64();

// Date and time
z.iso.datetime(); // ISO 8601; by default only `Z` timezone allowed
z.iso.date(); // ISO date format (YYYY-MM-DD)
z.iso.time(); // ISO time format (HH:mm:ss[.SSSSSS])
z.iso.duration(); // ISO 8601 duration

// Transforms
z.string().trim(); // trim whitespace
z.string().toLowerCase(); // toLowerCase
z.string().toUpperCase(); // toUpperCase
