
import { IoIosArrowForward, IoMdHeartEmpty } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { Button, Rating } from "flowbite-react";
import images from "../../assets";
import ImageH from "../ImageH";
import Link from "next/link";
export default function HotelPageHeaderComponent() {
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
                    <Link href={"#"}>Hôtel des Beaux Arts</Link>
                </div>
            </div>
            <div className="flex items-center mt-5">
                <Rating size={"sm"}>
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star filled={false} />
                </Rating>
                <div className="grow"></div>
                <IoMdHeartEmpty className="text-2xl text-blue-600 cursor-pointer" />
                <div className="me-2"></div>
                <Button color="blue" outline size={"sm"} className="text-blue-600 shadow-none border-none max-sm:col-span-1">Check room availability</Button>
            </div>
            <h1 className="text-2xl font-bold mt-4">
                Hôtel des Beaux Arts
            </h1>
            <div className="flex items-center text-sm mt-2">
                <IoLocationSharp className="text-xl text-blue-600" />
                <div className="me-2"></div>
                <span>169, Rue Colonel Karim Belkacem, Alger centre, Alger, Algérie</span>
                <div className="me-2"></div>
                <Link href="#" className="text-blue-600 underline ">Show on map</Link>
            </div>
            <div className="grid grid-cols-5 grid-rows-8 min-h-[400px] gap-2 mt-4 max-sm:flex flex-col">

                <ImageH src={images.grid1.src} className="col-span-2 row-span-3" />
                <ImageH src={images.grid2.src} className="col-span-3 row-span-6" />
                <ImageH src={images.grid3.src} className="col-span-2 row-span-3" />
                <ImageH src={images.grid4.src} className="col-span-1 row-span-2 max-md:hidden" />
                <ImageH src={images.grid5.src} className="col-span-1 row-span-2 max-md:col-span-2" />
                <ImageH src={images.grid6.src} className="col-span-1 row-span-2 max-md:hidden" />
                <ImageH src={images.grid7.src} className="col-span-1 row-span-2 max-md:col-span-2" />
                <ImageH
                    src={images.grid7.src}
                    className="col-span-1 row-span-2"
                    child={<div className="flex w-full h-full absolute top-0 left-0 items-center justify-center bg-[#0006] text-white">
                        +45 Photos
                    </div>} />
            </div>
        </>
    )
}


