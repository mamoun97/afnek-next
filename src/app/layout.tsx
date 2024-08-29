import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";

import { CustomFlowbiteTheme, Flowbite } from "flowbite-react";

import { AuthContextProvider } from "@/firebase/firebase-provider";
import { NextUIProvider } from "@/Providers/NextUIProvider";
// import ReactQueryPvorider from "@/Providers/react-query-provider";
import ReduxProvider from "@/Providers/redux-provider";
import { Toaster } from "react-hot-toast";


const NextProgress = dynamic(() => import('@/components/next-progress'), {
  ssr: false,
});
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Afnek",
  description: "afnek",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const customTheme: CustomFlowbiteTheme = {
    button: {
      base:"bg-primary-500 hover:bg-primary-600",
      color: {
        primary: "bg-primary-500 hover:bg-primary-600",
      },
    },
  };
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextProgress />
        <ReduxProvider>
          <Flowbite theme={{ theme: customTheme }}>
            <AuthContextProvider>
              {/* <ReactQueryPvorider> */}
                <NextUIProvider>

                  {children}

                  <Toaster position="bottom-center" />
                </NextUIProvider>
              {/* </ReactQueryPvorider> */}
            </AuthContextProvider>
          </Flowbite>
        </ReduxProvider>


      </body>
    </html>
  );
}
