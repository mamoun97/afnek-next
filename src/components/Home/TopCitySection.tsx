
import images from '../../assets'
import CityView from './CityView'
import SwiperF from '../Swiper'
import Container from '../Container'

const data: Array<City> = [
    { name: "Alger", price: 4397, image: images.c1.src },
    { name: "Annaba", price: 4500, image: images.c2.src },
    { name: "Béjaia", price: 4588, image: images.c3.src },
    { name: "Constontine", price: 6040, image: images.c4.src },
    { name: "Oran", price: 7240, image: images.c5.src },
    { name: "Boumerdes", price: 3140, image: images.c6.src },
]

export default function TopCitySection() {
    return (
        <div>
            <Container className="mt-8" >
                <h1 className='text-2xl font-bold'>Top Distination</h1>
                <p className='mb-4'>The top cities to explore</p>
                <SwiperF
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                            spaceBetween: 0
                        },
                        740: {
                            slidesPerView: 2,
                            spaceBetween: 0
                        },
                        830: {
                            slidesPerView: 4,
                            spaceBetween: 0
                        },

                        900: {
                            slidesPerView: 5,
                            spaceBetween: 0
                        },
                        1200: {
                            slidesPerView: 6,
                            spaceBetween: 0
                        },
                        8000: {
                            slidesPerView: 6,
                            spaceBetween: 0
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
