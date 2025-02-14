"use client"
import Container from '@/components/Container'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import useLang from '@/lang/useLang'
import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Accordion, cn } from 'rizzui'

export default function page() {
    const { t } = useLang()
    return (
        <div>
            <Header isHome={false} showForm />
            <Container className='my-8 px-4'>
                <h1 className='text-xl font-bold'>{t.faqs.title}</h1>
                <p className='text-lg mb-4'>{t.faqs.subtitle}</p>
                {
                    t.faqs.subjects.map((el, k) => {
                        return <div key={k} className='mt-2'>
                            <h1 className='font-semibold'>{el.title}</h1>
                            {
                                el.items.map((item, index) => {
                                    return <Accordion
                                        key={index}
                                        className="mx-2 border-b last-of-type:border-b-0"
                                    >
                                        <Accordion.Header>
                                            {({ open }) => (
                                                <div className="flex w-full cursor-pointer items-center justify-between py-5  ">
                                                    {item.question}
                                                    <MdKeyboardArrowRight
                                                        className={cn(
                                                            "h-5 w-5 -rotate-90 rtl:rotate-90 transform transition-transform duration-300",
                                                            open && "-rotate-0"
                                                        )}
                                                    />
                                                </div>
                                            )}
                                        </Accordion.Header>
                                        <Accordion.Body className="mb-7">{item.answer}</Accordion.Body>
                                    </Accordion>
                                })
                            }
                        </div>
                    })
                }
                <p className='mt-4'>{t.faqs.end_text}</p>
            </Container>
            <Footer/>
        </div>
    )
}
