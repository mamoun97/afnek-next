

"use client"
import { IoArrowForward } from "react-icons/io5";
import images from "../../assets";
import Container from "../Container";
import { Button } from "rizzui";
import useLang from "@/lang/useLang";
export default function ReferenceDis() {
    const {t}=useLang()
    return (
        <div>
            <Container className=" mt-8 p-2" >
                <h1 className='text-2xl font-bold'>{t.home.reference}</h1>
                <p className='mb-4'>{t.home.discover_afnek}</p>
                <div className="grid grid-cols-4 gap-4 max-md:grid-cols-2">
                    <div className=" relative h-[320px] col-span-2 max-md:col-span-2 bg-center bg-cover bg-no-repeat rounded-md overflow-hidden"
                        style={{ backgroundImage: "url(" + images.sahra.src + ")" }}>
                        <div className="p-5 absolute top-0 left-0 right-0 bottom-0 bg-[#0004] flex flex-col justify-end items-start">
                            <h1 className='text-2xl text-white font-bold mb-2'>
                            {t.home.discover_alger}
                            </h1>
                            <Button color="secondary" >{t.home.explore}</Button>
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
    const {t}=useLang()
    return <div className='flex flex-col col-span-1 items-start max-sm:col-span-2'>
        <div className="grow mb-3 w-full bg-center bg-cover bg-no-repeat rounded-md min-h-[200px]"
            style={{ backgroundImage: "url(" + images.c1.src + ")" }}>
        </div>
        <h1 className='text-lg font-bold mb-0'>
        {t.home.turise_cities_alger}
        </h1>
        <p className='text-sm mb-3'>
        {t.home.turise_cities_alger}
        </p>
        <Button   color="primary" className=' min-w-[33%] text-center' variant="outline" size={"sm"}>
        {t.home.explore} <IoArrowForward className="me-2"/>
        </Button>
    </div>
}


