import { User } from "firebase";

export type Auth = {
  doLogin: (email: string, password: string) => Promise<firebase.auth.UserCredential>
  doLogout: () => Promise<void>
  setUser: React.Dispatch<React.SetStateAction<firebase.User | null>>
  user: null | User
}