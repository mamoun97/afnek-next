import { Label, Select, SelectProps } from 'flowbite-react'
import React from 'react'


export default function TextEditorSelect({
    label,
    placeholder,
    value,
    onChange,
    className,
    propsInput,
    children,
}: {
    label: string,
    children?:React.ReactNode,
    placeholder: string,
    value: any,
    className?: string,
    propsInput?:SelectProps
    onChange: any
}) {
    return (
        <div className={className}>
            {!!label&&<div className="mb-2 block">
                <Label value={label} className="font-normal"/>
            </div>}
            
            <Select sizing="md"
            
             {...{ value, placeholder, onChange ,propsInput}}
               >
                {children}
            </Select>
        </div>
    )
}
