
import ApiConfig, { http, swrOptions } from "./config";
import useSWR from "swr";

const readAllAminty = async (): Promise<AmenityResponse> => {

    const { data } = await http().get(ApiConfig.amenityEndPoint);
    return data

}
const readAllTages = async (): Promise<TagResponse> => {

    const { data } = await http().get(ApiConfig.tagesEndPoint);
    return data

}
const readAllNearby = async (): Promise<NearbyResponse> => {

    const { data } = await http().get(ApiConfig.nerbyndPoint);
    return data

}

const useReadAllAminty = () => {
    const data=useSWR(ApiConfig.amenityEndPoint, () => readAllAminty(), { ...swrOptions, ...{} })
    return data
}
const useReadAllTages = () => {
    const data=useSWR(ApiConfig.tagesEndPoint, () => readAllTages(), { ...swrOptions, ...{} })
    return data
}
const useReadAllNearby = () => {
    const data=useSWR(ApiConfig.nerbyndPoint, () => readAllNearby(), { ...swrOptions, ...{} })
    return data
}
export const FilterApi = {
    useReadAllAminty,
    useReadAllTages,
    useReadAllNearby
}
