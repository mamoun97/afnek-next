

"use client"
import { IoArrowForward } from "react-icons/io5";
import images from "../../assets";
import Container from "../Container";
import { Button } from "rizzui";
import useLang from "@/lang/useLang";
export default function ReferenceDis() {
    const { t } = useLang()
    return (
        <div>
            <Container className=" mt-8 p-2" >
                <h1 className='text-2xl font-bold'>{t.home.reference}</h1>
                <p className='mb-4'>{t.home.discover_afnek}</p>
                
                <div className="mt-4">
                    <div className="grid grid-cols-3 gap-2 max-sm:grid-cols-2 max-sm:grid-rows-5 grid-rows-5 min-h-[540px]">
                        <div className=" relative row-span-3   bg-center bg-cover bg-no-repeat rounded-md overflow-hidden"
                            style={{ backgroundImage: "url(https://bigpicture.ru/wp-content/uploads/2012/08/worsttoleave-6.jpg)" }}>

                        </div>
                        <div className=" relative row-span-2  bg-center bg-cover bg-no-repeat rounded-md overflow-hidden"
                            style={{ backgroundImage: "url(https://i.pinimg.com/originals/bb/53/71/bb53714e562ef0838509ac5fb3d6bc27.jpg)" }}>

                        </div>
                        <div className=" relative row-span-3  bg-center bg-cover bg-no-repeat rounded-md overflow-hidden"
                            style={{ backgroundImage: "url(https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_66485cbfe042ad36f90f35b4_66485d03edd1eb21fd85549d/scale_1200)" }}>

                        </div>
                        <div className=" relative  row-span-3  bg-center bg-cover bg-no-repeat rounded-md overflow-hidden"
                            style={{ backgroundImage: "url(" + images.sahra.src + ")" }}>
                            <div className="p-5 absolute top-0 left-0 right-0 bottom-0 bg-[#0004] flex flex-col justify-end items-start">
                                <h1 className='text-2xl text-white font-bold mb-2 max-sm:text-lg'>
                                    {t.home.discover_alger}
                                </h1>
                                <Button color="secondary" >{t.home.explore}</Button>
                            </div>
                        </div>
                        <div className=" relative row-span-2 max-sm:min-h-40  bg-center bg-cover bg-no-repeat rounded-md overflow-hidden"
                            style={{ backgroundImage: "url(https://iasbh.tmgrup.com.tr/66f17d/0/0/0/0/0/0?u=http://i.sabah.com.tr/sb/fotohaber/ekonomi/dunyanin-en-zengin-ulkeleri/098.jpg)" }}>

                        </div>
                        <div className=" relative row-span-2 max-sm:min-h-40  bg-center bg-cover bg-no-repeat rounded-md overflow-hidden"
                            style={{ backgroundImage: "url(https://i.ytimg.com/vi/aSQlTmlKDEc/maxresdefault.jpg)" }}>
                        </div>
                    </div>
                </div>


            </Container>
        </div>
    )
}

function W() {
    const { t } = useLang()
    return <div className='flex flex-col col-span-1 items-start max-sm:col-span-2'>
        <div className="grow mb-3 w-full bg-center bg-cover bg-no-repeat rounded-md min-h-[200px]"
            style={{ backgroundImage: "url(" + images.c1.src + ")" }}>
        </div>
        <h1 className='text-lg font-bold mb-0'>
            {t.home.turise_cities_alger}
        </h1>
        <p className='text-sm mb-3'>
            {t.home.turise_cities_alger}
        </p>
        <Button color="primary" className=' min-w-[33%] text-center' variant="outline" size={"sm"}>
            {t.home.explore} <IoArrowForward className="me-2" />
        </Button>
    </div>
}


