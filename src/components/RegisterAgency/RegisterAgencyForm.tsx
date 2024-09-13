import { useState } from "react";
import InputPaylod from "../Inputs/InputPaylod";
import { IoMdPersonAdd } from "react-icons/io";
import UploadImage from "../Inputs/UploadImage";
import { Button, Input, Select } from "rizzui";

export default function RegisterAgencyForm() {
    const [data, setData] = useState([
        {
            id: 1
        }
    ])
    return (
        <div>
            <form>
                <h1 className="font-bold text-xl mb-3">
                    Download the license or agency document
                </h1>
                <div className="grid grid-cols-2 max-md:grid-cols-1  gap-4 pt-3 ">
                    <Input
                        label="Enter agency name"
                        placeholder="Enter agency name"
                        value=""
                        className="col-span-1"
                        onChange={() => { }}
                    />
                    <Input
                        label="Agency ID"
                        placeholder="Enter registred agency ID"
                        value=""
                        className="col-span-1"
                        onChange={() => { }}
                    />
                    <Input
                        label="Address"
                        placeholder="Enter address"
                        value=""
                        className="col-span-2 max-md:col-span-1"
                        onChange={() => { }}
                    />
                    <Select
                        label="City"
                        placeholder="-- Select city --"
                        value={null}
                        options={[]}
                        className="col-span-1"
                        onChange={() => { }}
                    />
                    <Input
                        label="Zip code"
                        placeholder="Enter zip code"
                        value=""
                        className="col-span-1"
                        onChange={() => { }}
                    />
                </div>
                <h1 className="font-bold text-xl mb-3 mt-6">
                    Primary Contact Details
                </h1>
                <div className="grid grid-cols-1  gap-4 pt-3 ">
                    <InputPaylod
                        className="col-span-1"
                        label="">
                        <div className="bg-[#f6fbff] p-5 rounded-xl">
                            <p className="text-sm">
                                We send notifications, emails regarding reservations and other important information only to these primary contact details.
                            </p>
                            <div className="grid grid-cols-2 max-md:grid-cols-1  gap-4 pt-3 ">
                                <Input
                                    label="Main mobile number"
                                    placeholder="Enter number"
                                    value=""
                                    className="col-span-1"
                                    onChange={() => { }}
                                />
                                <Input
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
                        <Button color="secondary" onClick={() => setData([...data, { id: 1 }])}>
                            <IoMdPersonAdd className="text-xl me-2" />
                            Add another contact person
                        </Button>
                    </div>

                </div>
                <h1 className="font-bold text-xl mt-8">
                    Download the license or agency document
                </h1>
                <p>Afnek review and verify your license or agency document to approve your partnership.</p>
                <UploadImage className="mt-4" />
                <p>Please note: Document file size must be less than 5MB, supported file format: JPG, PNG, PDF</p>
                <div className="flex justify-center bg-gray-100 rounded-md py-10 px-4 mt-6">
                    <div className="max-w-3xl text-center">
                        By default, the commission for agents for each booking will be set at 5%. If you require further
                        clarification, please contact AFNEK Support.
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
                <Select
                    label="Title"
                    placeholder="-- title --"
                    value={null}
                    options={[]}
                    className="col-span-2 max-md:col-span-1"
                    onChange={() => { }}
                />
                <Input
                    label="First name"
                    placeholder="first name"
                    value=""
                    className="col-span-3 max-md:col-span-1"
                    onChange={() => { }}
                />
                <Input
                    label="Last name"
                    placeholder="last name"
                    value=""
                    className="col-span-3 max-md:col-span-1"
                    onChange={() => { }}
                />
                <Select
                    label="Select designation"
                    placeholder="-- Select designation --"
                    value={null}
                    options={[]}
                    className="col-span-3 max-md:col-span-1"
                    onChange={() => { }}
                />
            </div>
            <div className="grid grid-cols-6 max-md:grid-cols-2 gap-4 max-md:gap-2 pt-3 ">
                <Input
                    label="Main mobile number (1)"
                    placeholder="Enter number"
                    value=""
                    className="col-span-2 "
                    onChange={() => { }}
                />
                <Input
                    label="Main mobile number (2)"
                    placeholder="Enter number"
                    value=""
                    className="col-span-2"
                    onChange={() => { }}
                />
                <Input
                    label="Main email address"
                    placeholder="enter email"
                    value=""
                    className="col-span-2"
                    onChange={() => { }}
                />
            </div>

        </div>

    </InputPaylod>
}
