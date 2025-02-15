import { SecondaryButton } from "../secondary-button"

export const GetnForgotButton = () => {
  return (
      <SecondaryButton onClick={() => location.replace("/create")} text="Ter o nForgot" className="font-bold"/>
  )
}