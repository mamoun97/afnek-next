export default function ImageH({
    className = "",
    src,
    child,
    onClick=()=>{}
}: {
    className: string,
    src: string,
    child?: any,
    onClick?:()=>void
}) {
    return <div onClick={onClick} className={"relative bg-cover overflow-hidden rounded-lg bg-no-repeat bg-center cursor-pointer max-sm:min-h-[120px] " + className} style={{

    }}>
        <img src={src} data-loaded="true" className="relative opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large z-0 w-full h-full object-cover" alt="" />
        <div className="absolute top-0 left-0 right-0 bottom-0">
            {child}
        </div>

    </div>
}