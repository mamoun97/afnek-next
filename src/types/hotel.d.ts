type Room = {
    id: number,
    noRoomsAvailable: number,
    numberOfRooms: number,
    noBed: number,
    noInfant: number,
    noChildren: number,
    noPerson: number,
    noAdult: number,
    price: number,
    id_hotel: number,
    id_room_type: number,
    extraBedPrice: number,
    noExtraBed: number,
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
type TextTraduction={
    ar?: string,
    fr?: string,
    en: string
}
interface Hotel {
    name_en: string,
    address: string,
    image: string,
    id_commune: number,
    id_wilaya: number,
    amenity_ids: number[],
    policies: TextTraduction,
    id_user: number
}
type HotelImage ={
    id: number,
    path: string,
    id_hotel: number
}[]

interface HotelFull extends Hotel {
    id: number,
    name_fr: string|null,
    name_ar: string|null,
    discription?: TextTraduction,
    lat?: number | null,
    lng?: number | null,
    cover?: string | null,
    freeCancellation?: boolean,
    isActive?: boolean,
    gallery_hotel: [
        {
            "id": 1,
            "path": "hotel/1710513141500.jpeg",
            "id_type_room": 1
        },
        {
            "id": 2,
            "path": "hotel/1710513142234.jpeg",
            "id_type_room": 1
        }
    ],
    rating?: number,
    cancelPolicy?: TextTraduction,
    commission?: any,
    created_at?: string,
    updated_at?: string,
    amenity?: Amenity[] ,
    wilaya?: Wilaya ,
    commune?: Commune ,
    tag: Tag[],
    room_type_hotel: RoomTypeHotel[],
}
type HotelResponse = {
    count: number,
    data: HotelFull[]
}

type Tag = {
    id: number,
    name_ar: string|null,
    name_fr: string|null,
    name_en: string,
    color: string|null,
    icon: string
}

type RoomTypeHotel = {
    id: number,
    noRoomsAvailable: number,
    numberOfRooms: number,
    id_hotel: number,
    id_type: number,
    room: {
        id: number,
        extraBedPrice: number,
        noBed: number,
        noExtraBed: number,
        noInfant: number,
        noChildren: number,
        noPerson: number,
        noAdult: number,
        price: number,
        isActive: boolean,
        id_hotel: number,
        id_room_type_hotel: number
    }[],
    gallery_type: {
        id: number,
        path: string,
        id_type_room: number
    }[],
    room_type_globale: {
        id: number,
        name_fr: string|null,
        name_en: string,
        name_ar: string|null,
        icon: string
    }
}



