import React from "react"
import { MdArrowForwardIos, MdCheck } from "react-icons/md";
import Body from "@/components/Body";
import Header from "@/components/Header";
import Container from "@/components/Container";
import Link from "next/link";
import Footer from "@/components/Footer";
import { Button } from "rizzui";


const steps = [
    {
        icon: "1",
        name: "Create a Afnek Account"
    },
    {
        icon: "2",
        name: "Complete and submit the registration form"
    },
    {
        icon: "3",
        name: " you are free to book as an agency for you"
    },


]
const list = [
    "It's free to register as a partner agency.",
    "Get your booking commission instantly to your Afnek wallet once the booking is made.",
    "24/7 support from our Afnek support team.",
    "Access the site in 3 languages (Arabic, English & French).",
    "Get access to the separate portal to manage all your reservations and your financial part."
]

export default function BeforeRegisterAgency() {
    // const [activeStep, setActiveStep] = React.useState<number>(0)
    return (
        <Body>
            <Header />
            <Container className="pt-8">

                <div className="bg-white rounded-md mt-8 p-8">
                    <div className='flex justify-center mt-8 mb-24 '>

                        <div className="flex items-center max-w-[720px] w-full flex-row max-md:flex-col max-md:items-start">
                            {
                                steps.map((el, k) => {
                                    return <React.Fragment key={k}>
                                        <Item
                                            desc={el.name}
                                            logo={el.icon}
                                        />
                                        {k != 2 && <div className="me-2 ms-2 border-2 max-h-0 border-primary/70 grow max-md:min-h-[60px] max-md:border-0"></div>}

                                    </React.Fragment>
                                })
                            }

                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-8 p-5">
                        {
                            list.map((el, k) => {
                                return <ItemList text={el} key={k} />
                            })
                        }
                    </div>

                    <div className="flex  justify-center mt-12 mb-8">
                        <Link href="/register-agency">
                            <Button className=" min-w-[180px]" color="primary">
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

function Item(props: any) {

    return <div className='relative w-[60px] h-[60px] min-h-[60px] flex justify-center items-center rounded-full bg-primary '>
        <div className="text-xl text-white font-bold">{props.logo}</div>

        <div className="max-w-[140px] absolute left-[50%] max-md:left-[100%] top-[140%] max-md:top-[50%] translate-x-[-50%] max-md:translate-x-[0%] max-md:translate-y-[-50%] min-w-[200px] ">
            <p className='text-center text-base text-gray-500'>{props.desc}</p>
        </div>
    </div>
}
function ItemList({text}:{text: string}) {
    return <div className="flex col-span-1">
        <div className="text-lg text-green-600">
            <MdCheck />
        </div>
        <div className="me-2"></div>
        <div className="text-sm">
            {text}
        </div>
    </div>
}
