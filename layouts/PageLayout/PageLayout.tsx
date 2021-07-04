import * as React from "react"
import { ToastContainer } from "react-toastify"

import { PageTransition } from "ui/PageTransition/PageTransition"

import { Props } from "./PageLayout.types"

export const PageLayout = ({ children }: Props) => {
  return (
    <>
      <ToastContainer
        className="toast__container"
        toastClassName="toast"
        progressClassName="toast__progress"
        autoClose={4000}
      ></ToastContainer>
      <PageTransition>{children}</PageTransition>
    </>
  )
}
