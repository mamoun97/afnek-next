

import Body from "@/components/Body";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "flowbite-react";
import Link from "next/link";
import { MdArrowForwardIos, MdCheck } from "react-icons/md";


const list = [
    "Listing your hotel is free.",
    "12/5 support by phone or email.",
    "Set your own prices with 3 different currencies (EUR, DZD and USD)",
    "Access the site in 3 languages (Arabic, English and French)"
]

export default function BeforeRegisterHotel() {
    
    return (
        <Body>
            <Header />
            <Container className="pt-8">

                <div className="bg-white rounded-md  p-8">
                    
                    <div className="flex flex-col mt-8 items-center p-5">
                    <h1 className="text-xl font-bold mb-4">
                        Welcome to AFNEK
                    </h1>
                        {
                            list.map((el, k) => {
                                return <ItemList text={el} key={k} />
                            })
                        }
                    </div>

                    <div className="flex  justify-center mt-12 mb-8">
                        <Link href="/register-hotel">
                            <Button className="bg-blue-700  hover:bg-blue-600 min-w-[180px]">
                                <span >Get Started</span>
                                <MdArrowForwardIos className="ms-2" />
                            </Button>
                        </Link>

                    </div>
                </div>

            </Container>
            <Footer />
        </Body>
    )
}


function ItemList({text}:{text: string}) {
    return <div className="flex mt-3">
        <div className="text-lg text-green-600 ">
            <MdCheck />
        </div>
        <div className="me-2"></div>
        <div className="text-sm">
            {text}
        </div>
    </div>
}