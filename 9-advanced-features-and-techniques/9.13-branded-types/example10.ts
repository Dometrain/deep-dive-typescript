// ts-brand
import { Brand } from "ts-brand";

interface User {
  id: Brand<number, "user">;
  name: string;
}
