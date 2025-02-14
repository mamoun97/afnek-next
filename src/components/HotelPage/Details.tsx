import Collapse from "../Collapse"
import HotelCartInfo from "../HotelCartInfo"
import { AiFillPlusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "@/store"
import { changeBooking } from "@/store/bookingSlice"
import { Button, Input, Radio, Select } from "rizzui";
import useLang from "@/lang/useLang";
export default function Details1({
  stepsComponent,
  hotel,
  setActiveStep
}: {
  stepsComponent: any,
  hotel:HotelFull,
  setActiveStep:Function
}) {
  const {t}=useLang()
  return (

    <div>
      {stepsComponent}
      <div className="grid grid-cols-7 max-md:grid-cols-1 gap-3">
        <div className="col-span-5  max-md:col-span-1">
          <div className="bg-white rounded-md p-4 py-7 text-center">
            <h1 className=" text-lg font-bold">{t.hotel.enter_your_details}</h1>
            <p className="">{t.hotel.booking_info_message}</p>
            <Collapse childClassName="bg-white" defaultOpen={true} className="mt-6" title={<>
              <div className="flex w-full">
                <Radio name="typed" />
                <div className="me-2"></div>
                {t.hotel.main_guest}
              </div>
            </>}>
              <div className=" py-4">
                <Person />
              </div>
            </Collapse>
            <Collapse childClassName="bg-white" title={<>
              <div className="flex w-full">
                <Radio name="typed" />
                <div className="me-2"></div>
                {t.hotel.booking_for_someone}
              </div>
            </>} className="mt-4">
              <div className=" py-4">
                <Person />
              </div>
            </Collapse>
            <p className="text-center mt-6 text-red-600 text-sm">{t.hotel.booking_info_message}</p>
            <p className="text-center text-sm">{t.hotel.confirmation_email_message}
              {t.hotel.hotel_contact_message}</p>
            <div className="grid grid-cols-5 gap-2 mt-5 max-sm:grid-cols-2">
              <Button variant="outline" className="col-span-2">
                <AiFillPlusCircle />
                <span className="me-2"></span>
                {t.hotel.add_guest}
              </Button>
              <Button onClick={()=>setActiveStep(3)} className="col-span-3 max-sm:col-span-2">
                {t.hotel.proceed_payment}
              </Button>
            </div>
          </div>

        </div>
        <div className="col-span-2 max-md:col-span-1">
          <HotelCartInfo hotel={hotel} className=" bg-white rounded-md overflow-hidden" />
        </div>


      </div>
    </div>
  )
}
function Person() {
  const {t}=useLang()
  const booking = useSelector<RootState>(state => state.booking) as Booking
  const dispatch: AppDispatch = useDispatch()
  
  return <div className="grid grid-cols-10 max-md:grid-cols-1 gap-3 text-start">
    <Select
      options={[]}
      label={t.hotel.title}
      placeholder={"-- "+t.hotel.title+" --"}
      value=""
      className="col-span-2 max-md:col-span-1"
      onChange={() => { }}
    />
    <Input
      label={t.hotel.first_name}
      placeholder={t.hotel.first_name}
      value={booking.client_first_name}
      className="col-span-4 max-md:col-span-1"
      onChange={(e: any) => {
        dispatch(changeBooking({
          ...booking,
          client_first_name: e.target.value
        }))
      }}
    />
    <Input
      label={t.hotel.last_name}
      placeholder={t.hotel.last_name}
      value={booking.client_last_name}
      className="col-span-4 max-md:col-span-1"
      onChange={(e: any) => {
        dispatch(changeBooking({
          ...booking,
          client_last_name: e.target.value
        }))
      }}
    />
    <Input
      label={t.hotel.email_address}
      placeholder={t.hotel.email_address}
      value={booking.client_email}
      className="col-span-5 max-md:col-span-1"
      onChange={(e: any) => {
        dispatch(changeBooking({
          ...booking,
          client_email: e.target.value
        }))
      }}
    />
    <Input
      label={t.hotel.phone_number}
      placeholder={t.hotel.phone_number}
      value={booking.client_phone}
      className="col-span-5 max-md:col-span-1"
      onChange={(e: any) => {
        dispatch(changeBooking({
          ...booking,
          client_phone: e.target.value
        }))
      }}
    />
  </div>
}