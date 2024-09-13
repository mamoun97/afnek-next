
// import { Button, Checkbox, Radio, Select } from "flowbite-react";
// import InputPaylod from "../Inputs/InputPaylod";
// import TextEditor from "../Inputs/TextEditor";
// import TextEditorSelect from "../Inputs/TextEditorSelect";
import { Button, Checkbox, Input, Radio, Select } from "rizzui";
import TextRich from "../Inputs/TextRich";
import { FaFile } from "react-icons/fa";
import InputPaylod from "../Inputs/InputPaylod";

export default function BasicInformation() {
  return (
    <div>
      <h1 className="text-primary  font-bold text-xl">
        Basic Information
      </h1>
      <form>
        <div className="grid grid-cols-10 max-md:grid-cols-5  gap-4 pt-3 ">
          <Input
            label="Enter the property name"
            placeholder="Enter the property name"
            value=""
            className="col-span-6 max-md:col-span-5"
            onChange={() => { }}
          />
          <Select
            options={[]}
            label="Star rating"
            placeholder="Enter the regitred agency id"
            value=""
            className="col-span-4 max-md:col-span-5"
            onChange={() => { }}
          />
          <Input
            label="Address"
            placeholder="Enter Address"
            value=""
            className="col-span-10 max-md:col-span-5"
            onChange={() => { }}
          />
          <Select
            options={[]}
            label="City"
            placeholder="Select city"
            value=""
            className="col-span-5"
            onChange={() => { }}
          />
          <Input
            label="Zip code"
            placeholder="Enter zip code"
            value=""
            className="col-span-5"
            onChange={() => { }}
          />
          <Input
            label="Latitude"
            placeholder="Enter latitude"
            value=""
            className="col-span-5"
            onChange={() => { }}
          />
          <Input
            label="Longitude"
            placeholder="Enter longitude"
            value=""
            className="col-span-5"
            onChange={() => { }}
          />
          <Select
            options={[]}
            label="Hotel nearby"
            placeholder="-- Select hotel nearby --"
            value=""
            className="col-span-5"
            onChange={() => { }}
          />
          <Input
            label="Total number of rooms available"
            placeholder="Enter number"
            value=""
            className="col-span-5"
            onChange={() => { }}
          />
          <Select
            options={[]}
            label="Pobular search"
            placeholder="-- Select Pobular search --"
            value=""
            className="col-span-5"
            onChange={() => { }}
          />
          <Select
            options={[]}
            label="Complimentary & hospitality"
            placeholder="-- Select Pobular search --"
            value=""
            className="col-span-5"
            onChange={() => { }}
          />
          <TextRich
            label="Onership policies"
            placeholder=""
            value=""
            className="col-span-10 max-md:col-span-5"
            onChange={() => { }}
          />
          <TextRich
            label="Property description"
            placeholder=""
            value=""
            className="col-span-10 max-md:col-span-5"
            onChange={() => { }}
          />
          <TextRich
            label="Special offers"
            placeholder=""
            value=""
            className="col-span-10 max-md:col-span-5"
            onChange={() => { }}
          />
          <p className="col-span-10 max-md:col-span-5 text-sm">
            Note: Please note that if you have any additional offers besides the Namlatic offer, please mention them here as well. The offer you provide here will not take into account the agreement between the hotel and Namlatic. As part of our relationship, Namlatic will promote your hotel by displaying these offers.
          </p>
          <InputPaylod
            className="col-span-10 max-md:col-span-5"
            label="Cancellation and Refund Policy">
            <div className="bg-gray-100 p-5 rounded-xl">
              <div className="flex items-center">
                <Radio name="cc" />
                <div className="me-3"></div>
                <div>
                  Free cancellation before
                  <Select className="scale-90 inline-block p-0 ms-2 me-2 max-w-[80px]"
                    size="sm"
                    options={[
                      {
                        label: "24h",
                        value: "24h"
                      },
                      {
                        label: "12h",
                        value: "12h"
                      }
                    ]} />
                  of AFNEK standard check-in time, the amount will be refunded with the service fee applied.
                </div>
              </div>
              <div className="flex mt-3 items-center">
                <Radio name="cc" />
                <div className="me-3"></div>
                <div>
                  Non-refundable - No refunds will be made at any time of cancellation after successful booking
                </div>
              </div>
              <Button color="primary" variant="flat" className="mt-2" >
                <FaFile className="text-xl me-2" />
                Read the cancellation policies
              </Button>
            </div>

          </InputPaylod>
          <InputPaylod
            className="col-span-10 max-md:col-span-5"
            label="Mode of payment">
            <div className="bg-gray-100 p-5 rounded-xl">
              <p className="text-sm">
                <span className="font-bold">Note:</span> By selecting the “Activate for a given date” option, the selected payment type will only be activated for the chosen period. So please choose carefully.
              </p>
              <div className="flex items-center mt-2">
                <Checkbox name="cc" defaultChecked />
                <div className="me-3"></div>
                <div>
                  Payment by CIB / DAHABIA card
                </div>
              </div>
              <div className="flex mt-3 items-center">
                <Checkbox name="cc" defaultChecked />
                <div className="me-3"></div>
                <div>
                  Bank transfer
                </div>
              </div>
              <div className="flex mt-3 items-center">
                <Checkbox name="cc" />
                <div className="me-3"></div>
                <div>
                  Pay at the hotel
                </div>
              </div>
            </div>

          </InputPaylod>
        </div>
      </form>
    </div>
  )
}
