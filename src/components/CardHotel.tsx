
"use client"
import { MdCheck } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import Link from "next/link";
import { IoImage } from "react-icons/io5";
import { ApiConfig } from "@/api/config";
import { routes } from "@/data/routes";
import { Badge, Button } from "rizzui";
import Rating from "./rizzui/Rating";
import useLang from "@/lang/useLang";
import getNameTr from "@/utils/get-name-tr";
import { useMemo } from "react";
export default function CardHotel({ data }: { data: HotelFull }) {
    const { t, lang } = useLang()

    const minRoom = useMemo(() => {
        try {
            return data.room?.reduce((minItem, currentItem) =>
                currentItem.price < minItem.price ? currentItem : minItem
            )
        } catch (_) {
            return undefined
        }


    }, [data])
    return (
        <div className="border border-gray-300 rounded-xl p-4 max-md:p-2 flex max-md:flex-col max-md:items-center">

            <div className="w-1/4 max-md:min-w-[320px] max-sm:min-w-full max-sm:w-full max-sm:max-w-full max-w-xs">
                <div className="relative pt-[100%] bg-cover overflow-hidden bg-no-repeat bg-center rounded-lg" style={{
                    backgroundImage: "url(" + ApiConfig.rootImagesUrl + data.image + ")"
                }}>
                    {!data.image && <div className="absolute bg-gray-100 text-gray-400 top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center">
                        <IoImage className="text-2xl" />
                        <h1 className="text-xl ">no image</h1>
                    </div>}
                    <div className="absolute top-2 right-2 text-2xl text-gray-200 cursor-pointer">
                        <IoMdHeartEmpty />
                    </div>
                </div>
            </div>
            <div className="me-4 mb-4"></div>
            <div className="flex flex-col grow max-sm:w-full">

                <div className="flex max-sm:flex-col max-sm:mb-4 max-sm:items-center">
                    <div className="flex flex-col">
                        <div className="flex items-center max-sm:justify-center">
                            <h1 className="text-lg font-bold text-primary">{getNameTr(lang, data)}</h1>
                            <div className="me-2"></div>
                            <Rating size={"sm"} totalStars={data?.rating ?? 0} />
                            {/* <Rating size={"xs"}>
                                {
                                    [1, 2, 3, 4, 5].map((el, k) => {
                                        return <Rating.Star key={k} filled={(data?.rating ?? 0) >= el} />
                                    })
                                }


                            </Rating> */}

                        </div>
                        <div className="flex items-center text-sm">
                            <Link href={"#"} className="text-primary underline">{t.hotel.show_on_map}</Link>
                            <div className="me-2"></div>
                            4.5 {t.hotel.km} {t.hotel.from_centre}
                        </div>
                    </div>
                    <div className="grow"></div>
                    <div className="flex flex-col">
                        <div className="flex items-center">
                            <div className="flex flex-col items-end">
                                <span className="font-normal text-sm">{t.hotel.good}</span>
                                <span className="font-normal text-xs">247 {t.hotel.reviews}</span>
                            </div>
                            <div className="me-2"></div>
                            <Badge size="md" color="primary" className="h-8 w-8 rounded-md  leading-8 text-center">
                                {data.rating}
                            </Badge>
                        </div>

                    </div>
                </div>
                <div className="grow"></div>
                <div className="flex items-center max-sm:flex-col max-sm:mb-4 max-sm:w-full">
                    <div className="flex flex-col max-sm:items-center max-sm:mb-3">
                        <span className="text-sm">
                            {t.hotel.standard_double_room}
                        </span>
                        <span className="text-sm">
                            1 {t.hotel.large_double_bed}
                        </span>
                        <span className="text-sm text-green-600 flex items-center">
                            <MdCheck className="text-lg" />
                            <div className="me-3"></div>
                            {t.hotel.free_cancel}
                        </span>
                        <span className="text-sm text-green-600 flex items-center">
                            <MdCheck className="text-lg" />
                            <div className="me-3"></div>
                            {t.hotel.no_prepayment_need}
                        </span>
                    </div>
                    <div className="grow"></div>
                    <div className="flex flex-col items-end max-sm:items-center">
                        <span className="text-sm max-w-[60%]">
                            {/* 4 nights, 2 adults {minRoom.} */}
                            {!!minRoom?.noAdult && t.hotel.adult + " " + minRoom.noAdult + " , "}
                            {!!minRoom?.noBed && t.hotel.bed + " " + minRoom.noBed + " , "}
                            {!!minRoom?.noChildren && t.hotel.children + " " + minRoom.noChildren + " , "}
                            {!!minRoom?.noExtraBed && t.hotel.extrabed + " " + minRoom.noExtraBed + " , "}
                            {!!minRoom?.noInfant && t.hotel.infant + " " + minRoom.noInfant + " , "}
                            {!!minRoom?.noPerson && t.hotel.person + " " + minRoom.noPerson + " , "}
                        </span>
                        <span className="text-lg font-bold">
                            {
                                minRoom?.price ?? 0
                            } {t.global.dzd}
                        </span>
                        <span className="text-sm">
                            +4,000 {t.global.dzd} {t.hotel.taxes_charges}
                        </span>
                    </div>
                </div>
                <div className="grow"></div>
                <div className="flex items-center max-sm:grid max-sm:grid-cols-1 max-sm:gap-1 max-sm:w-full">
                    <span className="text-green-600 text-sm max-sm:col-span-1">
                        {t.hotel.total_nu_rooms} {data.room?.length ?? 0}
                    </span>
                    <div className="grow max-sm:hidden"></div>
                    <Button color="primary" variant="outline" size={"sm"}>{t.hotel.check_room_av}</Button>
                    <div className="me-2 max-sm:hidden"></div>
                    <Link href={routes.hotel(data.id)} className="max-sm:col-span-1">
                        <Button color="primary" size={"sm"} className="w-full">{t.global.continue}</Button>
                    </Link>

                </div>
            </div>
        </div>
    )
}
