
"use client"
import HotelApi from "@/api/hotel"
import Container from "@/components/Container"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Details1 from "@/components/HotelPage/Details"
import EnjoyYourTrip from "@/components/HotelPage/EnjoyYourTrip.tsx"
import HotelPage1 from "@/components/HotelPage/HotelPage1"
import Payment from "@/components/HotelPage/Payment"
import Steps from "@/components/Steps"
import { AppDispatch, RootState } from "@/store"
import { changeBooking } from "@/store/bookingSlice"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"



const steps = [
    {
        icon: 1,
        name: "Select a hotel"
    },
    {
        icon: 2,
        name: "Choose a room"
    },
    {
        icon: 3,
        name: "Enter your details"
    },
    {
        icon: 4,
        name: "Make your payment"
    },
    {
        icon: 5,
        name: "Enjoy your trip"
    },


]
export default function HotelPage({
    params: { id }
}: {
    params: { id: string }
}) {
    const booking = useSelector<RootState>(state => state.booking) as Booking
    const filter = useSelector<RootState>(state => state.filter) as Filter
    const dispatch: AppDispatch = useDispatch()

    if (booking.id_hotel == 0) {
        dispatch(changeBooking({
            client_first_name: "",
            client_last_name: "",
            client_email: "",
            client_phone: "",
            id_hotel: parseInt(id) ,
            from: filter.date_start,
            to: filter.date_end,
            room_booking: []
        }))
    }

    const [activeStep, setActiveStep] = useState(1)
    const { data: hotelInfo, isLoading } = HotelApi.useRead(
        parseInt(id),
        "?relations=amenity,gallery_hotel,tag,room_type_hotel,room_type_hotel.room,room_type_hotel.gallery_type,room_type_hotel.room_type_globale",
        {
            onSuccess: (res: HotelFull) => {
                // console.log(res)
            }
        })

    const StepsComponent = () => {
        return <div className="mt-6 mb-6 ">
            <Steps
                className={(activeStep == 0 || activeStep == 1) ? "bg-gray-100" : "bg-white"}
                {...{
                    activeStep, setActiveStep, isNumber: true, steps: steps.map((el, k) => {
                        return { ...el, onClick: () => { setActiveStep(k) } }
                    })
                }} />
        </div>
    }

    return (
        <div className={activeStep == 0 || activeStep == 1 ? "" : "bg-gray-100"}>

            <Header isHome={false} showForm={true} />

            {hotelInfo && <Container className="mt-8">
                {(activeStep == 0 || activeStep == 1) && <HotelPage1 data={hotelInfo} isChoseRoom={activeStep == 1} stepsComponent={<StepsComponent />} />}
                {activeStep == 2 && <Details1 stepsComponent={<StepsComponent />} />}
                {activeStep == 3 && <Payment stepsComponent={<StepsComponent />} />}
                {activeStep == 4 && <EnjoyYourTrip stepsComponent={<StepsComponent />} />}



            </Container>}
            {
                isLoading && <div className="min-h-screen flex justify-center items-center">
                    <svg aria-hidden="true" role="status" className="inline w-20 h-20 me-3 text-primary animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                    </svg>
                </div>
            }
            <Footer />
        </div>
    )
}


