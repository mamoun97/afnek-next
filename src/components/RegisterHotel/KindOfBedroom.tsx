
import { MdGroup, MdGroups } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { IoIosBed } from "react-icons/io";
import { Button, Checkbox, Select } from "rizzui";
import Collapse from "../Collapse";

export default function KindOfBedroom() {
  return (
    <div>
      <h1 className="text-primary  font-bold text-xl">
        Kind of bedroom
      </h1>
      <form>
        <div className="grid grid-cols-2 max-md:grid-cols-1  gap-4 pt-3 ">
          <Select
            options={[]}
            label="Kind of bedroom"
            placeholder="-- select room type --"
            value=""
            className="col-span-1"
            onChange={() => { }}
          />
          <Select
            options={[]}
            label="Travel category"
            placeholder="-- Select travel category --"
            value=""
            className="col-span-1"
            onChange={() => { }}
          />
          <Select
            options={[]}
            label="Kind of bedroom"
            placeholder="Total number of rooms available"
            value=""
            className="col-span-1"
            onChange={() => { }}
          />
          <Select
            options={[]}
            label="Total number of rooms of this type with AFNEK"
            placeholder="-- Select room --"
            value=""
            className="col-span-1"
            onChange={() => { }}
          />
          <div className="text-sm col-span-2 max-md:col-span-1">
            <span className="font-bold text-xl me-2">
              Sharing type
            </span>
            (Enter only the room price excluding TVA (9%)
          </div>
          <p className="col-span-2 max-md:col-span-1">
            TVA will be calculated automatically and the final price will be displayed to the guest. Tourist tax per person per night to be processed at the hotel)
          </p>
          <div className="col-span-full">
            <Collapse title={
              <div className="flex items-center text-gray-700">
                <Checkbox name="cc" defaultChecked />
                <div className="me-2"></div>
                <IoMdPerson />
                <div className="me-2"></div>
                1 Person
              </div>
            } className="mt-3">
              <div className="grid grid-cols-6 max-md:grid-cols-1  gap-4 pt-3 ">
                <Select
                  options={[]}
                  label="Total number of adults"
                  placeholder="-- select  --"
                  value=""
                  className="col-span-2 max-md:col-span-1"
                  onChange={() => { }}
                />
                <Select
                  options={[]}
                  label="Total number of children"
                  placeholder="-- select  --"
                  value=""
                  className="col-span-2 max-md:col-span-1"
                  onChange={() => { }}
                />
                <Select
                  options={[]}
                  label="Total number of infants"
                  placeholder="-- select  --"
                  value=""
                  className="col-span-2 max-md:col-span-1"
                  onChange={() => { }}
                />
                <Select
                  options={[]}
                  label="Total number of beds"
                  placeholder="-- select  --"
                  value=""
                  className="col-span-3 max-md:col-span-1"
                  onChange={() => { }}
                />
                <Select
                  options={[]}
                  label="Extra beds"
                  placeholder="-- select  --"
                  value=""
                  className="col-span-3 max-md:col-span-1"
                  onChange={() => { }}
                />
              </div>
              <div className="flex items-center mt-3">
                <Checkbox defaultChecked />
                <div className="me-2"></div>
                Avalabilibity of additional beds
              </div>
            </Collapse>

            <Collapse title={
              <div className="flex items-center text-gray-700">
                <Checkbox name="cc" />
                <div className="me-2"></div>
                <MdGroup className="text-lg" />
                <div className="me-2"></div>
                2 Person
              </div>
            } className="mt-3">
            </Collapse>

            <Collapse title={
              <div className="flex items-center text-gray-700">
                <Checkbox name="cc" />
                <div className="me-2"></div>
                <MdGroups className="text-lg" />
                <div className="me-2"></div>
                3 Person
              </div>
            } className="mt-3">
            </Collapse>
          </div>





          <div className="col-span-2 max-md:col-span-1 flex justify-center mt-3">
            <Button color="secondary" >
              <IoIosBed className="text-xl me-2" />
              Add a room
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}
