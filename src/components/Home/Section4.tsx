"use client"
import useLang from "@/lang/useLang";
import images from "../../assets";
import Container from "../Container";
import CardSection4 from "./CardSection4";



export default function Section4() {
    const {t}=useLang()
    const items=[
        {
            icon:images.outline_people,
            title:"3K+",
            desc:t.home.options_exp.users
        },
        {
            icon:images.outline_buildings_2,
            title:"250+",
            desc:t.home.options_exp.hotels
        },
        {
            icon:images.outline_card,
            title:"24/7",
            desc:t.home.options_exp.customer_support
        },
        {
            icon:images.outline_note_remove,
            title:t.home.options_exp.free,
            desc:t.home.options_exp.cancellation
        },
        {
            icon:images.outline_headphone,
            title:"3K+",
            desc:t.home.options_exp.users
        },
        {
            icon:images.outline_receipt_item,
            title:"250+",
            desc:t.home.options_exp.hotels
        },
        {
            icon:images.outline_wallet_check,
            title:"24/7",
            desc:t.home.options_exp.customer_support
        },
        {
            icon:images.outline_note_remove,
            title:t.home.options_exp.free,
            desc:t.home.options_exp.cancellation
        },
    ]
    return (
        <div>
            <Container className=" mt-8" >
                <h1 className='text-2xl font-bold'>{t.home.why_chose_us}</h1>
                <p className='mb-4'>{t.home.top_cities_exp}</p>
                <div className="grid grid-cols-4 max-md:grid-cols-2 gap-4 max-md:gap-2">
                    {
                        items.map((el,k)=>{
                            return <CardSection4 {...el} key={k}/>
                        })
                    }
                   
                </div>
            </Container>
        </div>
    )
}
