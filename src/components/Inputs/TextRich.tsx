import React from 'react'
import TipTap from '../Tiptap';


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
    onChange: React.ChangeEventHandler
}) {
    console.log(placeholder)
    console.log(onChange)
    return (
        <div className={className}>
            <div className="mb-2 block">
                <span className='rizzui-input-label block text-sm mb-1.5 font-medium' >
                    {label}
                </span>
            </div>
            
            <TipTap
              content={value}
              onUpdate={({ editor }) => {
                console.log(editor)
                // const html :string= editor.getHTML();
                // setEditorContent(html);
                // onChange((e)=>{
                //     return html
                // })
              }}
            />
        </div>
    )
}
