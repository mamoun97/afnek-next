type Room = {
    noRoomsAvailable: number,
    numberOfRooms: number,
    noBed: number,
    noInfant: number,
    noChildren: number,
    noPerson: number,
    noAdult: number,
    price: number,
    id_hotel: number,
    id_room_type: number
}

interface RoomFull extends Room {
    id: number,
    extraBedPrice: number,
    noExtraBed: number,
    isActive: boolean,
    created_at: string,
    updated_at: string,
    hotel?: HotelFull,
    room_type?: RoomType
}
type RoomResponse = {
    count: number,
    data: RoomFull[]
}


type RoomType = {
    id: number,
    name_fr?: string | null,
    name_en: string,
    name_ar?: string | null,
    icon?: string | null,
    created_at: string,
    updated_at: string
}

type RoomTypeResponse = {
    count: number,
    data: RoomType[]
}

interface Hotel {
    name_en: string,
    address: string,
    image: string,
    id_commune: number,
    id_wilaya: number,
    amenity_ids: number[],
    policies: {
        ar: string,
        fr: string,
        en: string
    },
    id_user: number
}
type HotelImage={
    id: number,
    path: string,
    id_hotel: number
}
interface HotelFull extends Hotel {
    id: number,
    name_fr: string,
    name_ar: string,
    description?: string | null,
    lat?: number | null,
    lng?: number | null,
    cover?: string | null,
    freeCancellation?: boolean,
    isActive?: boolean,
    gallery_hotel?:HotelImage[]|null,
    rating?: number,
    cancelPolicy?: any,
    commission?: any,
    created_at?: string,
    updated_at?: string,
    amenity?: Amenity[] | null,
    wilaya?: Wilaya | null,
    commune?: Commune | null,
    user?: User | null
}
type HotelResponse = {
    count: number,
    data: HotelFull[]
}


