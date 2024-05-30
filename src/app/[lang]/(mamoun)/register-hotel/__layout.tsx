"use client"


import Body from "@/components/Body";
import Header from "@/components/Header";
import Container from "@/components/Container";
import Steps from "@/components/Steps";
import Footer from "@/components/Footer";
import { Button } from "flowbite-react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const NextProgress = dynamic(() => import('@/components/next-progress'), {
  ssr: true,
});


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
 
    const router=useRouter()
    return (

        <>
        <NextProgress/>
           

        </>

    );
}
