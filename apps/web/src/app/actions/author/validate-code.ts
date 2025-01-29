"use server"

export async function validateCode(code: string){
  try{
    console.log(code);

    return true;
  }catch(err){
    throw new Error("Invalid code")
  }
}