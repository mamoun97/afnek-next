import React from 'react'
import SwiperF from './Swiper'
import ApiConfig from '@/api/config'

export default function GalleryRoom({data}:{
    data:{
        id: number,
        path: string,
        id_type_room: number
    }[]
}) {
    return (
        <div>
            <SwiperF
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 0
                    },
                }}
                items={
                    data.map((el, k) => {
                        return <div className='bg-center rounded-lg pt-[100%] bg-cover bg-no-repeat' style={{
                            backgroundImage:"url('"+ApiConfig.awsUrl+el.path+"')"
                        }} key={k}>
                            
                        </div>
                    })
                }
            />
        </div>
    )
}
