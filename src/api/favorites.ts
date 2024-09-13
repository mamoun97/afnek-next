
// import { useQuery } from "react-query";
import ApiConfig, { http } from "./config";

const createFavHotel = async (id_hotel: number,id_user:string): Promise<any> => {

    const { data } = await http().post(ApiConfig.favHotelEndPoint, {
        id_hotel,id_user
    });
    return data

}

const readAllFavHotels = async (filter: string): Promise<any> => {

    const { data } = await http().get(ApiConfig.favHotelEndPoint + filter);
    return data

}
const removeFavHotel = async (id_hotel: number): Promise<any> => {

    const { data } = await http().delete(ApiConfig.favHotelEndPoint + id_hotel,);
    return data

}



const useReadAllFavHotels = (filter: string) => {

    // return useQuery({
    //     queryFn: () => readAllFavHotels(filter),
    //     queryKey: [ApiConfig.favHotelEndPoint, filter],
    //     enabled: false,
    //     staleTime: 2000
    // })
}

export const FavoritesApi = {
    createFavHotel,
    removeFavHotel,
    useReadAllFavHotels
}