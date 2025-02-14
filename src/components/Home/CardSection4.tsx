import Image from "next/image";


export default function CardSection4({ icon ,title,desc}: { icon: any, title: string, desc: string }) {
    return (
        <div className="relative  grow cursor-pointer rounded-md bg-gray-100 p-4 pt-8 flex flex-col justify-end">
            <Image src={icon} alt=""  className="absolute top-2 ltr:right-2 rtl:left-2 w-10 h-10 "/>
            <h1 className="font-bold text-4xl max-md:text-2xl">{title}</h1>
            <p className="text-base font-semibold text-gray-400">{desc}</p>
        </div>
    )
}