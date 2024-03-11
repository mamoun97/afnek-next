import { Button, Radio } from "flowbite-react"
import Collapse from "../Collapse"
import TextEditorSelect from "../Inputs/TextEditorSelect"
import TextEditor from "../Inputs/TextEditor"
import HotelCartInfo from "../HotelCartInfo"
import { AiFillPlusCircle } from "react-icons/ai";
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
          <div className="bg-white rounded-md p-4 py-7">
            <h1 className=" text-lg font-bold">Enter Your Details</h1>
            <p className="">We will use these details to share your booking information</p>
            <Collapse childClassName="bg-white" className="mt-6" title={<>
              <Radio name="typed" />
              <div className="me-2"></div>
              Yes, I'm the main guest
            </>}>
              <div className=" py-4">
                <Person />
              </div>
            </Collapse>
            <Collapse childClassName="bg-white" title={<>
              <Radio name="typed" />
              <div className="me-2"></div>
              Yes, I'm the main guest
            </>} className="mt-4">
              <div className=" py-4">
                <Person />
              </div>
            </Collapse>
            <p className="text-center mt-6 text-red-600 text-sm">We will use these details to share your booking information</p>
            <p className="text-center text-sm">The confirmation email and booking voucher will be sent to the verified email address above.
              The hotel will contact you on the registered telephone number</p>
            <div className="grid grid-cols-5 gap-2 mt-5 max-sm:grid-cols-2">
              <Button color="blue" outline className="col-span-2">
                <AiFillPlusCircle />
                <span className="me-2"></span>
                Add a guest
              </Button>
              <Button color="blue" className="col-span-3 max-sm:col-span-2">
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
  return <div className="grid grid-cols-10 max-md:grid-cols-1 gap-3">
    <TextEditorSelect
      label="Title"
      placeholder="-- title --"
      value=""
      className="col-span-2 max-md:col-span-1"
      onChange={() => { }}
    />
    <TextEditor
      label="First name"
      placeholder="first name"
      value=""
      className="col-span-4 max-md:col-span-1"
      onChange={() => { }}
    />
    <TextEditor
      label="Last name"
      placeholder="last name"
      value=""
      className="col-span-4 max-md:col-span-1"
      onChange={() => { }}
    />
    <TextEditor
      label="Email Address"
      placeholder="email"
      value=""
      className="col-span-5 max-md:col-span-1"
      onChange={() => { }}
    />
    <TextEditor
      label="Phone number"
      placeholder="email"
      value=""
      className="col-span-5 max-md:col-span-1"
      onChange={() => { }}
    />
  </div>
}