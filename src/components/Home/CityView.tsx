import { routes } from "@/data/routes";
import Link from "next/link";



export default function CityView({ data }: { data: City }) {
    return (<Link href={routes.search.id(data.code)}>
        <div className="m-2 grow cursor-pointer">
            <div className="pt-[80%]  bg-center bg-cover bg-no-repeat rounded-xl"
                style={{ backgroundImage: "url(" + data.image + ")" }}>

            </div>

            <p className="  mt-3 text-sm font-semibold tracking-wide">{data.name}</p>
            <p className="font-medium text-primary text-sm">{data.price} DZD</p>

        </div>
    </Link>
    )
}
