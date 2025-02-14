import { IoLocationSharp } from "react-icons/io5";
import images from "../assets";
import ImageH from "./ImageH";
import { IoIosCalendar } from "react-icons/io";
import { IoBed } from "react-icons/io5";
import { MdPerson } from "react-icons/md";
import getNameTr from "@/utils/get-name-tr";
import useLang from "@/lang/useLang";
import ApiConfig from "@/api/config";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import moment from "moment";

export default function HotelCartInfo({
    className = "",
    hotel
}: {
    className?: string,
    hotel:HotelFull
}) {
    const filter = useSelector<RootState>(state => state.filter) as Filter
    const booking = useSelector<RootState>(state => state.booking) as Booking
    const {t,lang}=useLang()

    const itemsProp = [
        {
            icon: <IoIosCalendar />,
            title: t.hotel.check_in,
            desc: moment(filter.date_start).format("ddd D MMM")
        },
        {
            icon: <IoIosCalendar />,
            title: t.hotel.check_out,
            desc: moment(filter.date_end).format("ddd D MMM")
        },
        {
            icon: <IoBed />,
            title: "Nights",
            desc: "03"
        },
        {
            icon: <IoBed />,
            title: "Bedrooms",
            desc: "01"
        },
    ] 
    return (
        <div className={className}>
            <div className=" p-3">


                <ImageH src={ApiConfig.rootImagesUrl + hotel.image} className="" />
                <h1 className="text-lg font-bold mt-4">
                    {getNameTr(lang,hotel)}
                </h1>
                <div className="flex text-[13px] mt-2">
                    <IoLocationSharp className="text-2xl text-primary" />
                    <div className="me-2"></div>
                    <span>{hotel.address}</span>

                </div>
                <div className="mt-2"></div>
                {
                    itemsProp.map((el, k) => {
                        return <ItemProp {...el} key={k} />
                    })
                }
                <div className="flex flex-col gap-1 mt-2">
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
                            
                        </div>
                    })
                }
            </div>
                <div className="flex mt-2">
                    <span>{t.hotel.taxes} 9%</span>
                    <div className="grow"></div>
                    <span className="text-red-600 text-sm  font-bold">+1244 DZD</span>
                </div>
            </div>
            <div className="flex items-center mt-2 bg-primary text-white p-3 py-4">
                <div>
                    <h1 className="text-base font-bold">
                        {t.hotel.total_payment}
                    </h1>
                    <p className="text-[13px] font-normal">
                        {t.hotel.all_taxes_included}
                    </p>
                </div>
                <div className="grow"></div>
                <h1 className="text-base font-bold ">
                    28,068 DZD
                </h1>
            </div>
        </div>
    )
}

function ItemProp({
    icon,
    title,
    desc
}: {
    icon: any,
    title: string,
    desc: string
}) {
    return <div className="flex items-center py-1">
        <div className="text-2xl">
            {icon}
        </div>
        <div className="me-3"></div>
        <div className="flex flex-col">
            <span className="text-sm">{title}</span>
            <span className="text-[13px]">{desc}</span>
        </div>
    </div>
}
