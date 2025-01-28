import { GetnForgotButton } from "./get-nforgot";
import { Icon } from "../icon"
import { LoginButton } from "./login-button";
import { UserButton } from "../user-button"

export const NavBar = () => {
  const userLogged = false;

  return (
    <div className="w-full p-2 items-center flex gap-3">
      <Icon/>
      {userLogged ? (
        <UserButton/>
      ): (
        <>
          <LoginButton/> <GetnForgotButton/>
        </>
      ) }
    </div>
  )
}