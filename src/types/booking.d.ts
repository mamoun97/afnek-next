type Booking = {
    client_first_name: string,
    client_last_name: string,
    client_email: string,
    client_phone: string,
    id_hotel: number,
    from: string,
    to: string,
    room_booking: {
        id_room: number,
        number_of_room: number,
        price: number,
        addons: {
            name: string,
            price: number
        }[],
        data: RoomTypeHotel
    }[]
}


type Flight = {
    fullname: string,
    email: string,
    phone: string,
    type: "round_trip" | "one_way" | "multi",
    direct: boolean,
    luggage: boolean,
    refundable: boolean,
    data: {
        address_distination: string,
        address_depart: string,
        start_date: string,
        end_date?: string,
    }[],
    travelers: {
        adults: number,
        children: number,
        held_infants: number,
    },
    cabin: "economy" | "premium_economy" | "business" | "first",
}
type CountryLocation ={
    id: number,
    name_ar: string,
    name_fr: string,
    name_en: string,
    iso3: string,
    iso2: string,
    phonecode: string,
    capital: string,
    currency: string,
    currency_symbol: string,
    nationality: string,
    latitude: string,
    longitude: string
}
type CountryLocationResponse={
    count:number,
    data:CountryLocation[]
}