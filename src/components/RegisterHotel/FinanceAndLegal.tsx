
import { Select } from "rizzui";
import UploadImage from "../Inputs/UploadImage";
import DatePicker from "../rizzui/DatePicker";

export default function FinanceAndLegal() {
  return (
    <div>
      <h1 className="text-primary  font-bold text-xl">
        Finance and legal
      </h1>
      <h1 className="text-xl mt-4 mb-6 font-bold">
        Registration Incorporation Document
      </h1>
      <form>
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4 pt-3 ">
          <Select
            options={[]}
            label="Title of the document you are attaching:"
            placeholder="-- Select --"
            value=""
            className="col-span-2 max-md:col-span-1"
            onChange={() => { }}
          />
          <div className="grid col-span-1">
            <DatePicker

              inputProps={{
                label: "Document created on",
                placeholder: "-- Select --"
              }}
              onChange={() => { }}
            />
          </div>
          <div className="grid col-span-1">
            <DatePicker
              inputProps={{
                placeholder: "-- Select --",
                label: "Document valid until"

              }}
              onChange={() => { }}
            />
          </div>
        </div>
        <h1 className="text-xl mt-4 mb-6 font-bold">
          Download the document
        </h1>
        <UploadImage />
        <p>Please note: Document file size must be less than 5MB, supported file format: JPG, PNG, PDF</p>

      </form>
    </div>
  )
}
