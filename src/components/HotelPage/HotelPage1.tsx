import { Badge, Button, Datepicker, TextInput } from "flowbite-react";


import { MdPerson, MdStar } from "react-icons/md";

import { IoIosWifi, IoMdStar, IoIosBed, IoIosCalendar } from "react-icons/io";
import { HiOutlineHome } from "react-icons/hi";
import { FaCarAlt, FaBed, FaConciergeBell, FaSwimmingPool } from "react-icons/fa";
import { GiCarKey } from "react-icons/gi";
import { MdCleaningServices } from "react-icons/md";

import HotelPageHeaderComponent from "./HotelPageHeaderComponent";
import TextEditorSelect from "../Inputs/TextEditorSelect";
import Taps from "../Taps";
import ImageH from "../ImageH";
import images from "../../assets";
import Collapse from "../Collapse";
import { MdOutlineClear } from "react-icons/md";
import { useEffect, useState } from "react";
export default function HotelPage1({
    stepsComponent,
    isChoseRoom = false,
    data
}: {
    stepsComponent: any,
    isChoseRoom?: boolean,
    data:HotelFull
}) {
    console.log(data)
    const [count,setCount]=useState(0)
    useEffect(()=>{
        setCount(count+1)
    },[isChoseRoom])
    const content =<>
            <HotelPageHeaderComponent data={data}/>
            {stepsComponent}
            <div className="mb-6 grid grid-cols-5 max-[820px]:grid-cols-4 max-sm:grid-cols-2 gap-2 p-2 bg-gray-100 rounded-md">

                <Datepicker className="col-span-2" />
                <TextInput
                    icon={MdPerson}

                    className="col-span-2"
                    placeholder="2 adults · 0 children · 1 room" />
                <Button color="blue" className="col-span-1 max-[820px]:col-span-4 max-sm:col-span-2">
                    Check availability
                </Button>
            </div>
            <h1 className="text-xl font-bold mb-6">
                Room types
            </h1>
            <div className="grid grid-cols-3 gap-3 max-md:grid-cols-1">
                <div className="col-span-2 flex gap-2 flex-col max-md:col-span-1">
                    <Collapse title="Classic">

                    </Collapse>
                    <Collapse title="Senior Suite" defaultOpen={isChoseRoom}>
                        <div className="grid grid-cols-3 grid-rows-2 max-sm:grid-cols-2  max-sm:grid-rows-none gap-3  py-2">
                            <div className="rounded-lg bg-white p-2 col-span-1 max-sm:col-span-2 row-span-2">

                                <ImageH src={images.grid7.src} className=" pt-[100%] w-full" />
                                <p className="mt-5">Equipment</p>
                                <div className="grid grid-cols-6 gap-1 text-xl mt-4">
                                    <IoIosWifi />
                                    <IoMdStar />
                                    <IoIosBed />
                                    <HiOutlineHome />
                                    <FaCarAlt />
                                    <FaBed />
                                    <FaConciergeBell />
                                    <FaSwimmingPool />
                                    <GiCarKey />
                                    <MdCleaningServices />
                                    <span className="col-span-2 p-1 rounded-2xl bg-gray-100 text-xs text-center">+13</span>
                                </div>
                                <p className="text-green-500 text-sm mt-3">
                                    Total number of available
                                </p>
                                <p className="text-green-500 text-sm">
                                    rooms: 07
                                </p>
                            </div>
                            <div className="rounded-lg bg-white p-4 col-span-2 row-span-1">
                                <div className="flex items-center">
                                    <MdPerson className="text-xl" />
                                    <div className="me-1"></div>
                                    1 Person
                                    <div className="me-1"></div>
                                    <Badge color="blue" size={"xs"} className="bg-blue-600 py-[3px] text-white" icon={MdStar}>
                                        Recommended
                                    </Badge>
                                </div>
                                <p className="mt-3 text-green-500 text-sm">
                                    Max allowed: 1 Adult, 0 Children & 1 Infant
                                </p>
                                <div className="flex items-center text-sm">
                                    <IoIosBed />
                                    <div className="me-2"></div>
                                    X 3
                                    <div className="me-2"></div>
                                    In addition
                                    <div className="me-2"></div>
                                    <FaBed />
                                    <div className="me-2"></div>
                                    X 0
                                </div>
                                <div className="flex items-center mt-4">
                                    <div className="flex flex-col">
                                        <p className="text-green-500">
                                            Bedrooms
                                        </p>
                                        <TextEditorSelect
                                            label=""
                                            propsInput={{
                                                color: "success",
                                                size: 1,
                                                className: "border-green-500"
                                            }}
                                            placeholder="-- bedrooms --"
                                            value={1}
                                            className="p-0 shadow-green-500 scale-90"
                                            onChange={() => { }}

                                        />
                                    </div>
                                    <div className="grow"></div>
                                    <div className="flex flex-col items-end">
                                        <p className="text-sm">4 nights, 2 adults</p>
                                        <p className="text-base font-bold">30,227 DZD</p>
                                        <p className="text-sm">+9% taxes and charges</p>
                                    </div>
                                </div>

                            </div>
                            <div className="rounded-lg bg-white p-4 col-span-2 row-span-1">
                                <div className="flex items-center">
                                    <MdPerson className="text-xl" />
                                    <div className="me-1"></div>
                                    1 Person
                                    <div className="me-1"></div>
                                    <Badge color="blue" size={"xs"} className="bg-blue-600 py-[3px] text-white" icon={MdStar}>
                                        Recommended
                                    </Badge>
                                </div>
                                <p className="mt-3 text-green-500 text-sm">
                                    Max allowed: 1 Adult, 0 Children & 1 Infant
                                </p>
                                <div className="flex items-center text-sm">
                                    <IoIosBed />
                                    <div className="me-2"></div>
                                    X 3
                                    <div className="me-2"></div>
                                    In addition
                                    <div className="me-2"></div>
                                    <FaBed />
                                    <div className="me-2"></div>
                                    X 0
                                </div>
                                <div className="flex items-center mt-4">
                                    <div className="flex flex-col">
                                        <p className="text-blue-500">
                                            Choose a room
                                        </p>
                                        <TextEditorSelect
                                            label=""
                                            propsInput={{
                                                color: "success",
                                                size: 1,
                                                className: "border-green-500"
                                            }}
                                            placeholder="-- bedrooms --"
                                            value={1}
                                            className="p-0 shadow-blue-500 scale-90"
                                            onChange={() => { }}

                                        />
                                    </div>
                                    <div className="grow"></div>
                                    <div className="flex flex-col items-end">
                                        <p className="text-sm">4 nights, 2 adults</p>
                                        <p className="text-base font-bold">30,227 DZD</p>
                                        <p className="text-sm">+9% taxes and charges</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Collapse>
                    <Collapse title="Double standard">

                    </Collapse>
                    <Collapse title="Junior suite">

                    </Collapse>

                    <Taps
                        className="col-span-1 mt-5"
                        items={[
                            {
                                title: "Description",
                                body: <div>
                                    Located in Alger, New Day Hotel features a shared lounge and a restaurant. This 4-star hotel offers a 24-hour front desk and concierge service.
                                    <br /><br />
                                    All rooms in the hotel are fitted with a flat-screen TV with satellite channels. Rooms are complete with a private bathroom equipped with free toiletries, while some rooms at New Day Hotel also feature a balcony.
                                    <br /><br />
                                    A Buffet breakfast is served every morning at the property.
                                    <br /><br />
                                    New Day Hotel offers an outdoor pool. Both free WiFi and private parking are accessible at this property.
                                    <br /><br />
                                    The nearest airport is Houari Boumediene Airport, 12 km from the property.


                                </div>
                            },
                            {
                                title: "Equipment",
                                body: <pre>

                                </pre>
                            },
                            {
                                title: "Cancellation Policy",
                                body: <pre>

                                </pre>
                            },
                            {
                                title: "Hotel Policies",
                                body: <pre>

                                </pre>
                            },
                        ]} />
                </div>
                <div className="col-span-1 ">
                    {
                        !isChoseRoom ? <div className="bg-red-50 p-3 rounded-md">
                            <p className="text-red-500">Please select your room type to continue</p>
                            <p className="text-sm mt-2">Mon 30 Oct  -  Fri 3 Nov</p>
                            <p className="text-sm mt-2">2 adults · 0 children · 1 room</p>
                        </div>
                            :
                            <Cart  />}

                </div>

            </div>
        </>
    return count%2==0?content:<div>{content}</div>    
}

function Cart({ className = "" }: { className?: string }) {
    return <>
        <div className={"bg-white p-3 rounded-md border-2 border-blue-600  " + className}>

            <h1 className="text-lg font-bold mt-4">
                30,227 DZD
            </h1>
            <div className="text-[13px]">
                <span>All taxes included</span>
            </div>
            <div className="flex items-center py-1 mt-3">
                <div className="text-2xl">
                    <IoIosCalendar className="text-xl" />
                </div>
                <div className="me-3"></div>
                <span className="text-sm">Mon 30 Oct  -  Fri 3 Nov</span>
            </div>
            <div className="flex items-center py-1">
                <div className="text-2xl">
                    <MdPerson className="text-xl" />
                </div>
                <div className="me-3"></div>
                <span className="text-sm">2 adults · 0 children · 1 room</span>
            </div>
            <div className="relative">

                <div className="border border-gray-200 rounded-md  mt-2 relative overflow-hidden">

                    <div className="p-3 bg-gray-200">
                        2X - Suite Senior
                    </div>
                    <div className="p-3 flex items-center">
                        <MdPerson className="text-xl" />
                        <div className="me-2"></div>
                        1 Person
                        <div className="grow"></div>
                        <span className="text-blue-600 text-sm font-bold">27,732 DZD</span>
                    </div>

                </div>
                <span className="translate-x-1/2 translate-y-[-50%] top-0 cursor-pointer right-0 absolute w-5 h-5 flex items-center justify-center bg-red-600 text-white rounded-full">
                    <MdOutlineClear />
                </span>
            </div>

            <Button color="blue" className="w-full mt-4">
                Fill in your details
            </Button>
        </div>
    </>
}


