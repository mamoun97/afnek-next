
import DatePicker from "../Inputs/DatePicker";
import TextEditorSelect from "../Inputs/TextEditorSelect";
import UploadImage from "../Inputs/UploadImage";

export default function FinanceAndLegal() {
  return (
    <div>
      <h1 className="text-blue-700  font-bold text-xl">
        Finance and legal
      </h1>
      <h1 className="text-xl mt-4 mb-6 font-bold">
        Registration Incorporation Document
      </h1>
      <form>
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4 pt-3 ">
          <TextEditorSelect
            label="Title of the document you are attaching:"
            placeholder="-- Select --"
            value=""
            className="col-span-2 max-md:col-span-1"
            onChange={() => { }}
          />
          <DatePicker
            label="Document created on"
            placeholder="-- Select --"
            value=""
            className="col-span-1"
            onChange={() => { }}
          />
          <DatePicker
            label="Document valid until"
            placeholder="-- Select --"
            value=""
            className="col-span-1"
            onChange={() => { }}
          />
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
