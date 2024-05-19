"use client"
import React, { useEffect, useState } from "react"
import { IoIosArrowDown } from "react-icons/io";
import { Checkbox, Radio, RangeSlider, Rating } from "flowbite-react";
import { Slider } from "@nextui-org/react";
import { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "@/store/filterSlice";
import { FilterApi } from "@/api/filter";

type FilterType = {
    amenity: number[],
    tag: number[],
    nearby: number[],
    rating: number[]
}
type PropsType = {
    filter: PaginationFilter,
    setFilter: (e: PaginationFilter) => void
}
export default function FilterComponent(props: PropsType) {
    const filter = useSelector<RootState>(state => state.filter) as Filter
    const dispatch: AppDispatch = useDispatch();
    const { data: amenity } = FilterApi.useReadAllAminty();
    const { data: tag } = FilterApi.useReadAllTages();
    const { data: nearby } = FilterApi.useReadAllNearby();
    const [data, setData] = useState<FilterType>({
        amenity: [],
        tag: [],
        nearby: [],
        rating: []
    })
    useEffect(() => {
        props.setFilter({
            ...props.filter,
            filter:[
                ...data.amenity.length?[{
                    field:"amenity",
                    operation:"in",
                    value:data.amenity
                }]:[],
                ...data.tag.length?[{
                    field:"tag",
                    operation:"in",
                    value:data.tag
                }]:[],
                ...data.nearby?[{
                    field:"nearby",
                    operation:"in",
                    value:data.nearby
                }]:[],
            ]
        })
    }, [data])
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
                    <Slider
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
            <div className="border-t border-gray-300"></div>
            <FilterItem text={"Rating"} >
                {
                    [5, 4, 3, 2, 1].map((its, index) => {
                        return <div className="flex items-center text-sm mt-2 mb-2" key={index}>
                            <Checkbox
                                className="rounded-sm" />
                            <div className="me-2"></div>
                            <Rating size={"xs"}>
                                {
                                    [1, 2, 3, 4, 5].map(r => {
                                        return <Rating.Star filled={r <= its ?? 5} />
                                    })
                                }
                            </Rating>

                        </div>
                    })
                }
            </FilterItem>
            {nearby && <React.Fragment>
                <div className="border-t border-gray-300"></div>
                <FilterItem text={"Nearby filter"} >

                    {
                        nearby.data.map((its, index) => {
                            return <div className="flex items-center text-sm mt-2 mb-2" key={index}>
                                <Checkbox
                                    checked={!!data.nearby.find(el => el == its.id)}
                                    onChange={() => setData({
                                        ...data,
                                        nearby: !!data.nearby.find(el => el == its.id) ? data.nearby.filter(el => el != its.id) :
                                            [...data.nearby, its.id]
                                    })}
                                    className="rounded-sm" />
                                <div className="me-2"></div>
                                {its.name_en}

                            </div>
                        })
                    }

                </FilterItem>
            </React.Fragment>}
            {tag && <React.Fragment>
                <div className="border-t border-gray-300"></div>
                <FilterItem text={"Complementary & hospitality"} >

                    {
                        tag.data.map((its, index) => {
                            return <div className="flex items-center text-sm mt-2 mb-2" key={index}>
                                <Checkbox
                                    className="rounded-sm"
                                    checked={!!data.tag.find(el => el == its.id)}
                                    onChange={() => setData({
                                        ...data,
                                        tag: !!data.tag.find(el => el == its.id) ? data.tag.filter(el => el != its.id) :
                                            [...data.tag, its.id]
                                    })}
                                />
                                <div className="me-2"></div>
                                {its.name_en}

                            </div>
                        })
                    }

                </FilterItem>
            </React.Fragment>}
            {amenity && <React.Fragment>
                <div className="border-t border-gray-300"></div>
                <FilterItem text={"Equipment"} >

                    {
                        amenity.data.map((its, index) => {
                            return <div className="flex items-center text-sm mt-2 mb-2" key={index}>
                                <Checkbox
                                    checked={!!data.amenity.find(el => el == its.id)}
                                    onChange={() => setData({
                                        ...data,
                                        amenity: !!data.amenity.find(el => el == its.id) ? data.amenity.filter(el => el != its.id) :
                                            [...data.amenity, its.id]
                                    })}
                                    className="rounded-sm" />
                                <div className="me-2"></div>
                                {its.name_en}

                            </div>
                        })
                    }

                </FilterItem>
            </React.Fragment>}


        </div >
    )
}



function FilterItem({ text, children }: { text: string, children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(true);

    return < >
        <div >
            <div onClick={() => setIsOpen(!isOpen)} className="p-3 ps-4 pe-4 text-sm font-semibold cursor-pointer flex items-center hover:bg-gray-100">
                {text}
                <div className="grow"></div>
                <IoIosArrowDown className={"transition " + (isOpen ? "rotate-[-180deg]" : "")} />
            </div>
            <div className={`ps-4 pe-4   overflow-hidden transition-padding duration-100 ${isOpen ? '  pb-2  animate-fadeIn max-h-[500px]' : 'animate-fadeOut max-h-0'}`}>
                {children}
            </div>
        </div>
    </>
}




