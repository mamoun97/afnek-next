"use client"

import { Swiper, SwiperProps, SwiperRef, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import useLang from "@/lang/useLang";



const cl=`
h-full
[&_.swiper-slide]:h-full
[&_.swiper-button-prev]:w-[38px]
[&_.swiper-button-prev]:h-[38px]
[&_.swiper-button-prev]:bg-[#0002]
[&_.swiper-button-prev]:rounded-[50%]
[&_.swiper-button-prev]:text-white  

[&_.swiper-button-next]:w-[38px]
[&_.swiper-button-next]:h-[38px]
[&_.swiper-button-next]:bg-[#0002]
[&_.swiper-button-next]:rounded-[50%]
[&_.swiper-button-next]:text-white  

[&_.swiper-button-prev:after]:text-[16px]
[&_.swiper-button-next:after]:text-[16px]

[&_.swiper-button-prev:hover]:bg[#0004]
[&_.swiper-button-next:hover]:bg[#0004]

[&_.swiper-button-prev.swiper-button-disabled]:opacity-[0]
[&_.swiper-button-next.swiper-button-disabled]:opacity-[0]

[&_.swiper-pagination]:hidden

`

function SwiperF({ breakpoints = {}, className = "", autoPlay = false, items = [], swiperProps = {}, withPagination = false }: {
    swiperProps?: React.RefAttributes<SwiperRef> & React.PropsWithChildren<SwiperProps>,
    breakpoints?: any,
    autoPlay?: boolean,
    withPagination?: boolean,
    items?: Array<any>,
    className?: string
}) {
    const {lang}=useLang()
    return (
        <div className={cl}>
            <Swiper
                // spaceBetween={30}
                modules={[Navigation, Pagination]}
                key={"swiper"+lang}
                dir={lang == "ar" ? "rtl" : "ltr"}
                autoplay
                speed={200}


                navigation={true}
                pagination={{ clickable: true }}
                breakpoints={breakpoints}

                {...swiperProps}
            >
                {
                    items.map((el:any, index:number) => {


                        return <SwiperSlide key={index}>
                            {el}
                        </SwiperSlide>

                    })
                }
            </Swiper>
        </div>
    )
}






export default SwiperF
