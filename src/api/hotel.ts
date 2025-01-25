
"use client"
import { AxiosResponse } from "axios";
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

    console.log(data.gallery_hotel)
    return data
}



const useRead = (id: number, filter: string,op:any={}) => {
    const data = useSWR(["hotel", id], async() =>  await read(id, filter), {
        ...swrOptions, ...{},...op
    })
    // console.log(data?.data)

    return data
}



const HotelApi = {
    useReadAll,
    useRead,
    read,
    readAll
}
export default HotelApi