"use client"
import styled from "styled-components"
import React, { useState } from "react"
import { IoIosArrowDown } from "react-icons/io";
import { Checkbox, Radio, RangeSlider, Rating } from "flowbite-react";
import { Slider } from "@nextui-org/react";
import { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "@/store/filterSlice";
const DivC = styled.div`

.children{
    overflow: hidden;
    transition: padding .1s;
}
.open{
    animation: fadeIn .5s;
    max-height: 500px;
}
@keyframes fadeIn {
  from {
    max-height: 0;
  }
  to {
    max-height: 500px;
  }
}
.close{
    animation: fadeOut .5s;
    max-height: 0;
}
@keyframes fadeOut {
  from {
    max-height: 500px;
  }
  to {
    max-height: 0;
  }
}
`

export default function FilterComponent() {
    const filter = useSelector<RootState>(state => state.filter) as Filter
    const dispatch: AppDispatch = useDispatch();
    return (
        <div className="border border-gray-300 rounded-xl  flex flex-col ">
            <div className="p-3 ps-4 pe-4 text-lg font-semibold flex mb-3 items-center">
                <span>Filter by</span>
                <div className="grow"></div>
                <span className=" text-blue-600 text-sm font-bold cursor-pointer">CLEAR ALL</span>

            </div>

            <FilterItem text="Prix">
                <div className="flex items-center text-sm mt-2 mb-2" >
                    <span>{filter.min_price} DA</span>
                    <div className="grow"></div>
                    <span>{filter.max_price} DA</span>
                </div>
                <div className="flex items-center text-sm mt-2 mb-2" >
                    {/* <RangeSlider className="w-full" /> */}
                    <Slider
                        // label=""
                        step={50}
                        minValue={1000}
                        size="sm"

                        maxValue={30000}
                        defaultValue={filter?.min_price && filter?.max_price ? [
                            filter.min_price, filter.max_price
                        ] : [4780, 21145]}
                        onChange={(e: any) => {
                            dispatch(changeFilter({
                                ...filter,
                                min_price: e[0],
                                max_price: e[1]
                            }))
                        }}
                        // formatOptions={{ style: "currency", currency: "DZD" }}
                        className="w-full"
                    />
                </div>
                <div className="flex items-center text-sm mt-3 mb-2" >
                    <Radio checked={filter.price_order == "ASC"} name="asc"
                        onChange={(_: any) => {
                            dispatch(changeFilter({
                                ...filter,
                                price_order: "ASC"
                            }))
                        }} />
                    <div className="me-2"></div>
                    Ascending price
                </div>
                <div className="flex items-center text-sm mt-2 mb-2" >
                    <Radio checked={filter.price_order == "DESC"} name="desk"
                        onChange={(_: any) => {
                            dispatch(changeFilter({
                                ...filter,
                                price_order: "DESC"
                            }))
                        }} />
                    <div className="me-2"></div>
                    Descending price
                </div>
            </FilterItem>
            {
                items.map((el, k) => {
                    return <React.Fragment key={k}>
                        <div className="border-t border-gray-300"></div>
                        <FilterItem text={el.title} >

                            {
                                el.items.map((its, index) => {
                                    return <div className="flex items-center text-sm mt-2 mb-2" key={index}>
                                        <Checkbox

                                            // checked={}
                                            // onChange={(_: any) => {
                                            //     dispatch(changeFilter({
                                            //         ...filter,
                                            //         rating: its?.value ?? 1
                                            //     }))
                                            // }}
                                            className="rounded-sm" />
                                        <div className="me-2"></div>
                                        {
                                            el.type == "rating"&&typeof its=="number" ? <Rating size={"xs"}>
                                                {
                                                    [1,2,3,4,5].map(r=>{
                                                        return <Rating.Star filled={r<=its??5}  />
                                                    })
                                                }
                                            </Rating> :
                                                its
                                        }

                                    </div>
                                })
                            }

                        </FilterItem>
                    </React.Fragment>
                })
            }


        </div>
    )
}



function FilterItem(props: any) {
    const [isOpen, setIsOpen] = useState(true);

    return <DivC >
        <div >
            <div onClick={() => setIsOpen(!isOpen)} className="p-3 ps-4 pe-4 text-sm font-semibold cursor-pointer flex items-center hover:bg-gray-100">
                {props.text}
                <div className="grow"></div>
                <IoIosArrowDown className={"transition " + (isOpen ? "rotate-[-180deg]" : "")} />
            </div>
            <div className={`ps-4 pe-4  children ${isOpen ? '  pb-2 open' : 'close'}`}>
                {props.children}
            </div>
        </div>
    </DivC>
}


type ItemsF = {
    title: string,
    type?: string,
    items: Array<number | string>
}[]


const items: ItemsF = [
    {
        title: "Property Assessment",
        type: "rating",
        items: [5, 4, 3, 2, 1]
    },
    {
        title: "Nearby filter",
        items: [
            "City center (urban)",
            "Beach",
            "Sahara",
            "Mountain",
            "Airport",
            "Thermal station",
            "Transport (Metro & Train)"
        ]
    },
    {
        title: "Complementary & hospitality",
        items: [
            "Breakfast",
            "Lunch",
            "Dinner"
        ]
    },
    {
        title: "Equipment",
        items: [
            "Free WIFI",
            "Power Backup",
            "Garden/backyard",
            "Spa",
            "Pool",
            "Gymnasium",
            "Laundry service",
            "Coffee",
            "Accepted animals",
            "On-site restaurant",
            "Payment by card"

        ]
    },
    {
        title: "Popular search",
        items: [
            "Couples",
            "Free cancellation policy",
            "Pay at the hote",
        ]
    }
]
