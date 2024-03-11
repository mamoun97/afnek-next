import { Label, TextInput } from 'flowbite-react'
import React from 'react'

const t={
    field:{
        input: {
            colors: {
                // gray: "border-transparent focus:border-transparent"
            },
        }
    }
}
export default function TextEditor({
    label,
    placeholder,
    value,
    onChange,
    className,
    hideLabel
}: {
    label: string,
    placeholder: string,
    value: string,
    className?: string,
    hideLabel?:boolean,
    onChange: React.ChangeEventHandler
}) {
    return (
        <div className={className}>
            {(!hideLabel)&&<div className="mb-2 block">
                <Label value={label} className="font-normal"/>
            </div>}
            <TextInput theme={t} 
            type="text" sizing="md"

                {...{ value, placeholder, onChange }} />
        </div>
    )
}
