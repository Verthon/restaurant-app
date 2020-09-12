import { User } from "firebase";

export type AuthAction = {
  type: string;
  user?: User | null;
};