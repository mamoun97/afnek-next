
"use client"
import { MdPerson } from "react-icons/md";
import { IoIosCalendar, IoIosPerson } from "react-icons/io";
import HotelPageHeaderComponent from "./HotelPageHeaderComponent";
import Collapse from "../Collapse";
import { MdOutlineClear } from "react-icons/md";
import RoomCards from "../RoomCards";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { changeBooking } from "@/store/bookingSlice";
import moment from "moment"
import DatePicker from "../rizzui/DatePicker";
import OptionInput from "../Global/OptionInput";
import { Button, Tab } from "rizzui";
export default function HotelPage1({
    stepsComponent,
    isChoseRoom = false,
    data
}: {
    stepsComponent: any,
    isChoseRoom?: boolean,
    data: HotelFull
}) {

    const filter = useSelector<RootState>(state => state.filter) as Filter
    
    return <div key={"hotel" + data.id}>
        <HotelPageHeaderComponent data={data} />
        {stepsComponent}
        <div className="mb-6 grid grid-cols-5 max-[820px]:grid-cols-4 max-sm:grid-cols-2 gap-2 p-2 bg-gray-100 rounded-md">

            <div className="col-span-2 grid">
                <DatePicker label="" placeholder="" onChange={() => { }} />
            </div>
            <div className="col-span-2">
                <OptionInput
                    type="text"
                    prefix={<IoIosPerson className="h-4 w-4 " />}
                    required
                />
            </div>
            <Button color="primary" className="col-span-1 max-[820px]:col-span-4 max-sm:col-span-2">
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
                        return <Collapse defaultOpen={true} title={el.room_type_globale.name_en} key={k}>
                            <RoomCards data={el} hotel={data} />
                        </Collapse>
                    })
                }

                <Tab>
                    <Tab.List>
                        <Tab.ListItem>Description</Tab.ListItem>
                        <Tab.ListItem>Equipment</Tab.ListItem>
                        <Tab.ListItem>Cancellation Policy</Tab.ListItem>
                        <Tab.ListItem>Hotel Policies</Tab.ListItem>
                    </Tab.List>
                    <Tab.Panels>
                        <Tab.Panel>
                            <div dangerouslySetInnerHTML={{ __html: data.discription?.en ?? "" }}>
                            </div>
                        </Tab.Panel>
                        <Tab.Panel>
                            <div >
                            </div>
                        </Tab.Panel>
                        <Tab.Panel>
                            <div dangerouslySetInnerHTML={{ __html: data?.cancelPolicy?.en ?? "" }}>
                            </div>
                        </Tab.Panel>
                        <Tab.Panel>
                            <div dangerouslySetInnerHTML={{ __html: data?.policies?.en ?? "" }}>
                            </div>
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab>
                
            </div>
            <div className="col-span-1 relative">
                {
                    !isChoseRoom ? <div className="bg-red-50 p-3 rounded-md">
                        <p className="text-red-500">Please select your room type to continue</p>
                        <p className="text-sm mt-2">{moment(filter.date_start).format("ddd D MMM")}  -  {moment(filter.date_end).format("ddd D MMM")}</p>
                        <p className="text-sm mt-2">{filter.adult} adults · {filter.children} children · {filter.room} room</p>
                    </div>
                        :
                        <Cart />}

            </div>

        </div>
    </div>

}

function Cart({ className = "" }: { className?: string }) {
    const filter = useSelector<RootState>(state => state.filter) as Filter
    const booking = useSelector<RootState>(state => state.booking) as Booking
    const dispatch: AppDispatch = useDispatch()
    return <>
        <div className={"bg-white p-3 sticky top-1 rounded-md border-2 border-primary/70  " + className}>

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
                <span className="text-sm">{moment(filter.date_start).format("ddd D MMM")}  -  {moment(filter.date_end).format("ddd D MMM")}</span>
            </div>
            <div className="flex items-center py-1">
                <div className="text-2xl">
                    <MdPerson className="text-xl" />
                </div>
                <div className="me-3"></div>
                <span className="text-sm">{filter.adult} adults · {filter.children} children · {filter.room} room</span>
            </div>
            <div className="flex flex-col gap-1">
                {
                    booking.room_booking.map((el, k) => {
                        return <div className="relative " key={k}>

                            <div className="border border-gray-200 rounded-md  mt-2 relative overflow-hidden">

                                <div className="p-3 bg-gray-200">
                                    {el.data.room_type_globale.name_en}
                                </div>
                                <div className="p-3 flex items-center">
                                    <MdPerson className="text-xl" />
                                    <div className="me-2"></div>
                                    {el.data.room.find(i => i.id == el.id_room)?.noPerson} Person
                                    <div className="grow"></div>
                                    <span className="text-primary/80 text-sm font-bold">{el.price} DZD</span>
                                </div>

                            </div>
                            <span className="translate-x-1/2 translate-y-[-50%] top-0 cursor-pointer right-0 absolute w-5 h-5 flex items-center justify-center bg-red-600 text-white rounded-full"
                                onClick={() =>
                                    dispatch(
                                        changeBooking(
                                            {
                                                ...booking,
                                                room_booking: booking.room_booking.filter(item => item.id_room != el.id_room)
                                            }
                                        )
                                    )}>
                                <MdOutlineClear />
                            </span>
                        </div>
                    })
                }
            </div>


            <Button color="primary" className="w-full mt-4">
                Fill in your details
            </Button>
        </div >
    </>
}


