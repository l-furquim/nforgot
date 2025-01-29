"use server"

interface newAuthorRequest {
  username: string,
  avatarURL: string,  
}

export async function newAuthor({ username, avatarURL }: newAuthorRequest){
  console.log(username, avatarURL)

  
}