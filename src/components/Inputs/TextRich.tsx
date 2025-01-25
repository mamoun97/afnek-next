import React from 'react'
import RitchTextEditor from './TextRichNew';


export default function TextRich({
    label,
    placeholder,
    value,
    onChange,
    className
}: {
    label: string,
    placeholder: string,
    value: string,
    className?: string,
    onChange: any
}) {
    return (
        <div className={className}>
            <div className="mb-2 block">
                <span className='rizzui-input-label block text-sm mb-1.5 font-medium' >
                    {label}
                </span>
            </div>
            
            <RitchTextEditor
            
            initialValue={value}
            setValue={onChange}
            />
        </div>
    )
}
