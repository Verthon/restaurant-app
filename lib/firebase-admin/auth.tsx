import * as React from "react"
import firebase from "./firebase"

type LoginProps = {
  email: string
  password: string
}

type Props = {
  children: React.ReactNode
}

type User = {
  uid: string
  email: string | null
  displayName: string | null
}

type Status = "initial" | "loading" | "authenticated" | "failure"

export const FirebaseContext = React.createContext<typeof firebase | undefined>(undefined)
export const FirebaseContextController = ({ children }: Props) => {
  return <FirebaseContext.Provider value={firebase}>{children}</FirebaseContext.Provider>
}

export const useAuth = () => {
  const [user, setUser] = React.useState<User | null>(null)
  const [status, setStatus] = React.useState<Status>("initial")
  const firebase = React.useContext(FirebaseContext)

  if (firebase === undefined) {
    throw new Error("Missing firebase")
  }

  const logout = async () => {
    setStatus("loading")
    try {
      await firebase.auth().signOut()
      setStatus("initial")
    } catch (_) {
      setStatus("failure")
    }
  }

  const login = async ({ email, password }: LoginProps) => {
    setStatus("loading")
    try {
      const { user } = await firebase.auth().signInWithEmailAndPassword(email, password)
      setStatus("authenticated")
      setUser(user)
    } catch (_) {
      setStatus("failure")
    }
  }

  React.useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser)
        return
      }
      setUser(null)
    })
    return () => unsubscribe()
  }, [])

  return {
    logout,
    login,
    user,
    status,
  }
}
