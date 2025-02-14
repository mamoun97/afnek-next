import { routes } from "@/data/routes";
import Link from "next/link";



export default function CityView({ data }: { data: City }) {
    return (<Link href={routes.search.id(data.code)}>
        <div className="m-2 grow cursor-pointer">
            <div className="pt-[120%] relative  bg-center bg-cover bg-no-repeat rounded-xl overflow-hidden"
                style={{ backgroundImage: "url(" + data.image + ")" }}>
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-b from-transparent via-transparent to-black/65 p-2">
                    <p className="  mt-3 text-base font-semibold tracking-wide text-white">{data.name}</p>
                    <p className="font-medium text-white text-xs ">{data.price} DZD</p>
                </div>
            </div>



        </div>
    </Link>
    )
}
