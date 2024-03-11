
import { AxiosResponse } from "axios";
import { http } from "./config";
import { useQuery, useMutation, useQueryClient } from "react-query"

const readAll = async(filter: string): Promise<HotelResponse> => {
    // try {
    const {data}=await http().get("/hotel" + filter);
return data
    // } catch (error: any) {
    //     throw new Error(error.message);
    // }
}

const useReadAll = (filter: string) => {
    console.log("data ftchede")
    // return useQuery(["hotels"+filter],async()=>await readAll(filter))
    return useQuery({
        queryFn:()=>  readAll(filter),
        queryKey: ["hotels", filter],
        enabled: false,
        staleTime: 2000
    })
}
const read = async (id: number, filter: string = ""): Promise<HotelFull> => {
    const { data } = await http().get("/hotel/" + id + filter);
    return data
}
const useRead = async (id: number, filter: string) => {
    console.log("data ftchede")
    return useQuery({
        queryFn: () => read(id, filter),
        queryKey: ["hotel", id],
        enabled: false
    })
}

const setUp = async (d: { id: number, dt: Hotel }): Promise<AxiosResponse> => {

    return (await http().post("/hotel", d.dt)).data;

}

const useSetUp = async () => {

    return useMutation({
        mutationFn: (d: { id: number, dt: Hotel }) => setUp(d),
        onSuccess(data, variables, context) {
            const q = useQueryClient()
            if (data.status == 201) //create
            //204 update or delete toast
            {
                q.resetQueries({ queryKey: ["hotel", variables.id] })
            }
        },
    })
}

const HotelApi = {
    setUp,
    useReadAll,
    useRead,
    read,
    useSetUp
}
export default HotelApi