import Collapse from "../Collapse"
import HotelCartInfo from "../HotelCartInfo"
import { AiFillPlusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "@/store"
import { changeBooking } from "@/store/bookingSlice"
import { Button, Input, Radio, Select } from "rizzui";
export default function Details1({
  stepsComponent
}: {
  stepsComponent: any
}) {

  return (

    <div>
      {stepsComponent}
      <div className="grid grid-cols-7 max-md:grid-cols-1 gap-3">
        <div className="col-span-5  max-md:col-span-1">
          <div className="bg-white rounded-md p-4 py-7 text-center">
            <h1 className=" text-lg font-bold">Enter Your Details</h1>
            <p className="">We will use these details to share your booking information</p>
            <Collapse childClassName="bg-white" className="mt-6" title={<>
              <div className="flex w-full">
                <Radio name="typed" />
                <div className="me-2"></div>
                Yes, I'm the main guest
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
                I'm booking for sameone
              </div>
            </>} className="mt-4">
              <div className=" py-4">
                <Person />
              </div>
            </Collapse>
            <p className="text-center mt-6 text-red-600 text-sm">We will use these details to share your booking information</p>
            <p className="text-center text-sm">The confirmation email and booking voucher will be sent to the verified email address above.
              The hotel will contact you on the registered telephone number</p>
            <div className="grid grid-cols-5 gap-2 mt-5 max-sm:grid-cols-2">
              <Button variant="outline" className="col-span-2">
                <AiFillPlusCircle />
                <span className="me-2"></span>
                Add a guest
              </Button>
              <Button  className="col-span-3 max-sm:col-span-2">
                Proceed to select the payment method
              </Button>
            </div>
          </div>

        </div>
        <div className="col-span-2 max-md:col-span-1">
          <HotelCartInfo className=" bg-white rounded-md overflow-hidden" />
        </div>


      </div>
    </div>
  )
}
function Person() {
  const booking = useSelector<RootState>(state => state.booking) as Booking
  const dispatch: AppDispatch = useDispatch()
  return <div className="grid grid-cols-10 max-md:grid-cols-1 gap-3 text-start">
    <Select
      options={[]}
      label="Title"
      placeholder="-- title --"
      value=""
      className="col-span-2 max-md:col-span-1"
      onChange={() => { }}
    />
    <Input
      label="First name"
      placeholder="first name"
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
      label="Last name"
      placeholder="last name"
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
      label="Email Address"
      placeholder="email"
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
      label="Phone number"
      placeholder="email"
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