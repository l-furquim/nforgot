import { type NextAuthOptions } from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';
import { api } from "./api";
import { cookies } from "next/headers";
import type { AxiosError } from "axios";
import GitHubProvider from "next-auth/providers/github";


export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
          clientId: process.env.GITHUB_ID || "",
          clientSecret: process.env.GITHUB_SECRET || "",
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
        alias: { label: "Alias", "type": "alias", optional: true, },
        accountType: { label: "AccountType", type: "accountType", optional: true, },
        imageUrl: { label: "ImageUrl", type: "imageUrl", optional: true, },
      },
      async authorize(credentials, req) {
        const { email, password, alias, accountType, imageUrl } = credentials as {
          email: string;
          password: string;
          alias?: string,
          accountType?: string,
          imageUrl?: string,
        };

        try{
          let authResponse;

          if(alias && accountType && imageUrl){
            const response = await api.post("/authors/create", JSON.stringify({
              alias, email, accountType, imageUrl: imageUrl, password, 
            }));
    
            const data = response.data;
    
            console.log(data);
    
            if(data.token){
              const cookie = await cookies();
    
              cookie.set("nforgotAuth", data.token);
              cookie.delete("user");
              cookie.delete("type");
            };
    
            authResponse = data.author;
          }else{
            const response = await api.post("/authors/auth", JSON.stringify({
              email: email,
              password: password,
            }));

            const data = response.data;

            if(data.token){
              const cookie = await cookies();
    
              cookie.set("nforgotAuth", data.token);
            };

            authResponse = data.author;
          }
          return authResponse;
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
        token.imageUrl = user.imageUrl;
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
        imageUrl: token.imageUrl as string,
      };
      return session;
    },
    async signIn({ profile, account }){
      if(!profile) return false;
      const accountType = account?.provider === "github" ? "GITHUB" : "GOOGLE";

      try{
        const response = await api.post("/authors/create", JSON.stringify({
          alias: profile.name, email: profile.email, accountType, imageUrl: profile.image, password: "nopassword",
        }));

        const data = response.data;

        console.log(data);

        if(data.token){
          const cookie = await cookies();

          cookie.set("nforgotAuth", data.token);

          return true;
        };
      }catch(err) {
        console.log(err);
        return false;
      }
      return true;
    },
  }
}

function GithubProvider(arg0: { clientId: string; clientSecret: string; }): import("next-auth/providers/index").Provider {
  throw new Error("Function not implemented.");
}
