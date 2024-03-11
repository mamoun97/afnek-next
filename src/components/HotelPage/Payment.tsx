
import HotelCartInfo from "../HotelCartInfo"
import { IoCheckmarkCircle } from "react-icons/io5";
import { IoIosLock } from "react-icons/io";
import { Button, Checkbox, Radio, TextInput } from "flowbite-react";
import images from "../../assets";
import Image from "next/image";
export default function Payment({
  stepsComponent
}: {
  stepsComponent: any
}) {
  return (
    <div>
      {stepsComponent}
      <div className="grid grid-cols-7 max-md:grid-cols-1 gap-3">
        <div className="col-span-5  max-md:col-span-1">
          <div className="bg-white rounded-md p-4 py-7">
            <h1 className=" text-lg font-bold">Payment method</h1>
            <p className="">Select the payment method to confirm the reservation</p>
            <div className="flex p-3 mt-3 max-sm:flex-col">
              <div className="flex flex-col min-w-[200px]">
                <span className="text-[12px] uppercase">Total amount</span>
                <span className="text-base font-bold text-blue-600">28,068 DZD</span>
              </div>
              <div className="flex-col text-green-600 max-sm:mt-2">
                <span className="flex items-center text-[13px] mb-2">
                  <IoCheckmarkCircle className="text-xl" />
                  <div className="me-2"></div>
                  We use secure transmission
                </span>
                <span className="flex items-center text-[13px]">
                  <IoIosLock className="text-xl" />
                  <div className="me-2"></div>
                  We protect your personal information
                </span>
              </div>
            </div>
            <div className="bg-gray-100 rounded-md p-3 flex items-center mt-4">
              <Radio name="pay"/>
              <div className="me-3"></div>
              <Image src={images.pay_hotel} className="h-5" alt="" />
              <div className="me-3"></div>
              Payment at the hotel
            </div>
            <div className="bg-gray-100 rounded-md p-3 flex  mt-2">
              <Radio className="mt-1" name="pay"/>
              <div className="me-3"></div>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <Image src={images.pay_dahabia} className="h-5" alt="" />
                  <div className="me-3"></div>
                  Payment by CIB / DAHABIA card
                </div>
                <div className="flex mt-3 text-[13px] items-center">
                  <Checkbox />
                  <div className="me-3"></div>
                  I accepted the terms and conditions
                </div>
              </div>
            </div>
            <p className="text-red-600 mt-2 text-sm">Note: payment by bank transfer is possible up to 72 hours before your stay.</p>
            <h1 className="text-base font-bold mt-3">Promo Code</h1>
            <div className="flex mt-2 text-[13px] items-center">
              <Checkbox />
              <div className="me-3"></div>
              Select if you have a promotional code
            </div>
            <TextInput

              className="max-w-[220px] mt-2"
              placeholder="Enter promotional code" />
            <p className="mt-3 text-sm max-w-xl">
              By clicking on book now, I accept the booking conditions & the general conditions
              of use and services of Afnek
            </p>
            <Button className="mt-4 w-full" color="blue">Proceed to payment</Button>
          </div>


        </div>
        <div className="col-span-2 max-md:col-span-1">
          <HotelCartInfo className=" bg-white rounded-md overflow-hidden" />
        </div>


      </div>
    </div>
  )
}