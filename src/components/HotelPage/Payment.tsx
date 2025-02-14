
import HotelCartInfo from "../HotelCartInfo"
import { IoCheckmarkCircle } from "react-icons/io5";
import { IoIosLock } from "react-icons/io";
import images from "../../assets";
import Image from "next/image";
import { BookingApi } from "@/api/booking";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import toast from "react-hot-toast"
import { useState } from "react";
import alertError from "@/utils/alertError";
import { Button, Checkbox, Input, Radio } from "rizzui";
import useLang from "@/lang/useLang";
export default function Payment({
  stepsComponent,
  hotel
}: {
  stepsComponent: any,
  hotel:HotelFull
}) {
  const {t}=useLang()
  const tr=t.hotel
  const booking = useSelector<RootState>(state => state.booking) as Booking
  const dispatch: AppDispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const createBooking = () => {
    setLoading(true)
    BookingApi.createBooking(booking).then(res => {
      setLoading(false)
      toast.success("booking create")

    }).catch((err: any) => {
      setLoading(false)
      alertError(err)
    })
  }
  return (
    <div>
      {stepsComponent}
      <div className="grid grid-cols-7 max-md:grid-cols-1 gap-3">
        <div className="col-span-5  max-md:col-span-1">
          <div className="bg-white rounded-md p-4 py-7">
            <h1 className=" text-lg font-bold">{tr.payment_method}</h1>
            <p className="">{tr.select_payment}</p>
            <div className="flex p-3 mt-3 max-sm:flex-col">
              <div className="flex flex-col min-w-[200px]">
                <span className="text-[12px] uppercase">{tr.total_amount}</span>
                <span className="text-base font-bold text-blue-600">28,068 {t.global.dzd}</span>
              </div>
              <div className="flex-col text-green-600 max-sm:mt-2">
                <span className="flex items-center text-[13px] mb-2">
                  <IoCheckmarkCircle className="text-xl" />
                  <div className="me-2"></div>
                  {tr.secure_transmission}
                </span>
                <span className="flex items-center text-[13px]">
                  <IoIosLock className="text-xl" />
                  <div className="me-2"></div>
                  {tr.data_protection}
                </span>
              </div>
            </div>
            <div className="bg-gray-100 rounded-md p-3 flex items-center mt-4">
              <Radio name="pay" />
              <div className="me-3"></div>
              <Image src={images.pay_hotel} className="h-5" alt="" />
              <div className="me-3"></div>
              {tr.pay_at_hotel}
            </div>
            <div className="bg-gray-100 rounded-md p-3 flex  mt-2">
              <Radio className="mt-1" name="pay" />
              <div className="me-3"></div>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <Image src={images.pay_dahabia} className="h-5" alt="" />
                  <div className="me-3"></div>
                  {tr.pay_by_card}
                </div>
                <div className="flex mt-3 text-[13px] items-center">
                  <Checkbox />
                  <div className="me-3"></div>
                  {tr.accept_terms}
                </div>
              </div>
            </div>
            <p className="text-red-600 mt-2 text-sm">{tr.bank_transfer_note}</p>
            <h1 className="text-base font-bold mt-3">{tr.promo_code}</h1>
            <div className="flex mt-2 text-[13px] items-center">
              <Checkbox />
              <div className="me-3"></div>
              {tr.have_promo}
            </div>
            <Input

              className="max-w-[220px] mt-2"
              placeholder={tr.enter_promo} />
            <p className="mt-3 text-sm max-w-xl">
              {tr.accept_booking_terms}
            </p>
            <Button className="mt-4 w-full"  onClick={() => {
              createBooking()
            }}>
              {loading && <svg aria-hidden="true" className="mx-2 inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
              </svg>}
              {tr.proceed_to_payment}</Button>
          </div>


        </div>
        <div className="col-span-2 max-md:col-span-1">
          <HotelCartInfo hotel={hotel} className=" bg-white rounded-md overflow-hidden" />
        </div>


      </div>
    </div>
  )
}