// import {  Checkbox } from "flowbite-react";
import { Checkbox } from "rizzui";
import Collapse from "../Collapse";


export default function ReadPolic() {
  return (
    <div>
      <form>
        <h1 className="font-bold text-xl mb-3">
          Download the license or agency document
        </h1>
        
        <Collapse title="AFNEK Agency Policy" className="mt-3">
        </Collapse>
        <Collapse title="Cancellation policy" className="mt-3">
        </Collapse>
        <Collapse title="Terms and conditions" className="mt-3">
        </Collapse>


        <div className="flex items-center justify-center mt-6">
          <Checkbox name="cc" defaultChecked />
          <div className="me-2"></div>
          I have read the policies and agree to the terms and conditions.
        </div>
      </form>
    </div>
  )
}
