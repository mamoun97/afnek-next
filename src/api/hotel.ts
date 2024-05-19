
"use client"
import ApiConfig, { http, swrOptions } from "./config";
import useSWR from "swr";
const readAll = async (filter: string): Promise<HotelResponse> => {

    const { data } = await http().get(ApiConfig.hotelEndPoint + filter);
    return data

}

const useReadAll = (filter: string) => {

    const data = useSWR(["hotels", filter], () => readAll(filter), { ...swrOptions, ...{} })
    return data

}
const read = async (id: number, filter: string = ""): Promise<HotelFull> => {
    const {data} = await http().get(ApiConfig.hotelEndPoint + "/" + id + filter);
    return data
}
const useRead =  (id: number, filter: string) => {
    const data = useSWR(["hotel", id], () => read(id, filter), { ...swrOptions, ...{} })
    return data
}



const HotelApi = {
    useReadAll,
    useRead,
    read
}
export default HotelApi