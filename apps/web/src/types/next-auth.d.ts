import 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string,
      email: string;
      password: string;
      alias: string,
      accountType: string,
      iconUrl: string,
    };
  }

  interface User {
    id: string;
    email: string;
    password: string;
    alias: string,
    accountType: string,
    iconUrl: string,
  }
}