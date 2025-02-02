"use client"

import { PrimaryButton } from "../primary-button"

export const LoginButton = () => {
  return (
    <PrimaryButton text="Login" onClick={() => location.replace("/login")}/>
  )
}