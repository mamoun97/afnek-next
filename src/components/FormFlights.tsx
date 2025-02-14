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
    return <div className="w-full bg-white p-2 mt-2 rounded-[10px]">
        <div className="flex items-center gap-2">
            <Button size='sm' color="primary" variant='solid'>
                Aller simple
            </Button>
            <Button size='sm' variant='flat' className='text-primary'>
                Aller-retour
            </Button>
            <Button size='sm' variant='flat' className='text-primary'>
                Multi-destination
            </Button>
        </div>
        <div className="flex items-center p-1 mt-2  w-full   gap-2 text-foreground  max-md:flex-col">

            <Input
                placeholder={"D’où partez-vous ?"}
                type="text"
                prefix={<PiAirplaneTakeoffFill className="h-4 w-4 rtl:scale-x-[-1]" />}
                required className="grow w-full" />
            <ActionIcon variant="outline" rounded="full" className="min-w-7" size="sm">
                <LiaExchangeAltSolid />
            </ActionIcon>
            <Input
                placeholder={"Où allez-vous ?"}
                type="text"
                prefix={<PiAirplaneLandingFill className="h-4 w-4 rtl:scale-x-[-1]" />}
                required className="grow w-full" />



            <div className="grow w-full grid grid-cols-1">
                <DatePicker
                    calendarClassName="w-full"
                    onChange={handleRangeChange}
                    placeholderText={"Date"}
                    inputProps={{
                        clearable: true,
                        onClear: () => {

                        },
                        className: " w-full ",
                    }}
                />
            </div>

            <Input
                placeholder={"Passagers"}
                type="text"
                prefix={<IoPerson className="h-4 w-4 rtl:scale-x-[-1]" />}
                required className="grow w-full" />

            <Input
                placeholder={"Class"}
                type="text"
                prefix={<MdFilterList className="h-4 w-4 rtl:scale-x-[-1]" />}
                required className="grow w-full" />

            <Link href="#">
                <Button color="primary">
                    {t.header.search}
                </Button>
            </Link>
        </div>
        <div className="mt-2 p-1">
            <RadioGroup
                value={"1"}

                setValue={() => { }}
                className="flex gap-4 max-sm:flex-col "
            >
                <Radio
                    label="Vol direct"
                    value="1"
                    size='sm'
                    labelClassName='text-foreground'
                />
                <Radio
                    label="Avec bagages"
                    value="2"
                    size='sm'
                    labelClassName='text-foreground'
                />
                <Radio
                    label="Remboursable"
                    value="3"
                    size='sm'
                    labelClassName='text-foreground'
                />

            </RadioGroup>
        </div>
    </div>
}






