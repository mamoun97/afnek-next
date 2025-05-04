

import ApiConfig, {  http, swrOptions } from "./config";
import useSWR from "swr";

const getWilayas = async (query?: string): Promise<WilayaResponse> => {

    const { data } = await http().get("/location/wilaya/" + query);
    return data

}
const getCountriesGeo = async (query: string): Promise<CountriesGeoResponse> => {
    const response = await fetch(`/api/geo?${query}`, {
        method: 'GET',
        headers: {
            "Content-type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data
}



const useGetWilayas = (query?: string) => {
    const data = useSWR(query ? ApiConfig.countries + query : null, () => getWilayas(query), { ...swrOptions, ...{} })
    return data
}
const useGetCountriesGeo = (query?: string) => {
    const data = useSWR(query ? "Bilal-" + query : null, () => getCountriesGeo(query ?? ""), { ...swrOptions, ...{} })
    return data
}

export const LocationApi = {
    useGetWilayas, useGetCountriesGeo

}
