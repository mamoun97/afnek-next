import ApiConfig, { http } from "./config";




const createBooking = async (dt: Booking): Promise<any> => {
    const { data } = await http().post(ApiConfig.bookingEndPoint, dt);
    return data
}



export const BookingApi={
    createBooking
}