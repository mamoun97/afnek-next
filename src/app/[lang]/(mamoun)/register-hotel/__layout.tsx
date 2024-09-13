"use client"



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
