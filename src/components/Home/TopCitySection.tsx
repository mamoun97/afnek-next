
"use client"
import images from '../../assets'
import CityView from './CityView'
import SwiperF from '../Swiper'
import Container from '../Container'
import useLang from '@/lang/useLang'

export default function TopCitySection() {
    const {t}=useLang()
    const data: Array<City> = [
        {code:16, name: t.home.wilayas.alger, price: 4397, image: images.c1.src },
        {code:23, name: t.home.wilayas.annaba, price: 4500, image: images.c2.src },
        {code:6, name: t.home.wilayas.bejaia, price: 4588, image: images.c3.src },
        {code:25, name: t.home.wilayas.constontine, price: 6040, image: images.c4.src },
        {code:31, name: t.home.wilayas.oran, price: 7240, image: images.c5.src },
        {code:35, name: t.home.wilayas.boumerdes, price: 3140, image: images.c6.src },
    ]
    return (
        <div>
            <Container className="mt-8" >
                <h1 className='text-2xl font-bold'>{t.home.top_dist}</h1>
                <p className='mb-4'>{t.home.top_dist_subtitle}</p>
                <SwiperF
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                            spaceBetween: 10
                        },
                        740: {
                            slidesPerView: 2,
                            spaceBetween: 10
                        },
                        830: {
                            slidesPerView: 4,
                            spaceBetween: 10
                        },

                        900: {
                            slidesPerView: 5,
                            spaceBetween: 10
                        },
                        1200: {
                            slidesPerView: 6,
                            spaceBetween: 10
                        },
                        8000: {
                            slidesPerView: 6,
                            spaceBetween: 10
                        }
                    }}
                    items={
                        data.map((el, k) => {
                            return <CityView data={el} key={k} />
                        })
                    }
                />
               
            </Container>
        </div>
    )
}
