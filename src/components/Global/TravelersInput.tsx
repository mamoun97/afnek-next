
"use client"
import { FC, useState } from "react";
import { MdRemove } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import useClickOutside from "@/hooks/click-out-side";

import { changeFilter } from "@/store/filterSlice";
import { ActionIcon, Input, InputProps } from "rizzui";
import useLang from "@/lang/useLang";

interface PropsInput extends InputProps {
    data: {
        adults: number,
        children: number,
        held_infants: number,
    }
    setData: Function
}

function TravelersInput({ data, setData, ...props }: PropsInput) {


    const [open, setOpen] = useState(false)
    const clickOutsideRef = useClickOutside({
        onOutsideClick: () => {
            setOpen(false)
        }
    });
    const { t } = useLang()
    return <div className="grow w-full relative z-10" ref={clickOutsideRef}>
        <Input
            {...props}
            placeholder={" "}
            value={t.header.passagers_p.replace("%DATA%",(data.adults+data.children+data.held_infants)+"")}
            onChange={() => { }}
            onFocus={() => setOpen(true)}
        />
        {open && <div className="animate-appearance-in border border-muted  absolute gap-2 top-[110%] left-0 right-0 bg-white text-gray-700 shadow rounded-lg p-5 flex flex-col">
            <div className="flex items-center">
                <div className="flex flex-col grow">
                    <span className="text-sm capitalize font-semibold">{t.header.adults}</span>
                    <span className="text-xs">{t.header.adults_old}</span>
                </div>
                <CustomButton value={data.adults}
                    onAdd={() => {
                        setData({
                            ...data,
                            adults: data.adults + 1
                        })
                    }}
                    onRemove={() => {
                        setData({
                            ...data,
                            adults: data.adults > 1 ? data.adults - 1 : data.adults
                        })
                    }}
                />
            </div>
            <div className="flex items-center">
                <div className="flex flex-col grow">
                    <span className=" text-sm capitalize font-semibold">{t.header.children}</span>
                    <span className="text-xs">{t.header.children_old}</span>
                </div>
                <CustomButton value={data.children}
                    onAdd={() => {
                        setData({
                            ...data,
                            children: data.children + 1
                        })
                    }}
                    onRemove={() => {
                        setData({
                            ...data,
                            children: data.children > 1 ? data.children - 1 : data.children
                        })
                    }}
                />
            </div>
            <div className="flex items-center">
                <div className="flex flex-col grow">
                    <span className=" text-sm capitalize font-semibold">{t.header.held_infants}</span>
                    <span className="text-xs">{t.header.held_infants_old}</span>
                </div>
                <CustomButton value={data.held_infants}
                    onAdd={() => {
                        setData({
                            ...data,
                            held_infants: data.held_infants + 1
                        })
                    }}
                    onRemove={() => {
                        setData({
                            ...data,
                            held_infants: data.held_infants > 1 ? data.held_infants - 1 : data.held_infants
                        })
                    }}
                />
            </div>


        </div>}
    </div>

}


export default TravelersInput

function CustomButton({ value, onAdd,
    onRemove }: {
        value: number,
        onAdd: () => void,
        onRemove: () => void
    }) {
    return <div className="flex items-center gap-1 border p-1  rounded-[10px]">
        <ActionIcon onClick={onRemove} size="sm" variant="outline" className="rounded-lg">
            <MdRemove />
        </ActionIcon>
        <span className="min-w-[40px] text-center">{value}</span>
        <ActionIcon onClick={onAdd} size="sm" variant="outline" className="rounded-lg">
            <AiOutlinePlus />
        </ActionIcon>
    </div>
}
