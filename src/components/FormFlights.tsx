"use client"

import { useState } from 'react'
import { Radio, RadioGroup, Select, type SelectOption, Text } from "rizzui";
import { IoBed, IoPerson } from "react-icons/io5";
import { IoIosPerson } from "react-icons/io";
import OptionInput from './Global/OptionInput';
import { ActionIcon, Button, Input } from "rizzui";
import DatePicker from "./rizzui/DatePicker";
import useLang from "@/lang/useLang";
import Link from "next/link";
import { PiAirplaneTakeoffFill, PiAirplaneLandingFill } from "react-icons/pi";
import { LiaExchangeAltSolid } from "react-icons/lia";
import { MdFilterList } from 'react-icons/md';


export default function FormFlights() {

    const handleRangeChange = (dates: [Date | null, Date | null]) => {
        const [start, end] = dates;
    };
    const { t } = useLang()
    const [data, setData] = useState({
        dir: 1,
        option: 1
    })
    return <div className="w-full bg-white p-2 mt-2 rounded-[10px]">
        <div className="flex items-center gap-2 no-scrollbar overflow-auto">

            <Button
                onClick={() => setData({ ...data, dir: 1 })}
                size='sm' 
                color={data.dir==1?"primary":undefined}
                variant={data.dir==1?"solid":"flat"}
                className={' whitespace-nowrap '+(data.dir!=1?"text-primary":"")}
                rounded='pill'>
                {t.header.one_way}
            </Button>
            <Button
                onClick={() => setData({ ...data, dir: 2 })}
                size='sm'
                color={data.dir==2?"primary":undefined}
                variant={data.dir==2?"solid":"flat"}
                className={'whitespace-nowrap '+(data.dir!=2?"text-primary":"")}
                rounded='pill'>
                {t.header.round_trip}
            </Button>
            <Button
                onClick={() => setData({ ...data, dir: 3 })}
                size='sm'
                color={data.dir==3?"primary":undefined}
                variant={data.dir==3?"solid":"flat"}
                className={'whitespace-nowrap '+(data.dir!=3?"text-primary":"")}
                rounded='pill'>
                {t.header.multi_city}
            </Button>
        </div>
        <div className="flex items-center p-1 mt-2  w-full   gap-2 text-foreground  max-md:flex-col">

            <Input
                placeholder={t.header.where_from}
                type="text"
                prefix={<PiAirplaneTakeoffFill className="h-4 w-4 rtl:scale-x-[-1]" />}
                required className="grow w-full" />
            <ActionIcon variant="outline" rounded="full" className="min-w-7" size="sm">
                <LiaExchangeAltSolid className='max-md:rotate-90' />
            </ActionIcon>
            <Input
                placeholder={t.header.where_to}
                type="text"
                prefix={<PiAirplaneLandingFill className="h-4 w-4 rtl:scale-x-[-1]" />}
                required className="grow w-full" />



            <div className="grow w-full grid grid-cols-1">
                <DatePicker
                    calendarClassName="w-full"
                    onChange={handleRangeChange}
                    placeholderText={t.header.select_date}
                    inputProps={{
                        clearable: true,
                        onClear: () => {

                        },
                        className: " w-full ",
                    }}
                />
            </div>

            <Input
                placeholder={t.header.travelers}
                type="text"
                prefix={<IoPerson className="h-4 w-4 rtl:scale-x-[-1]" />}
                required className="grow w-full" />

            <Input
                placeholder={t.header.cabin}
                type="text"
                prefix={<MdFilterList className="h-4 w-4 rtl:scale-x-[-1]" />}
                required className="grow w-full" />

            <Link href="#" className='w-full'>
                <Button color="primary" className='w-full'>
                    {t.header.search}
                </Button>
            </Link>
        </div>
        <div className="mt-2 p-1">
            <RadioGroup
                value={data.option + ""}

                setValue={(v) => setData({ ...data, option: Number(v) })}
                className="flex gap-4 max-sm:flex-col "
            >
                <Radio
                    label={t.header.direct}
                    value={"1"}
                    size='sm'
                    labelClassName='text-foreground'
                />
                <Radio
                    label={t.header.luggage}
                    value={"2"}
                    size='sm'
                    labelClassName='text-foreground'
                />
                <Radio
                    label={t.header.refundable}
                    value={"3"}
                    size='sm'
                    labelClassName='text-foreground'
                />

            </RadioGroup>
        </div>
    </div>
}






