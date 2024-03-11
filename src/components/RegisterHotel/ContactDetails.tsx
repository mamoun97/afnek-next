"use client"
import { Button, Checkbox } from "flowbite-react";
import { useState } from "react"
import InputPaylod from "../Inputs/InputPaylod";
import TextEditor from "../Inputs/TextEditor";
import TextEditorSelect from "../Inputs/TextEditorSelect";

import { IoMdPersonAdd } from "react-icons/io";
export default function ContactDetails() {
  const [data, setData] = useState([
    {
      id: 1
    }
  ])
  return (
    <div>
      <h1 className="text-blue-700  font-bold text-xl">
        Contact details
      </h1>
      <form>
        <div className="grid grid-cols-1  gap-4 pt-3 ">
          <InputPaylod
            className="col-span-1"
            label="">
            <div className="bg-[#f6fbff] p-5 rounded-xl">
              <p className="text-sm">
                We send notifications, emails regarding reservations and other important information only to these primary contact details.
              </p>
              <div className="grid grid-cols-2 max-md:grid-cols-1  gap-4 pt-3 ">
                <TextEditor
                  label="Main mobile number"
                  placeholder="Enter number"
                  value=""
                  className="col-span-1"
                  onChange={() => { }}
                />
                <TextEditor
                  label="Main email address"
                  placeholder="Enter email"
                  value=""
                  className="col-span-1"
                  onChange={() => { }}
                />
              </div>
            </div>

          </InputPaylod>
          {
            data.map((el, k) => {
              return <ContactPerson data={el} key={k} />
            })
          }

          <div className="mt-6 flex justify-center ">
            <Button color="gray" onClick={()=>setData([...data,{id:1}])}>
              <IoMdPersonAdd className="text-xl me-2"/>
              Add another contact person
            </Button>
          </div>

        </div>
      </form>
    </div>
  )
}

function ContactPerson({ data }: { data: any }) {
  if (data) {

  }
  return <InputPaylod
    className="col-span-1"
    label="">
    <div className="bg-gray-50 p-5 rounded-xl">
      <p className="text-base">
        The contact details mentioned below will be used for communication between the Agency and Afnek. Contacts should
        not be the same as the main details.
      </p>
      <div className="grid grid-cols-11 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4 max-md:gap-2 pt-3 ">
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
          className="col-span-3 max-md:col-span-1"
          onChange={() => { }}
        />
        <TextEditor
          label="Last name"
          placeholder="last name"
          value=""
          className="col-span-3 max-md:col-span-1"
          onChange={() => { }}
        />
        <TextEditorSelect
          label="Select designation"
          placeholder="-- Select designation --"
          value=""
          className="col-span-3 max-md:col-span-1"
          onChange={() => { }}
        />
      </div>
      <div className="grid grid-cols-6 max-md:grid-cols-2 gap-4 max-md:gap-2 pt-3 ">
        <TextEditor
          label="Main mobile number (1)"
          placeholder="Enter number"
          value=""
          className="col-span-2 "
          onChange={() => { }}
        />
        <TextEditor
          label="Main mobile number (2)"
          placeholder="Enter number"
          value=""
          className="col-span-2"
          onChange={() => { }}
        />
        <TextEditor
          label="Main email address"
          placeholder="enter email"
          value=""
          className="col-span-2"
          onChange={() => { }}
        />
      </div>
      <div className="flex items-center mt-6 max-md:grid max-md:gap-2">
        Attribuer un role :
        <div className="me-2"></div>
        <ItemCheck text="Administration" checked={true} onChange={null}/>
        <div className="me-2"></div>
        <ItemCheck text="Billing" checked={false} onChange={null}/>
      </div>
    </div>

  </InputPaylod>
}

function ItemCheck({
  text,
  checked,
  onChange,
}:{
  text:string,
  checked:boolean,
  onChange:any,
}) {
  return <div className={"py-2 px-4 bg-white flex items-center rounded-lg border-2 "+(checked?"border-blue-600":"border-gray-200")}>
    <Checkbox defaultChecked checked={checked} onChange={onChange} />
    <div className="me-2"></div>
    <span>{text}</span>
  </div>
}