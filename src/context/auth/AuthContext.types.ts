import { User } from "firebase";
import { Dispatch } from 'react';
import { AuthAction } from "./authReducer/AuthReducer.types";

export type Auth = {
  doLogin: (email: string, password: string) => Promise<firebase.auth.UserCredential>
  doLogout: () => Promise<void>
  setUser: React.Dispatch<React.SetStateAction<firebase.User | null>>
  user: null | User
}

export type AuthDispatch = Dispatch<AuthAction>