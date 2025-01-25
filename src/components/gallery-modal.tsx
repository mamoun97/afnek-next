"use client"
import React, { useEffect, useState } from 'react'
import { MdOutlineClose } from 'react-icons/md'
import { ActionIcon } from 'rizzui'
import SwiperF from './Swiper'
import { Swiper } from 'swiper/types'

type PropsType = {
    open: false | number,
    setOpen: (e: any) => void,
    images: string[],
    title?:string
}
export default function GalleryModal({ open, setOpen, images,title }: PropsType) {
    const [activeIndex, setActiveIndex] = useState<number>(open===false?0:open);
    const [swiper, setSwiper] = useState<Swiper | null>(null);
    const [swiper2, setSwiper2] = useState<Swiper | null>(null);
    const handleThumbnailClick = (index: number) => {
        setActiveIndex(index)
        
    };
    useEffect(()=>{
        swiper2?.slideTo(activeIndex, 500);
        swiper?.slideTo(activeIndex, 500);
    },[activeIndex])
    useEffect(()=>{
        setActiveIndex((open===false?0:open))
    },[open])
    return (
        open !== false && <div className='fixed inset-0 h-screen  bg-black/80 z-50'>
            <div className="absolute inset-0 bg-center opacity-15 blur-xl bg-cover bg-no-repeat " style={{
                backgroundImage:`url("${images[activeIndex]}")`
            }}></div>
            <div className="absolute inset-0 flex flex-col z-0 h-screen">
                <div className='grow'>
                    <SwiperF
                        swiperProps={{
                            onSwiper: (swiper: any) => setSwiper(swiper),
                            onSlideChange: (s: any) => {
                                handleThumbnailClick(s.activeIndex)
                            },
                            className: "h-full",
                            
                        }}

                        withPagination={false}

                        breakpoints={
                            {
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 0
                                },
                                8000: {
                                    slidesPerView: 1,
                                    spaceBetween: 0
                                }
                            }
                        }
                        items={
                            images.map((el, index) => {

                                return <div className='h-full bg-center bg-contain bg-no-repeat' style={{
                                    backgroundImage:`url("${el}")`
                                }}>
                                    {/* <img key={index} src={el} alt="" className='h-full mx-auto' /> */}
                                </div>
                            })
                        }
                    />
                </div>
                <div className='overflow-hidden w-full h-20 '>
                    <SwiperF
                        swiperProps={{
                            onSwiper: (swiper: any) => setSwiper2(swiper),
                            onSlideChange: (s) => {
                                handleThumbnailClick(s.activeIndex)
                            },
                            className: "h-full",
                        }}

                        withPagination={false}

                        breakpoints={
                            {
                                0: {
                                    slidesPerView: 4,
                                    spaceBetween: 0
                                },
                                740: {
                                    slidesPerView: 5,
                                    spaceBetween: 0
                                },
                                830: {
                                    slidesPerView: 6,
                                    spaceBetween: 0
                                },

                                900: {
                                    slidesPerView: 6,
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
                            }
                        }
                        items={
                            (images).map((el, index) => {

                                return <div onClick={()=>handleThumbnailClick(index)} className={`h-full m-0 border-2 ${index==activeIndex?"border-white":"border-black"}  cursor-pointer  bg-center bg-cover bg-no-repeat`} style={{
                                    backgroundImage:`url("${el}")`
                                }}>
                                    {/* <img key={index} src={el} alt="" className='h-full mx-auto' /> */}
                                </div>
                            })
                        }
                    />
                </div>
            </div>
            {title&&<div className='text-xl absolute top-0 left-0 right-0 text-center text-white font-semibold p-4 py-6 bg-gradient-to-b from-black to-transparent'>
                {title}
            </div>}
            <ActionIcon onClick={() => setOpen(false)} variant="outline" rounded='full' size='md' className='absolute z-10 border-white text-white top-2 right-2'>
                <MdOutlineClose className="w-5 h-5" />
            </ActionIcon>
            <HideScrolBar/>

        </div>
    )
}
function HideScrolBar(){
    useEffect(() => {
        document.body.style.height = "100vh"
        document.body.style.overflow = "hidden"

        return () => {
            document.body.style.height = "initial"
            document.body.style.overflow = "initial"
        }
    }, [])
    return null
}
