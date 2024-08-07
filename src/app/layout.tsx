import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (  
    <html lang="en">
      <body className={inter.className}>
          
       <div className=" container mx-auto px-12   absolute p-4 transform -translate-x-1/2 -translate-y-1/2 border top-1/2 left-1/2   ">
            {children}
       </div>
        
        </body>
    </html>
  );
}
