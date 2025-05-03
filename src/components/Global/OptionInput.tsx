
"use client"
import { FC, useState } from "react";
import { MdRemove } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import useClickOutside from "@/hooks/click-out-side";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { changeFilter } from "@/store/filterSlice";
import { ActionIcon,  Input, InputProps } from "rizzui";
import useLang from "@/lang/useLang";



const OptionInput: FC<InputProps> = (props) => {
    const filter = useSelector<RootState>(state => state.filter) as Filter
    const dispatch: AppDispatch = useDispatch();

    const [open, setOpen] = useState(false)
    const clickOutsideRef = useClickOutside({
        onOutsideClick: () => {
            setOpen(false)
        }
    });
    const {t}=useLang()
    return <div className="grow w-full relative z-40" ref={clickOutsideRef}>
        <Input 
        className="cursor-default"
        {...props}
            placeholder={`2 ${t.header.adult} . 0 ${t.header.children} . 1 ${t.header.room}`}
            value={`${filter.adult} ${t.header.adult} . ${filter.children} ${t.header.children} . ${filter.room} ${t.header.room}`}
            onChange={() =>{}} 
            onFocus={() => setOpen(true)} 
            />
        {open && <div className="animate-appearance-in absolute gap-2 top-[110%] left-0 right-0 bg-white text-gray-700 shadow-large rounded-lg p-5 flex flex-col">
            <div className="flex items-center">
                <span className="grow text-sm capitalize font-semibold">{t.header.adult}</span>
                <CustomButton value={filter.adult}
                    onAdd={() => {
                        dispatch(changeFilter({
                            ...filter,
                            adult: filter.adult + 1
                        }))
                    }}
                    onRemove={() => {
                        dispatch(changeFilter({
                            ...filter,
                            adult: filter.adult > 1 ? filter.adult - 1 : filter.adult
                        }))
                    }}
                />
            </div>
            <div className="flex items-center">
                <span className="grow text-sm capitalize font-semibold">{t.header.children}</span>
                <CustomButton value={filter.children}
                    onAdd={() => {
                        dispatch(changeFilter({
                            ...filter,
                            children: filter.children + 1
                        }))
                    }}
                    onRemove={() => {
                        dispatch(changeFilter({
                            ...filter,
                            children: filter.children > 1 ? filter.children - 1 : filter.children
                        }))
                    }}
                />
            </div>
            <div className="flex items-center">
                <span className="grow text-sm capitalize font-semibold">{t.header.room}</span>
                <CustomButton value={filter.room}
                    onAdd={() => {
                        dispatch(changeFilter({
                            ...filter,
                            room: filter.room + 1
                        }))
                    }}
                    onRemove={() => {
                        dispatch(changeFilter({
                            ...filter,
                            room: filter.room > 1 ? filter.room - 1 : filter.room
                        }))
                    }}
                />
            </div>


        </div>}
    </div>

}


export default OptionInput

function CustomButton({ value, onAdd,
    onRemove }: {
        value: number,
        onAdd: () => void,
        onRemove: () => void
    }) {
    return <div className="flex items-center gap-1 border p-1  rounded-[10px]">
        <ActionIcon onClick={onRemove} size="sm"  variant="outline" className="rounded-lg">
            <MdRemove />
        </ActionIcon>
        <span className="min-w-[40px] text-center">{value}</span>
        <ActionIcon onClick={onAdd} size="sm"  variant="outline" className="rounded-lg">
            <AiOutlinePlus />
        </ActionIcon>
    </div>
}
