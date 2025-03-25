
import ApiConfig, { http, swrOptions } from "./config";
import useSWR from "swr";

const getCountries = async (query:string): Promise<CountryLocationResponse> => {

    const { data } = await http().get(ApiConfig.countries+query);
    return data

}

const createFlight = async (dt: Flight): Promise<any> => {
    const { data } = await http().post(ApiConfig.flightCreate, dt);
    return data
}

const useReadAllCountries= (query:string) => {
    const data=useSWR(ApiConfig.countries+query, () => getCountries(query), { ...swrOptions, ...{} })
    return data
}

export const FlightApi = {
    useReadAllCountries,
    createFlight
}
