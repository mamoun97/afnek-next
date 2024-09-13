import { IoLocationSharp } from "react-icons/io5";
import images from "../assets";
import ImageH from "./ImageH";
import { IoIosCalendar } from "react-icons/io";
import { IoBed } from "react-icons/io5";
import { MdPerson } from "react-icons/md";
const itemsProp = [
    {
        icon: <IoIosCalendar />,
        title: "Check in",
        desc: "Mon, 30 Oct 2023 - 12:00"
    },
    {
        icon: <IoIosCalendar />,
        title: "Check out",
        desc: "Teu, 02 Nov 2023 - 11:00"
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
export default function HotelCartInfo({
    className = ""
}: {
    className?: string
}) {
    return (
        <div className={className}>
            <div className=" p-3">


                <ImageH src={images.grid3.src} className="pt-[60%]" />
                <h1 className="text-lg font-bold mt-4">
                    Hôtel des Beaux Arts
                </h1>
                <div className="flex text-[13px] mt-2">
                    <IoLocationSharp className="text-2xl text-primary" />
                    <div className="me-2"></div>
                    <span>169, Rue Colonel Karim Belkacem, Alger centre, Alger, Algérie</span>

                </div>
                <div className="mt-2"></div>
                {
                    itemsProp.map((el, k) => {
                        return <ItemProp {...el} key={k} />
                    })
                }
                <div className="border border-gray-200 rounded-md overflow-hidden mt-2">
                    <div className="p-3 bg-gray-200">
                        2X - Suite Senior
                    </div>
                    <div className="p-3 flex items-center">
                        <MdPerson className="text-xl" />
                        <div className="me-2"></div>
                        1 Person
                        <div className="grow"></div>
                        <span className="text-primary text-sm font-bold">27,732 DZD</span>
                    </div>

                </div>
                <div className="flex mt-2">
                    <span>Taxes 9%</span>
                    <div className="grow"></div>
                    <span className="text-red-600 text-sm  font-bold">+1244 DZD</span>
                </div>
            </div>
            <div className="flex items-center mt-2 bg-primary text-white p-3 py-4">
                <div>
                    <h1 className="text-base font-bold">
                        Total amount to pay
                    </h1>
                    <p className="text-[13px] font-normal">
                        All taxes included
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
