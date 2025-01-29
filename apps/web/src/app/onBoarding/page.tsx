import { UserForm } from "../_components/onBoarding/user-form";

export default function OnBoardingPage(){
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full mb-10 flex flex-col items-center justify-center space-y-3">
        <h1 className="font-bold mt-10 text-3xl">Crie seu perfil</h1>
        <p className="font-bold text-muted-foreground text-2xl">Esse e como seu perfil vai parecer</p>
      </div>
      <UserForm/>
    </div>
  )
}