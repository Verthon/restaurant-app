import { User } from "firebase";
import { Dispatch } from 'react';
import { AuthAction } from "./authReducer/AuthReducer.types";

export type Auth = {
  user: User | null | undefined,
  isAuthorizing: boolean,
  isAuthorized: boolean,
}

export type AuthDispatch = Dispatch<AuthAction>