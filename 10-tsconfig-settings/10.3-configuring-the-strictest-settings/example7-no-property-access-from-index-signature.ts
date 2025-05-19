// With noPropertyAccessFromIndexSignature, Must use obj["key"] syntax (index signature) if field may not exist
interface CarSettings {
  speed: number;
  [key: string]: string | number | boolean; // Index signature allows any string keys of type string | number | boolean
}

const settings: CarSettings = {
  speed: 50,
};

settings.speed = 60; // OK
// settings.isRunning = true; // Error,
settings["isRunning"] = true; // OK
