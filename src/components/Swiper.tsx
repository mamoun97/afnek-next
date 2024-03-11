"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';



const cl=`
[&_.swiper-button-prev]:w-[46px]
[&_.swiper-button-prev]:h-[46px]
[&_.swiper-button-prev]:bg-[#0008]
[&_.swiper-button-prev]:rounded-[50%]
[&_.swiper-button-prev]:text-white  

[&_.swiper-button-next]:w-[46px]
[&_.swiper-button-next]:h-[46px]
[&_.swiper-button-next]:bg-[#0008]
[&_.swiper-button-next]:rounded-[50%]
[&_.swiper-button-next]:text-white  

[&_.swiper-button-prev:after]:text-[22px]
[&_.swiper-button-next:after]:text-[22px]

[&_.swiper-button-prev:hover]:bg[#000A]
[&_.swiper-button-next:hover]:bg[#000A]

[&_.swiper-button-prev.swiper-button-disabled]:opacity-[0]
[&_.swiper-button-next.swiper-button-disabled]:opacity-[0]

[&_.swiper-pagination]:hidden

`

function SwiperF(props:any) {
    return (
        <div className={cl}>
            <Swiper
                // spaceBetween={30}
                modules={[Navigation, Pagination]}

                autoplay
                speed={200}


                navigation={true}
                pagination={{ clickable: true }}
                breakpoints={props.breakpoints}
                {...props}
            >
                {
                    props.items.map((el:any, index:number) => {


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
