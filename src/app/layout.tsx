
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import { AuthContextProvider } from "@/firebase/firebase-provider";
import ReduxProvider from "@/Providers/redux-provider";
import { Toaster } from "react-hot-toast";
import "@/lang/i18n"
import LangView from "@/lang/lang-view";

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


  return (
    <html lang="en">
      <head>
        <link rel="icon" id="faveiconRiseCart" type="image/any" sizes="any" href="faveicon.ico" />
      </head>
      <body className={inter.className + " font-afnek"}>
        <NextProgress />
        <ReduxProvider>
          <AuthContextProvider>

            {children}

            <Toaster position="bottom-center" />
          </AuthContextProvider>
        </ReduxProvider>
        <LangView />

      </body>
    </html>
  );
}
