import React, { useState } from 'react'
import GalleryRoom from './GalleryRoom'
import ApiConfig from '@/api/config'

import { IoIosBed } from 'react-icons/io'
import { FaBed } from 'react-icons/fa'

import { MdPerson, MdStar } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/store'
import { changeBooking } from '@/store/bookingSlice'
import { Badge, Select } from 'rizzui'


const MAX = 6
export default function RoomCards({ hotel, data }: {
    hotel: HotelFull,
    data: RoomTypeHotel
}) {
    const [moreAmenity, setMoreAmenity] = useState(MAX)
    const booking = useSelector<RootState>(state => state.booking) as Booking
    const dispatch: AppDispatch = useDispatch()
    return (
        <div className={`grid grid-cols-3  max-sm:grid-cols-2  max-sm:grid-rows-none gap-3  py-2`}>
            <div className="rounded-lg bg-white p-2   col-span-1 max-sm:col-span-2 relative">
                <div className='sticky top-0 '>
                    <GalleryRoom data={data.gallery_type} />
                    <p className="mt-5 sticky top-0">Equipment</p>
                    <div className=" mt-4 inline-block">
                        {
                            hotel.amenity?.map((el, k) => {
                                if (k < moreAmenity)
                                    return <div className='p-1 float-start'>
                                        <img src={ApiConfig.awsUrl + el.icon} className="w-5 h-5 " key={k} />
                                    </div>
                                return null
                            })
                        }
                        {
                            (moreAmenity < (hotel.amenity?.length ?? 0)) && <div className='p-1 float-start min-w-9'>
                                <span className=" p-1 rounded-2xl bg-gray-100 !min-w-9 text-xs text-center cursor-pointer"
                                    onClick={() => {
                                        setMoreAmenity(hotel.amenity?.length ?? 0)
                                    }}>+{(hotel.amenity?.length ?? 0) - MAX}</span>
                            </div>
                        }
                    </div>
                    <p className="text-green-500 text-sm mt-3">
                        Total number of available
                    </p>
                    <p className="text-green-500 text-sm">
                        rooms: {data.numberOfRooms}
                    </p>
                </div>
            </div>
            <div className='col-span-2 flex gap-2 flex-col h-full row-span-1'>
                {
                    data.room.map((el, k) => {
                        return <div className="rounded-lg bg-white p-4 grow  " key={k}>
                            <div className="flex items-center">
                                {
                                    Array(el.noPerson).fill(1).map(_ => <MdPerson className="text-xl" />)
                                }

                                <div className="me-1"></div>
                                {el.noPerson} Person
                                <div className="me-1"></div>
                                <Badge color="primary" size={"sm"}  className='flex gap-1 items-center'>
                                    <MdStar/>
                                    Recommended
                                </Badge>
                            </div>
                            <p className="mt-3 text-green-500 text-sm">
                                Max allowed: {el.noAdult} Adult, {el.noChildren} Children & {el.noInfant} Infant
                            </p>
                            <div className="flex items-center text-sm">
                                <IoIosBed />
                                <div className="me-2"></div>
                                X {el.noBed}
                                <div className="me-2"></div>
                                In addition
                                <div className="me-2"></div>
                                <FaBed />
                                <div className="me-2"></div>
                                X {el.noExtraBed}
                            </div>
                            <div className="flex items-center mt-4">
                                <div className="flex flex-col">
                                    
                                    {
                                        booking.room_booking.find(item => el.id == item.id_room)?.number_of_room ? <p className="text-green-500 ">
                                            Bedrooms
                                        </p> : <p className="text-primary/80 animate-blinker">
                                            Choose a room
                                        </p>
                                    }

                                    <Select
                                        label=""
                                        options={
                                            Array.from({ length: data.numberOfRooms + 1 }, (_, i) => i).map(el => {
                                                return {label:el+"",value:el}
                                            })
                                        }
                                        placeholder="-- bedrooms --"
                                        value={booking.room_booking.find(item => el.id == item.id_room)?.number_of_room ?? 0}

                                        className="p-0 shadow-green-500 scale-90"
                                        
                                        onChange={(ii: any) => {
                                            
                                            let e = ii.value
                                            dispatch(changeBooking({
                                                ...booking,
                                                room_booking: e == 0 ? booking.room_booking.filter(item => el.id != item.id_room) :
                                                    booking.room_booking.find(item => el.id == item.id_room) ?
                                                        booking.room_booking.map(item => {
                                                            return {
                                                                ...item,
                                                                number_of_room: Number(el.id == item.id_room ? e : item.number_of_room),
                                                                data:data
                                                            }
                                                        })
                                                        : [
                                                            ...booking.room_booking,
                                                            {
                                                                addons: [],
                                                                id_room: el.id,
                                                                price: el.price,
                                                                number_of_room: Number(e),
                                                                data:data
                                                            }
                                                        ]
                                            }))
                                        }}

                                    />
                                        
                                    
                                </div>
                                <div className="grow"></div>
                                <div className="flex flex-col items-end">
                                    <p className="text-sm">4 nights, {el.noAdult} adults</p>
                                    <p className="text-base font-bold">{el.price} DZD</p>
                                    <p className="text-sm">+9%  taxes and charges</p>
                                </div>
                            </div>

                        </div>
                    })
                }
            </div>


        </div>
    )
}
