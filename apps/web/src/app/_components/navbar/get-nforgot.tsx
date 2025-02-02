"use client"

import { SecondaryButton } from "../secondary-button"

export const GetnForgotButton = () => {
  return (
      <SecondaryButton text="Ter o nForgot" className="font-bold" onClick={() => location.replace("/create")}/>
  )
}