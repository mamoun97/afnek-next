"use client"

import { IoBed } from "react-icons/io5";
import { IoIosPerson } from "react-icons/io";
import OptionInput from './Global/OptionInput';
import { AppDispatch, RootState } from '@/store';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '@/store/filterSlice';
import { Button, Input } from "rizzui";
import DatePicker from "./rizzui/DatePicker";
import useLang from "@/lang/useLang";
import Link from "next/link";
import moment from "moment";
export default function FormBookingHeader() {
    const filter = useSelector<RootState>(state => state.filter) as Filter
    const dispatch: AppDispatch = useDispatch();


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
    const { t } = useLang()
    return <div className="w-full mt-8">
        <div className="flex items-center no-scrollbar overflow-auto">
            <Button variant="text" className="px-2 border-b-2 border-white rounded-none whitespace-nowrap" >
                {t.header.hotel_res}
            </Button>
            <Button className="px-2 rounded-none whitespace-nowrap">
                {t.header.flights}
            </Button>
            <Button className="px-2 rounded-none whitespace-nowrap">
                {t.header.organized_trips}
            </Button>
        </div>
        <div className="flex p-1 mt-2  w-full bg-white rounded-[10px] text-foreground  max-md:flex-col">
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
                required className="grow w-full" />
            <div className="me-2 mt-1"></div>

            <div className="grow w-full grid grid-cols-1">
                <DatePicker
                    calendarClassName="w-full bg-black"
                    selected={filter.date_start}
                    onChange={handleRangeChange}
                    startDate={filter.date_start}
                    endDate={filter.date_end}
                    monthsShown={2}
                    placeholderText={t.header.ph_daterange}
                    selectsRange

                    inputProps={{
                        clearable: true,
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
            <Link href="/search">
                <Button color="primary">
                    {t.header.search}
                </Button>
            </Link>
        </div>
    </div>
}

