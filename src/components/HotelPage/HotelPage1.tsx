
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
import { Button, Tab } from "rizzui";
import useLang from "@/lang/useLang";
import getNameTr from "@/utils/get-name-tr";
export default function HotelPage1({
    stepsComponent,
    isChoseRoom = false,
    data,
    setActiveStep
}: {
    stepsComponent: any,
    isChoseRoom?: boolean,
    data: HotelFull,
    setActiveStep:Function
}) {
    const {t,lang}=useLang()
    const filter = useSelector<RootState>(state => state.filter) as Filter
    
    return <div key={"hotel" + data.id}>
        <HotelPageHeaderComponent data={data} />
        {stepsComponent}
        
        <h1 className="text-xl font-bold mb-6">
            {t.hotel.room_types}
        </h1>
        <div className="grid grid-cols-3 gap-3 max-md:grid-cols-1">
            <div className="col-span-2 flex gap-2 flex-col max-md:col-span-1">
                {
                    data.room_type_hotel?.map((el, k) => {
                        return <Collapse defaultOpen={true} title={getNameTr(lang,el.room_type_globale)} key={k}>
                            <RoomCards data={el} hotel={data} />
                        </Collapse>
                    })
                }

                <Tab>
                    <Tab.List>
                        <Tab.ListItem>{t.hotel.description}</Tab.ListItem>
                        <Tab.ListItem>{t.hotel.equipment}</Tab.ListItem>
                        <Tab.ListItem>{t.hotel.cancellation_policy}</Tab.ListItem>
                        <Tab.ListItem>{t.hotel.hotel_policies}</Tab.ListItem>
                    </Tab.List>
                    <Tab.Panels>
                        <Tab.Panel>
                            <div dangerouslySetInnerHTML={{ __html: data.discription?getNameTr(lang,data.discription) : "" }}>
                            </div>
                        </Tab.Panel>
                        <Tab.Panel>
                            <div >
                            </div>
                        </Tab.Panel>
                        <Tab.Panel>
                            <div dangerouslySetInnerHTML={{ __html: data.cancelPolicy?getNameTr(lang,data.cancelPolicy) : "" }}>
                            </div>
                        </Tab.Panel>
                        <Tab.Panel>
                            <div dangerouslySetInnerHTML={{ __html: data.policies?getNameTr(lang,data.policies) : "" }}>
                            </div>
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab>
                
            </div>
            <div className="col-span-1 relative">
                {
                    !isChoseRoom ? <div className="bg-red-50 p-3 rounded-md">
                        <p className="text-red-500">{t.hotel.select_room}</p>
                        <p className="text-sm mt-2">{moment(filter.date_start).format("ddd D MMM")}  -  {moment(filter.date_end).format("ddd D MMM")}</p>
                        <p className="text-sm mt-2">{filter.adult} {t.hotel.adult} · {filter.children} {t.hotel.children} · {filter.room} {t.hotel.room}</p>
                    </div>
                        :
                        <Cart setActiveStep={setActiveStep}/>}

            </div>

        </div>
    </div>

}

function Cart({ className = "",setActiveStep }: { className?: string,setActiveStep:Function }) {
    const filter = useSelector<RootState>(state => state.filter) as Filter
    const booking = useSelector<RootState>(state => state.booking) as Booking
    const dispatch: AppDispatch = useDispatch()
    const {t,lang}=useLang()
    return <>
        <div className={"bg-white p-3 sticky top-1 rounded-md border-2 border-primary/70  " + className}>

            <h1 className="text-lg font-bold mt-4">
                30,227 {t.global.dzd}
            </h1>
            <div className="text-[13px]">
                <span>{t.hotel.all_taxes_included}</span>
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
                <span className="text-sm">{filter.adult} {t.hotel.adult} · {filter.children} {t.hotel.children} · {filter.room} {t.hotel.room}</span>
            </div>
            <div className="flex flex-col gap-1">
                {
                    booking.room_booking.map((el, k) => {
                        return <div className="relative " key={k}>

                            <div className="border border-gray-200 rounded-md  mt-2 relative overflow-hidden">

                                <div className="p-3 bg-gray-200">
                                    {getNameTr(lang,el.data.room_type_globale)}
                                </div>
                                <div className="p-3 flex items-center">
                                    <MdPerson className="text-xl" />
                                    <div className="me-2"></div>
                                    {el.data.room.find(i => i.id == el.id_room)?.noPerson} {t.hotel.person}
                                    <div className="grow"></div>
                                    <span className="text-primary/80 text-sm font-bold">{el.price} {t.global.dzd}</span>
                                </div>

                            </div>
                            <span className="ltr:translate-x-1/2 rtl:-translate-x-1/2 -translate-y-1/2 top-0 cursor-pointer ltr:right-0 rtl:left-0 absolute w-5 h-5 flex items-center justify-center bg-red-600 text-white rounded-full"
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


            <Button color="primary" className="w-full mt-4" onClick={()=>setActiveStep(2)}>
                {t.hotel.fill_details}
            </Button>
        </div >
    </>
}


