
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type BookingS = Booking | null

const initialState:Booking={
    client_first_name: "",
    client_last_name: "",
    client_email: "",
    client_phone: "",
    id_hotel: 0,
    from: "",
    to: "",
    room_booking: []
}

const bookingSlice = createSlice({
    name: "booking",
    initialState ,
    reducers: {
        changeBooking: (state: BookingS, action: PayloadAction<Booking>) => {
            state = action.payload;
            return state
        },
    },

});



export const { changeBooking } = bookingSlice.actions;

export default bookingSlice.reducer;