
import ApiConfig, { http, swrOptions } from "./config";
import useSWR from "swr";

const getWilayas = async (query?:string): Promise<WilayaResponse> => {

    const { data } = await http().get("/location/wilaya/"+query);
    return data

}


const useGetWilayas= (query?:string) => {
    const data=useSWR(query?ApiConfig.countries+query:null, () => getWilayas(query), { ...swrOptions, ...{} })
    return data
}

export const LocationApi = {
    useGetWilayas,
    
}
