import { Label } from 'flowbite-react'

export default function InputPaylod({
    label,
    className,
    children
}: {
    label: string,
    className?: string,
    children:any
}) {
    return (
        <div className={className}>
            <div className="mb-2 block">
                <Label value={label} />
            </div>
            {children}
            
        </div>
    )
}
