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
        }[]
    }[]
}