import HotelBooking from "../components/hotel-booking"



export default function HotelPage({
    params: { id }
}: {
    params: { id: string }
}) {

    
    return (
        <div >

            <HotelBooking id={id}/>
            
        </div>
    )
}



