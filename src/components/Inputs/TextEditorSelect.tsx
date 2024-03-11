import { Label, Select, SelectProps } from 'flowbite-react'
import React from 'react'


export default function TextEditorSelect({
    label,
    placeholder,
    value,
    onChange,
    className,
    propsInput
}: {
    label: string,
    placeholder: string,
    value: any,
    className?: string,
    propsInput?:SelectProps
    onChange: React.ChangeEventHandler
}) {
    return (
        <div className={className}>
            {!!label&&<div className="mb-2 block">
                <Label value={label} className="font-normal"/>
            </div>}
            
            <Select sizing="md"
            
             {...{ value, placeholder, onChange ,propsInput}}
               >
                {/* <option value={404}>{placeholder}</option> */}
            </Select>
        </div>
    )
}
