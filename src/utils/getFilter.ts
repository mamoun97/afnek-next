import moment from "moment"
import { FilterToPaginationFilter } from "./transfer-data"

export default function getFilter (filterStore:Filter,id_wilaya?:string){
    return {
        relations: ["room", "wilaya", "room.room_type_hotel", "gallery","nearby","amenity","tag"],
        search: [
            {
                field: "address",
                value: filterStore.address
            },
            ...filterStore.id?[
                {
                    field: "hotel.id",
                    value: filterStore.id+""
                },
            ]:[],
            
        ],
        filter: [
            ...!!id_wilaya ? [{
                field: "id_wilaya",
                operation: "=",
                value: id_wilaya
            }] : [],
            ...FilterToPaginationFilter(filterStore).filter
        ],
        date: filterStore.date_start && filterStore.date_end ?
            moment(filterStore.date_start).format("yyyy-MM-DD") + "," + moment(filterStore.date_end).format("yyyy-MM-DD")
            : undefined
    }
}