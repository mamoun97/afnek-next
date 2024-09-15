
"use client"
import { IoIosArrowForward, IoMdHeartEmpty } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";


import ImageH from "../ImageH";
import Link from "next/link";
import ApiConfig from "@/api/config";
import Rating from "../rizzui/Rating";
import { Button } from "rizzui";


const imageClass = [
    "col-span-2 row-span-3",
    "col-span-3 row-span-6",
    "col-span-2 row-span-3",
    "col-span-1 row-span-2 max-md:hidden",
    "col-span-1 row-span-2 max-md:col-span-2",
    "col-span-1 row-span-2 max-md:hidden",
    "col-span-1 row-span-2 max-md:col-span-2"
]
export default function HotelPageHeaderComponent({
    data
}: {
    data: HotelFull
}) {
   

    return (
        <>
            <div className=" flex ">
                <div className="p-3 bg-gray-100 rounded-md flex items-center text-sm">
                    <Link href={"#"}>Home</Link>
                    <div className="me-2"></div>
                    <IoIosArrowForward />
                    <div className="me-2"></div>
                    <Link href={"#"}>hotel for Algiers </Link>
                    <div className="me-2"></div>
                    <IoIosArrowForward />
                    <div className="me-2"></div>
                    <Link href={"#"}>{data.name_en}</Link>
                </div>
            </div>
            <div className="flex items-center mt-5">
                <Rating size={"sm"} initialRating={data?.rating ?? 0} />

                <div className="grow"></div>
                <IoMdHeartEmpty className="text-2xl text-primary cursor-pointer" />
                <div className="me-2"></div>
                <Button color="primary" variant="outline" size={"sm"} >Check room availability</Button>
            </div>
            <h1 className="text-2xl font-bold mt-4">
                {data.name_en}
            </h1>
            <div className="flex items-center text-sm mt-2">
                <IoLocationSharp className="text-xl text-primary" />
                <div className="me-2"></div>
                <span>{data.address}</span>
                <div className="me-2"></div>
                <Link href="#" className="text-blue-600 underline ">Show on map</Link>
            </div>
            <div className={"grid grid-cols-5 grid-rows-8 min-h-[400px] gap-2 mt-4 max-sm:flex flex-col "+(data.gallery_hotel.length?"":"bg-red-400")}>

                {
                    data.gallery_hotel?.splice(0, 7).map((el, k) => {

                        return <ImageH key={k}
                            src={ApiConfig.awsUrl + el.path} className={imageClass[k]} />
                    })
                }

                {data.gallery_hotel.length>7&&<ImageH
                    src={ApiConfig.awsUrl +data.gallery_hotel[7].path}
                    className="col-span-1 row-span-2"
                    child={<div className="flex w-full h-full absolute top-0 left-0 items-center justify-center bg-[#0006] text-white">
                        +{data.gallery_hotel.length-7} Photos
                    </div>} />}
            </div>
        </>
    )
}


