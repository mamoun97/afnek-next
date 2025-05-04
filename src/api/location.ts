

import ApiConfig, { axios, getProtocol, http, swrOptions } from "./config";
import useSWR from "swr";

const getWilayas = async (query?: string): Promise<WilayaResponse> => {

    const { data } = await http().get("/location/wilaya/" + query);
    return data

}
const getCountriesGeo = async (query: string): Promise<CountriesGeoResponse> => {
   
    // const protocol = await getProtocol("https://api.geonames.org");
    const { data } = await axios.create({
        baseURL: `https://api.geonames.org`,
        headers: {
            "Content-type": "application/json",
        }
    }).get("searchJSON?username=bilalfali&"+query);
    return data

}


const useGetWilayas = (query?: string) => {
    const data = useSWR(query ? ApiConfig.countries + query : null, () => getWilayas(query), { ...swrOptions, ...{} })
    return data
}
const useGetCountriesGeo = (query?: string) => {
    const data = useSWR(query ? "Bilal-" + query : null, () => getCountriesGeo(query??""), { ...swrOptions, ...{} })
    return data
}

export const LocationApi = {
    useGetWilayas,useGetCountriesGeo

}
