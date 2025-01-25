"use client"
import React from 'react'
import Container from '../Container'
import { Button } from 'rizzui'
import { MdWhatsapp } from 'react-icons/md'
import useLang from '@/lang/useLang'

export default function Banner() {
    const {t}=useLang()
    return (
        <div className='p-2'>
            <Container className='bg-center  shadow-lg rounded-2xl overflow-hidden relative  bg-cover min-h-56 max-sm:min-h-72 bg-no-repeat' style={{
                backgroundImage: `url('https://arabic.arabianbusiness.com/cloud/2024/05/15/1.jpg')`
            }}>

                <div className="absolute text-white p-4 gap-2 inset-0 flex justify-end flex-col items-center bg-black/25">
                    <p className=' text-2xl max-w-4xl max-sm:text-xl text-center grow flex items-center'>
                    {t.home.flight_booking}
                    </p>
                    <span className='text-2xl font-bold underline '></span>
                    <Button  color='secondary' className='font-bold items-center gap-1'>
                    <MdWhatsapp className='w-5 h-5 min-w-5' />  +213777443322
                    </Button>
                </div>
            </Container>
        </div>
    )
}
