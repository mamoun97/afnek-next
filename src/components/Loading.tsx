import { Skeleton } from "@nextui-org/react"

export function HotelListLoading() {
    return <div className="col-span-3 max-lg:col-span-1 grid grid-cols-1 gap-2">
        {
            [1, 2, 3, 4].map((_, k) => {
                return <div className="border p-4 flex rounded-lg  " key={k}>
                    <Skeleton className=" rounded-lg w-1/4 max-md:min-w-[320px] max-sm:min-w-full max-sm:w-full max-w-xs">
                        <div className="pt-[100%] h-28 rounded-lg bg-default-300 "></div>
                    </Skeleton>

                </div>
            })
        }
    </div>

} 