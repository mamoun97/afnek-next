

import { Button } from "flowbite-react";
import { IoArrowForward } from "react-icons/io5";
import images from "../../assets";
import Container from "../Container";
export default function ReferenceDis() {
    return (
        <div>
            <Container className=" mt-8 p-2" >
                <h1 className='text-2xl font-bold'>Reference</h1>
                <p className='mb-4'>Discover the Afnek exprience</p>
                <div className="grid grid-cols-4 gap-4 max-md:grid-cols-2">
                    <div className=" relative h-[320px] col-span-2 max-md:col-span-2 bg-center bg-cover bg-no-repeat rounded-md overflow-hidden"
                        style={{ backgroundImage: "url(" + images.sahra.src + ")" }}>
                        <div className="p-5 absolute top-0 left-0 right-0 bottom-0 bg-[#0004] flex flex-col justify-end items-start">
                            <h1 className='text-2xl text-white font-bold mb-2'>
                                Discover Algeria deep inside
                            </h1>
                            <Button color="blue">Explore</Button>
                        </div>
                    </div>
                    <W/>
                    <W/>
                </div>


            </Container>
        </div>
    )
}

function W() {
    return <div className='flex flex-col col-span-1 items-start max-sm:col-span-2'>
        <div className="grow mb-3 w-full bg-center bg-cover bg-no-repeat rounded-md min-h-[200px]"
            style={{ backgroundImage: "url(" + images.c1.src + ")" }}>
        </div>
        <h1 className='text-lg font-bold mb-0'>
            The turise cities in algeria
        </h1>
        <p className='text-sm mb-3'>
            The turise cities in algeria
        </p>
        <Button color="blue" outline className='text-blue-500 min-w-[33%] text-center' size={"xs"}>
            Explore <IoArrowForward className="me-2"/>
        </Button>
    </div>
}


