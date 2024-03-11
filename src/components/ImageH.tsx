export default function ImageH({
    className = "",
    src,
    child
}: {
    className: string,
    src: string,
    child?: any
}) {
    return <div className={"relative bg-cover overflow-hidden rounded-lg bg-no-repeat bg-center cursor-pointer max-sm:min-h-[200px] " + className} style={{
        backgroundImage: "url(" + src + ")"
    }}>
        {child}
    </div>
}