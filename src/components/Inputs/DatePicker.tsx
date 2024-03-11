import { Datepicker, Label } from 'flowbite-react'
import React from 'react'


export default function DatePicker({
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
    hideLabel?: boolean,
    onChange: React.ChangeEventHandler
}) {
    return (
        <div className={className}>
            {(!hideLabel) && <div className="mb-2 block">
                <Label value={label} />
            </div>}
            <Datepicker
                sizing="md"

                {...{ value, placeholder, onChange }} />
        </div>
    )
}