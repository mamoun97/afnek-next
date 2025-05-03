import { FlightApi } from '@/api/flight';
import { LocationApi } from '@/api/location';
import useClickOutside from '@/hooks/click-out-side';
import useLang from '@/lang/useLang';
import { transferDataGet } from '@/utils/transfer-data';
import React, { useEffect, useState } from 'react'
// import { Input, Loader } from "rizzui";

import { MdOutlineClear } from 'react-icons/md';
import { Input, InputProps, Loader } from 'rizzui';

interface PropsType extends InputProps {
    isSearch?: boolean,
    valueC?: string,
    setValue: (e: any) => void,
    containerClassName?: string
}

export default function CountrySearch({ setValue, containerClassName = "", valueC = "", isSearch = false, ...props }: PropsType) {



const {lang}=useLang()
    const [name, setName] = useState(valueC);
    const [open, setOpen] = useState(false);
    const clickOutsideRef = useClickOutside({
        onOutsideClick: () => {
            setOpen(false)
        }
    });
    useEffect(() => {
        setName(valueC??"")
    }, [valueC])


    // const { data, isLoading } = FlightApi.useReadAllCountries(`?search=name_en:${name}`);
    const {data,isLoading}=LocationApi.useGetCountriesGeo(!!name?`name=${name}&lang=${lang}&maxRows=10`:undefined)
    return (
        <div className={`w-full relative ${open ? "z-50" : ""}  containerClassName`} ref={clickOutsideRef}>

            <Input
                value={name}
                type='text'
                {...isSearch ? {
                    isClearable: true,
                    onClear: () => {
                        setValue(null)
                    },

                } : {}}
                
                suffix={valueC ? <span onClick={() => {
                    setValue(null)
                }} className="rizzui-input-clear-btn input-clear-btn inline-flex shrink-0 transform items-center justify-center rounded-full bg-muted/70 backdrop-blur text-foreground/90 transition-all duration-200 ease-in-out hover:bg-primary hover:text-primary-foreground h-4 w-4 "><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-auto"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path></svg></span> : ""}
                onFocus={() => setOpen(true)}
                onChange={(e) => { setName(e.target.value) }}
                {...props}
            />
            {
                open&&!!name && <div className='relative z-50'>
                    <div
                        className="border bg-background rounded-lg  p-2 max-h-60 overflow-auto absolute top-1 left-0 right-0"
                    >

                        {
                            data?.geonames.filter((item, index, self) =>
                                index === self.findIndex(
                                  (t) =>
                                    t.countryName === item.countryName &&
                                    t.name === item.name
                                )
                              ).map((el, k: number) => {
                                return <React.Fragment key={k}>

                                    <div className="flex items-center gap-3 cursor-pointer p-2 px-3 rounded-md hover:bg-muted" onClick={() => {
                                        setOpen(false)
                                        setValue(el.countryName+", "+el.name )
                                    }}>



                                        <h1 className='text-sm whitespace-nowrap '>{el.countryName+", "+el.name}</h1>
                                    </div>

                                </React.Fragment>

                            })
                        }
                        {
                            data?.geonames.length === 0 && <div className='flex justify-center items-center h-24'>
                                No Data found
                            </div>
                        }
                        {
                            isLoading && <div className='flex justify-center items-center h-24'>

                                <Loader variant="spinner" />
                            </div>
                        }
                    </div>
                </div>
            }

        </div >
    );
}

