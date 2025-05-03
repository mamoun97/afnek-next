
import HotelApi from '@/api/hotel';
import { LocationApi } from '@/api/location';
import useClickOutside from '@/hooks/click-out-side';
import useLang from '@/lang/useLang';
import getNameTr from '@/utils/get-name-tr';
import React, { useEffect, useState } from 'react'
import { FaHotel, FaLocationDot } from 'react-icons/fa6';
import { MdLocationOn } from 'react-icons/md';
import { Input, InputProps, Loader } from 'rizzui';

interface PropsType extends InputProps {
    isSearch?: boolean,
    value?: string,
    setValue: (e: Wilaya | HotelFull | null) => void,
    containerClassName?: string
}

export default function WilayaSearch({ setValue, containerClassName = "", value = "", isSearch = false, ...props }: PropsType) {

   
    const { lang } = useLang()

    const [name, setName] = useState(value);
    const [open, setOpen] = useState(false);
    const clickOutsideRef = useClickOutside({
        onOutsideClick: () => {
            setOpen(false)
        }
    });
    useEffect(() => {
        setName(value ?? "")
    }, [value])


    const { data, isLoading } = LocationApi.useGetWilayas(`?limit=3&search=name_en:${name},name_fr:${name},name_ar:${name}`);
   
    
    const { data: hotels,isLoading:isLoading2 } = HotelApi.useReadAll(
        `?page=0&limit=3&search=name_fr:${name},name_en:${name},name_ar:${name}&filter:room.noAdult:>=:0`)
    return (
        <div className={` relative ${open ? "z-50" : ""}  ${containerClassName}`} ref={clickOutsideRef}>

            <Input
                value={name}
                type='text'
                {...isSearch ? {
                    isClearable: true,
                    onClear: () => {
                        setValue(null)
                    },

                } : {}}
                prefix={<MdLocationOn className="h-4 w-4 " />}
                suffix={value || name ? <span onClick={() => {
                    setValue(null)
                    setName("")
                }} className="rizzui-input-clear-btn input-clear-btn inline-flex shrink-0 transform items-center justify-center rounded-full bg-muted/70 backdrop-blur text-foreground/90 transition-all duration-200 ease-in-out hover:bg-primary hover:text-primary-foreground h-4 w-4 "><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-auto"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path></svg></span> : ""}
                onFocus={() => setOpen(true)}
                onChange={(e) => { setName(e.target.value) }}
                {...props}
            />
            {
                open && <div className='relative z-50'>
                    <div
                        className="border bg-background rounded-lg  p-2 max-h-60 overflow-auto absolute top-1 left-0 right-0"
                    >

                        {
                            data?.data.map((el, k: number) => {
                                return <React.Fragment key={k}>

                                    <div className="flex items-center gap-3 cursor-pointer p-2 px-3 rounded-md hover:bg-muted" onClick={() => {
                                        setOpen(false)
                                        setName(getNameTr(lang, el))
                                        setValue(el)
                                    }}>

                                        <FaLocationDot className='w-4 h-4 min-w-4 min-h-4' />

                                        <h1 className='text-sm whitespace-nowrap line-clamp-1 '>{getNameTr(lang, el)}</h1>
                                    </div>

                                </React.Fragment>

                            })
                        }
                        {
                            hotels?.data.map((el, k: number) => {
                                return <React.Fragment key={k}>

                                    <div className="flex items-center gap-3 cursor-pointer p-2 px-3 rounded-md hover:bg-muted" onClick={() => {
                                        setOpen(false)
                                        setName(getNameTr(lang, el))
                                        setValue(el)
                                    }}>

                                        <FaHotel className='w-4 h-4 min-w-4 min-h-4' />

                                        <h1 className='text-sm whitespace-nowrap line-clamp-1'>{getNameTr(lang, el)}</h1>
                                    </div>

                                </React.Fragment>

                            })
                        }
                        {
                            data?.data.length === 0&&hotels?.data.length === 0 && <div className='flex justify-center items-center h-24'>
                                No Data found
                            </div>
                        }
                        {
                            isLoading&&isLoading2 && <div className='flex justify-center items-center h-24'>

                                <Loader variant="spinner" />
                            </div>
                        }
                    </div>
                </div>
            }

        </div >
    );
}

