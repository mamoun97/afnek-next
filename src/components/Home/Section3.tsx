"use client"
import Image from "next/image"
import images from "../../assets"
import Container from "../Container"
import useLang from "@/lang/useLang"


export default function Section3() {
    const { t } = useLang()
    return (
        <div className='pt-12 pb-24 bg-[#f5faff] mt-12 '>
            <Container className="my-8">
                <div className='flex justify-center'>
                    <div className='max-w-[720px]'>
                        <h1 className='text-3xl font-bold text-center'>
                            {t.home.we_are_avalaible}
                        </h1>
                        <p className='text-gray-500 text-center mt-2 text-lg font-semibold'>{t.home.simply_follow}</p>
                    </div>
                </div>
                <div className='flex justify-center mt-8 '>

                    <div className="flex items-center max-w-[720px] w-full flex-row max-md:flex-col max-md:items-start">

                        <Item
                            title={t.home.steps[0].title}
                            desc={t.home.steps[0].subtitle}
                            logo={images.location_tick}
                        />
                        <div className="me-2 ms-2 border-2 max-h-0 border-primary grow max-md:min-h-[60px] max-md:ms-7"></div>
                        <Item
                            title={t.home.steps[1].title}
                            desc={t.home.steps[1].subtitle}
                            logo={images.calendar_tick}
                        />
                        <div className="me-2 ms-2 border-2 max-h-0 border-primary grow max-md:min-h-[60px] max-md:ms-7"></div>
                        <Item
                            title={t.home.steps[2].title}
                            desc={t.home.steps[2].subtitle}
                            logo={images.shield_tick}
                        />
                    </div>
                </div>
            </Container>
        </div>
    )
}
type p = {
    logo: any, title: string, desc: string
}
function Item(props: p) {

    return <div className="max-md:w-full relative flex items-center gap-2">
        <div className='relative max-md:static w-[60px] h-[60px]  min-h-[60px]  min-w-[60px]   flex justify-center items-center rounded-full bg-primary'>
            <Image src={props.logo} className='w-[40px] h-[40px]' alt="" />

            <div className="absolute max-md:hidden top-[140%] max-md:top-1/2  max-md:translate-y-[-50%] min-w-[200px] max-md:!translate-x-0  ltr:left-1/2 ltr:max-md:left-full ltr:-translate-x-1/2  rtl:right-1/2 rtl:max-md:right-full  rtl:translate-x-1/2      ">
                <h1 className='text-center text-lg font-bold'>{props.title}</h1>
                <p className='text-center text-sm font-semibold text-gray-500'>{props.desc}</p>
            </div>
        </div>
        <div className="grow max-md:block hidden">
            <div className="">
                <h1 className='text-center text-lg font-bold'>{props.title}</h1>
                <p className='text-center text-sm font-semibold text-gray-500'>{props.desc}</p>
            </div>
        </div>
    </div>

}
