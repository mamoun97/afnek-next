"use client"

import { IoBed } from "react-icons/io5";
import { IoIosPerson } from "react-icons/io";
import OptionInput from './Global/OptionInput';
import { AppDispatch, RootState } from '@/store';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '@/store/filterSlice';
import { Button } from "rizzui";
import DatePicker from "./rizzui/DatePicker";
import useLang from "@/lang/useLang";
import Link from "next/link";
import WilayaSearch from "./WilayaSearch";
import { useEffect, useState } from "react";
import getNameTr from "@/utils/get-name-tr";
import { FaCalendarMinus, FaLocationDot } from "react-icons/fa6";

export default function FormBookingHeader() {
    const filter = useSelector<RootState>(state => state.filter) as Filter
    const dispatch: AppDispatch = useDispatch();
    const [wilaya, setWilaya] = useState<any>()

    const handleRangeChange = (dates: [Date | null, Date | null]) => {
        const [start, end] = dates;
        dispatch(changeFilter(
            {
                ...filter,
                date_start: start ?? "",
                date_end: end ?? ""
            }
        ))
    };
    const { t, lang } = useLang()

    useEffect(()=>{
        console.log(filter)
    },[filter])
    return <div className="w-full ">

        <div className="flex p-1 mt-2 w-full bg-white rounded-[10px] text-foreground  max-md:flex-col">
            <WilayaSearch
                isSearch={true}
                value={
                    wilaya?.code && getNameTr(lang, wilaya) ||
                    (filter?.address ?? "")
                }
                setValue={(e: any) => {
                   
                    setWilaya(e)
                    if (e)
                        dispatch(changeFilter(
                            {
                                ...filter,
                                id: e.code ? undefined : e.id,
                                
                            }
                        ))
                }}
                // containerClassName="min-w-[190px] grow max-md:min-w-full"
                containerClassName="grow w-full"
                // placeholder={t.header.select_wilaya}
                placeholder={t.header.ph_distination}
                prefix={<FaLocationDot className="h-4 w-4 " />}
            />
            {/* <div className="me-2 mt-1"></div>
            <Input
                placeholder={t.header.ph_distination}
                onChange={(e) => {
                    dispatch(changeFilter(
                        {
                            ...filter,
                            address: e.target.value
                        }
                    ))
                }}
                value={filter.address}
                type="text"
                prefix={<IoBed className="h-4 w-4 " />}
                required className="grow w-full" /> */}
            <div className="me-2 mt-1"></div>

            <div className="grow w-full grid grid-cols-1">
                <DatePicker
                
                    calendarClassName="w-full bg-black"
                    selected={filter.date_start}
                    onChange={handleRangeChange}
                    startDate={filter.date_start}
                    endDate={filter.date_end}
                    monthsShown={1}
                    placeholderText={t.header.ph_daterange}
                    selectsRange
                    minDate={new Date()}
                    inputProps={{
                        clearable: true,
                        prefix:<FaCalendarMinus className="h-4 w-4 " />,
                        onClear: () => {
                            dispatch(changeFilter(
                                {
                                    ...filter,
                                    date_start: null,
                                    date_end: null
                                }
                            ))
                        },

                        className: " w-full ",
                    }}
                />
            </div>

            <div className="me-2 mt-1"></div>
            <OptionInput
                type="text"
                prefix={<IoIosPerson className="h-4 w-4 " />}
                required className="grow"
            />


            <div className="me-2 mt-1"></div>
            <Link href={"/search/" + (wilaya && wilaya.code ? wilaya.code : "")} className="w-28 max-md:w-full">
                <Button color="primary" className="w-full">
                    {t.header.search}
                </Button>
            </Link>
        </div>
    </div>
}

