
"use client"
import { IoIosArrowForward, IoMdHeartEmpty } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";


import ImageH from "../ImageH";
import Link from "next/link";
import ApiConfig from "@/api/config";
import Rating from "../rizzui/Rating";
import { Button } from "rizzui";
import GalleryModal from "../gallery-modal";
import { useState } from "react";
import useLang from "@/lang/useLang";
import getNameTr from "@/utils/get-name-tr";


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
   const dt:HotelFull={...data,gallery_hotel:[...data.gallery_hotel]}
   const dm:HotelFull={...data,gallery_hotel:[...data.gallery_hotel]}
   const [open,setOpen]=useState<false|number>(false)
   const {lang,t}=useLang()
    return (
        <>
            <div className=" flex ">
                <div className="p-3 bg-gray-100 rounded-md flex items-center text-sm">
                    <Link href={"#"}>{t.header.search}</Link>
                    <div className="me-2"></div>
                    <IoIosArrowForward className={lang=="ar"?"rotate-180":""}/>
                    <div className="me-2"></div>
                    <Link href={"#"}>{data.wilaya?getNameTr(lang, data.wilaya):""} </Link>
                    <div className="me-2"></div>
                    <IoIosArrowForward className={lang=="ar"?"rotate-180":""}/>
                    <div className="me-2"></div>
                    <Link href={"#"}>{getNameTr(lang, dt)}</Link>
                </div>
            </div>
            <div className="flex items-center mt-5">
                <Rating size={"sm"} initialRating={dt?.rating ?? 0} />

                <div className="grow"></div>
                <IoMdHeartEmpty className="text-2xl text-primary cursor-pointer" />
                <div className="me-2"></div>
                <Button color="primary" variant="outline" size={"sm"} >{t.hotel.check_room_av}</Button>
            </div>
            <h1 className="text-2xl font-bold mt-4">
                {getNameTr(lang, dt)}
            </h1>
            <div className="flex items-center text-sm mt-2">
                <IoLocationSharp className="text-xl text-primary" />
                <div className="me-2"></div>
                <span>{dt.address}</span>
                <div className="me-2"></div>
                <Link href="#" className="text-blue-600 underline ">{t.hotel.show_on_map}</Link>
            </div>
            <div className={"grid grid-cols-5 grid-rows-8 h-[540px] max-sm:h-auto gap-2 mt-4 max-sm:flex flex-col "+(dt.gallery_hotel.length?"":"bg-red-400")}>

                {
                    dt.gallery_hotel?.splice(0, 7).map((el, k) => {

                        return <ImageH onClick={()=>setOpen(k)} key={k}
                            src={ApiConfig.awsUrl + el.path} className={imageClass[k]} />
                    })
                }

                {dm.gallery_hotel.length>7&&<ImageH
                    src={ApiConfig.awsUrl +dm.gallery_hotel[7].path}
                    onClick={()=>setOpen(7)}
                    className="col-span-1 row-span-2"
                    child={<div className="flex w-full h-full font-semibold absolute top-0 left-0 items-center justify-center bg-[#0009] text-white">
                        +{dm.gallery_hotel.length-7} {t.hotel.photos}
                    </div>} />}
            </div>
            <GalleryModal title={data.name_en} open={open} setOpen={setOpen} images={data.gallery_hotel.map(el=>ApiConfig.awsUrl +el.path)} />
        </>
    )
}


