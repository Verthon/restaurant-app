import * as React from "react"
import { useRouter } from "next/router"

import { useNotification } from "hooks/useNotification/useNotification"
import { Button } from "ui/Button/Button"
import { Input } from "ui/Input/Input"
import { Label } from "ui/Label/Label"
import { ROUTES } from "constants/routes"

import styles from "styles/modules/Login.module.scss"
import { LoginState } from "./LoginForm.types"

export const LoginForm = () => {
  const router = useRouter()
  const showNotification = useNotification()
  const [form, setForm] = React.useState<LoginState>({
    email: "",
    password: "",
  })

  const [status, setStatus] = React.useState<"idle" | "authenticated" | "failure" | "loading">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleRedirect = () => {
    if (status === "authenticated") {
      router.push(ROUTES.admin)
    }

    if (status === "failure") {
      showNotification({ type: "error", message: "Failed to log in, please try again" })
    }
  }

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.FormEvent<HTMLFormElement>) => {
    setStatus("loading")
    e.preventDefault()
    // await login({ email: form.email, password: form.password })
    handleRedirect()
    setStatus("authenticated")
  }

  return (
    <div className={styles.login}>
      <form className={styles.form} onSubmit={handleLogin}>
        <Label htmlFor="email">Email</Label>
        <Input type="email" name="email" required aria-required="true" onChange={handleChange} />
        <Label htmlFor="password">Password</Label>
        <Input type="password" name="password" required aria-required="true" onChange={handleChange} />
        <Button data-testid="login-submit" type="submit" variant="dark" loading={status === "loading"} size="large">
          Login
        </Button>
      </form>
    </div>
  )
}
