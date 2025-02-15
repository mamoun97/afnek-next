"use client"
import Container from '@/components/Container'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import useLang from '@/lang/useLang'
import React from 'react'
export default function page() {
    const { t } = useLang()
    return (
        <div>
            <Header isHome={false} showForm />
            <Container className='my-8 px-4'>
                <h1 className='text-xl font-bold'>{t.terms.about_us.title}</h1>
                {
                    t.terms.about_us.sections.map(((el, k) => {
                        return <div key={k} className='my-6'>
                            <h1 className='font-semibold mb-2'> {el.title}</h1>
                            {
                                typeof el.content == "object" && Array.isArray(el.content) ? <ul className='list-disc ps-4 list-inside'>
                                    {
                                        el.content.map((item, index) => {
                                            let d = item.split("%SPACE%")
                                            if (d.length == 2)
                                                return <li key={index}>
                                                    <strong>{d[0]} : </strong>
                                                    {d[1]}
                                                </li>
                                            return <li key={index}>
                                                {item}
                                            </li>
                                        })
                                    }
                                </ul> : <p>
                                    {typeof el.content == "string" && el.content}
                                </p>
                            }
                        </div>
                    }))
                }

                <p className='mt-6'>{t.terms.about_us.conclusion}</p>
            </Container>
            <Footer />
        </div>
    )
}