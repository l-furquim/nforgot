export class AccountNotFoundEror extends Error{
  constructor(){
    super("There is no account related with this credentials");
  }
}