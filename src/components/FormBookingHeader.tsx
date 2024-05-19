"use client"

import {  TextInput } from 'flowbite-react'
import { IoBed } from "react-icons/io5";
import { IoIosPerson } from "react-icons/io";
import Datepicker, { DateValueType } from 'react-tailwindcss-datepicker';

import OptionInput from './Global/OptionInput';
import { AppDispatch, RootState } from '@/store';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '@/store/filterSlice';
import { Button } from '@nextui-org/react';

export default function FormBookingHeader() {
    const filter = useSelector<RootState>(state => state.filter) as Filter
    const dispatch: AppDispatch = useDispatch();
   

    const handleValueChange = (value: DateValueType, e?: HTMLInputElement | null | undefined) => {
        dispatch(changeFilter(
            {
                ...filter,
                date_start:value?.startDate??"",
                date_end:value?.endDate??""
            }
        ))
    }
    return <div className="flex p-1 mt-8  w-full bg-white rounded-lg max-md:flex-col">
        <TextInput
            placeholder="Chose where you want to stay"
            onChange={(e)=>{
                dispatch(changeFilter(
                    {
                        ...filter,
                        address:e.target.value
                    }
                ))
            }}
            value={filter.address}
            type="email" icon={IoBed} required className="grow w-full" />
        <div className="me-2 mt-1"></div>
        {/* <Datepicker  className="grow " /> */}
        <Datepicker
            value={
                filter?.date_start&&filter?.date_end?{
                    startDate:filter.date_start,
                    endDate:filter.date_end
                }:null
            }

            // asSingle
            popoverDirection={'down'}
            inputClassName={""}
            containerClassName={"relative w-full   !shadow-none text-gray-700 grow"}
            onChange={handleValueChange}
            showShortcuts={true}
        />

        <div className="me-2 mt-1"></div>
        <OptionInput
            // placeholder="2 Adult . 0 children . 1 room"

            type="text" icon={IoIosPerson} required className="grow"
        />
        {/* <TextInput
            placeholder="2 Adult . 0 children . 1 room"

            type="text" icon={IoIosPerson} required className="grow" /> */}

        <div className="me-2 mt-1"></div>
        <Button color="primary">
            Search
        </Button>
    </div>
}

