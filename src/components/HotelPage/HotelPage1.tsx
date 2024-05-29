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
import GalleryRoom from "../GalleryRoom";
import ApiConfig from "@/api/config";
import RoomCards from "../RoomCards";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { changeBooking } from "@/store/bookingSlice";
export default function HotelPage1({
    stepsComponent,
    isChoseRoom = false,
    data
}: {
    stepsComponent: any,
    isChoseRoom?: boolean,
    data: HotelFull
}) {

    const [count, setCount] = useState(0)
    useEffect(() => {
        setCount(count + 1)
    }, [isChoseRoom])
    const content = <>
        <HotelPageHeaderComponent data={data} />
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
                {
                    data.room_type_hotel?.map((el, k) => {
                        return <Collapse title={el.room_type_globale.name_en} key={k}>
                            <RoomCards data={el} hotel={data} />
                        </Collapse>
                    })
                }


                <Taps
                    className="col-span-1 mt-5"
                    items={[
                        {
                            title: "Description",
                            body: <div dangerouslySetInnerHTML={{ __html: data.discription?.en ?? "" }}>


                            </div>
                        },
                        {
                            title: "Equipment",
                            body: <div >


                            </div>
                        },
                        {
                            title: "Cancellation Policy",
                            body: <div dangerouslySetInnerHTML={{ __html: data?.cancelPolicy?.en ?? "" }}>


                            </div>
                        },
                        {
                            title: "Hotel Policies",
                            body: <div dangerouslySetInnerHTML={{ __html: data?.policies?.en ?? "" }}>


                            </div>
                        },
                    ]} />
            </div>
            <div className="col-span-1 relative">
                {
                    !isChoseRoom ? <div className="bg-red-50 p-3 rounded-md">
                        <p className="text-red-500">Please select your room type to continue</p>
                        <p className="text-sm mt-2">Mon 30 Oct  -  Fri 3 Nov</p>
                        <p className="text-sm mt-2">2 adults · 0 children · 1 room</p>
                    </div>
                        :
                        <Cart />}

            </div>

        </div>
    </>
    return count % 2 == 0 ? content : <div>{content}</div>
}

function Cart({ className = "" }: { className?: string }) {
    const booking = useSelector<RootState>(state => state.booking) as Booking
    const dispatch: AppDispatch = useDispatch()
    return <>
        <div className={"bg-white p-3 sticky top-1 rounded-md border-2 border-blue-600  " + className}>

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
            <div className="flex flex-col">
                {
                    booking.room_booking.map((el, k) => {
                        return <div className="relative" key={k}>

                            <div className="border border-gray-200 rounded-md  mt-2 relative overflow-hidden">

                                <div className="p-3 bg-gray-200">
                                    {el.data.room_type_globale.name_en}
                                </div>
                                <div className="p-3 flex items-center">
                                    <MdPerson className="text-xl" />
                                    <div className="me-2"></div>
                                    {el.data.room.find(i=>i.id==el.id_room)?.noPerson} Person
                                    <div className="grow"></div>
                                    <span className="text-blue-600 text-sm font-bold">{el.price} DZD</span>
                                </div>

                            </div>
                            <span className="translate-x-1/2 translate-y-[-50%] top-0 cursor-pointer right-0 absolute w-5 h-5 flex items-center justify-center bg-red-600 text-white rounded-full"
                                onClick={() =>
                                    dispatch(
                                        changeBooking(
                                            {
                                                ...booking,
                                                room_booking:booking.room_booking.filter(item =>item.id_room!=el.id_room)
                                            }
                                        )
                                    )}>
                                <MdOutlineClear />
                            </span>
                        </div>
                    })
                }
            </div>


            <Button color="blue" className="w-full mt-4">
                Fill in your details
            </Button>
        </div >
    </>
}


