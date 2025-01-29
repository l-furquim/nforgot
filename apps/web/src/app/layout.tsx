import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "nForgot",
  description: "A notes web app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="pt-br">
     {/*  <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" cross/>
      <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap" rel="stylesheet"/> */}
      <body
        className="antialiased"
      >
        <div className="min-h-screen text-[#3C2A21]  dark:text-[#E5E5CB] dark:bg-[#1A120B] bg-[#E5E5CB] ">
          {children}
        </div>
      </body>
    </html>
  );
}
