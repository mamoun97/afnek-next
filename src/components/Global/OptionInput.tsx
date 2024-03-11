
"use client"
import { FC, useState } from "react";

import { TextInput, TextInputProps } from "flowbite-react";
import { Button, Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import { MdRemove } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import useClickOutside from "@/hooks/click-out-side";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { changeFilter } from "@/store/filterSlice";

interface InputProps extends TextInputProps {

}
// interface OptionInputProps {
//     inputProps: InputProps
//     containerProps: DivHTMLAttributes
// }

const OptionInput: FC<InputProps> = (props) => {
    const filter = useSelector<RootState>(state => state.filter) as Filter
    const dispatch: AppDispatch = useDispatch();

    const [open, setOpen] = useState(false)
    const clickOutsideRef = useClickOutside({
        onOutsideClick: () => {
            setOpen(false)
        }
    });
    return <div className="grow w-full relative" ref={clickOutsideRef}>
        <TextInput {...props}
            placeholder={"2 Adult . 0 children . 1 room"}
            value={filter.adult+" Adult . "+filter.children+" children . "+filter.room+" room"}
            readOnly
            onFocus={() => setOpen(true)} />
        {open && <div className="animate-appearance-in absolute gap-2 top-[110%] left-0 right-0 bg-white text-gray-700 shadow-large rounded-lg p-5 flex flex-col">
            <div className="flex items-center">
                <span className="grow text-sm capitalize font-semibold">Adult</span>
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
                <span className="grow text-sm capitalize font-semibold">children</span>
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
                <span className="grow text-sm capitalize font-semibold">room</span>
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
    return <div className="flex items-center gap-1 border  rounded-lg">
        <Button onClick={onRemove} size="sm" isIconOnly variant="light" className="rounded-lg">
            <MdRemove />
        </Button>
        <span className="min-w-[40px] text-center">{value}</span>
        <Button onClick={onAdd} size="sm" isIconOnly variant="light" className="rounded-lg">
            <AiOutlinePlus />
        </Button>
    </div>
}
