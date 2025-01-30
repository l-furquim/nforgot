import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';
import { api } from "./api";
import { cookies } from "next/headers";
import type { AxiosError } from "axios";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
        alias: { label: "Alias", "type": "alias" },
        accountType: { label: "AccountType", type: "accountType" },
        iconUrl: { label: "IconUrl", type: "iconUrl" },
      },
      async authorize(credentials, req) {
        const { email, password, alias, accountType, iconUrl } = credentials as {
          email: string;
          password: string;
          alias: string,
          accountType: string,
          iconUrl: string,
        };

        try{
          console.log(iconUrl);

          const response = await api.post("/authors/create", JSON.stringify({
            alias, email, accountType, imageUrl: iconUrl, password, 
          }));
  
          const data = response.data;
  
          console.log(data);
  
          if(data.token){
            const cookie = await cookies();
  
            cookie.set("nforgotAuth", data.token);
            cookie.delete("user");
            cookie.delete("type");
          };
  
          if (data.author && data.author.id) {
            return data.author;
          }
        }catch(err){
          const axiosError = err as AxiosError;
          console.log("Erro na auth " + JSON.stringify(axiosError.response?.data));
          return null;
        };
      },
    }),
  ],
  pages: {
    signIn: "/onBoarding",
  },
  callbacks: {
    redirect({baseUrl}){
      return baseUrl + "/home";
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.password = user.password;
        token.alias = user.alias;
        token.accountType = user.accountType;
        token.iconUrl = user.iconUrl;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = {
        id: token.id as string,
        email: token.email as string,
        password: token.password as string,
        alias: token.alias as string,
        accountType: token.accountType as string,
        iconUrl: token.iconUrl as string,
      };
      return session;
    },
  }
}