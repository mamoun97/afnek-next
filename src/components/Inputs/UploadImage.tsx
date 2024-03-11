"use client"
import { useRef, useState } from "react";
import { FaFileArrowUp } from "react-icons/fa6";

export default function UploadImage({

    className = "",
}: {

    className?: string,

}) {
    const refI = useRef<HTMLImageElement>(null)
    const [data, setData] = useState<any>(null)
    const loadFile = (event: any) => {
        try {
            const input = event.target
            const file = input.files[0];
            const type = file.type;
            const output = refI.current as any;
            setData( event.target.files[0])
            output.src = URL.createObjectURL(event.target.files[0]);

            output.onload = () => {
                URL.revokeObjectURL(output.src); // free memory
            };
        } catch (err) {

        }
    };
    return (
        <div className={"overflow-hidden relative h-[200px] rounded-md border-dashed border-[1px] border-gray-500 bg-gray-100 flex items-center justify-center text-gray-400 cursor-pointer " + className}>
            <div className={"text-5xl "+(data!=null?"hidden":"")}>
                <FaFileArrowUp />
            </div>
            <img  alt="" className={"h-full "+(data==null?"hidden":"")} ref={refI}/>

            <input type="file" onChange={loadFile} className="
        file:mr-4 file:py-2 file:px-4
        absolute top-0 left-0 right-0 bottom-0 
        file:rounded-full file:border-0
        file:text-sm file:font-semibold
        opacity-0
        cursor-pointer
      "/>
        </div>
    )
}
