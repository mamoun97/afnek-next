
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
                <span className='rizzui-input-label block text-sm mb-1.5 font-medium'>
                    {label}
                </span>
            </div>
            {children}
            
        </div>
    )
}
