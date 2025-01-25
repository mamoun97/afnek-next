"use client"
import HotelApi from "@/api/hotel";
import CardHotel from "@/components/CardHotel";
import Container from "@/components/Container";
import FilterComponent from "@/components/FilterComponent";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { HotelListLoading } from "@/components/Loading";
import { AppDispatch, RootState } from "@/store";
import { FilterToPaginationFilter, transferDataGet } from "@/utils/transfer-data";
import { useEffect, useState } from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";



export default function HotelsFilter({ id_wilaya }: { id_wilaya?: string }) {
    const filterStore = useSelector<RootState>(state => state.filter) as Filter
    const dispatch: AppDispatch = useDispatch();
    
    const [filter, setFilter] = useState<PaginationFilter>({
        
        relations: ["room", "wilaya", "room.room_type_hotel", "gallery"],
        search: [],
        filter: [
            ...!!id_wilaya ? [{
                field: "id_wilaya",
                operation: "=",
                value: id_wilaya
            }] : [],
            ...FilterToPaginationFilter(filterStore).filter
        ]
    })
    const { data: hotels, isLoading } = HotelApi.useReadAll(transferDataGet(filter))
    useEffect(() => {

        setFilter({
            ...filter,
            filter: [
                ...!!id_wilaya ? [{
                    field: "id_wilaya",
                    operation: "=",
                    value: id_wilaya
                }] : [],
                ...FilterToPaginationFilter(filterStore).filter
            ]
        })
    }, [filterStore])
    return (
        <div>
            <Header isHome={false} showForm={true} />
            <Container className="mt-8">
                <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-1 grid-flow-row">
                    <div className="col-span-1">
                        <FilterComponent {...{ filter, setFilter }} />
                    </div>
                    <div className="col-span-3 max-lg:col-span-1 ">
                        {
                            isLoading ? <HotelListLoading /> : <div className="col-span-3 max-lg:col-span-1 grid grid-cols-1 gap-2">

                                {
                                    hotels?.data?.map((el, k) => {
                                        return <CardHotel data={el} key={k} />
                                    })
                                }
                            </div>
                        }
                        {
                            (!isLoading&&hotels&&hotels.count==0)&&<div className="flex items-center flex-col justify-center gap-4 p-6">
                                <IoIosInformationCircleOutline className="w-40 h-40 min-h-40 min-w-40 text-gray-500" />
                                <span className="text-2xl text-gray-500">No hotels</span>

                            </div>
                        }

                    </div>

                </div>
            </Container>
            <Footer />
        </div>
    )
}
