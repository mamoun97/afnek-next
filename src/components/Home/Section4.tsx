
import images from "../../assets";
import Container from "../Container";
import CardSection4 from "./CardSection4";


const items=[
    {
        icon:images.outline_people,
        title:"3K+",
        desc:"Users"
    },
    {
        icon:images.outline_buildings_2,
        title:"250+",
        desc:"Hotels"
    },
    {
        icon:images.outline_card,
        title:"24/7",
        desc:"Customer Support"
    },
    {
        icon:images.outline_note_remove,
        title:"Free",
        desc:"Cancellation"
    },
    {
        icon:images.outline_headphone,
        title:"3K+",
        desc:"Users"
    },
    {
        icon:images.outline_receipt_item,
        title:"250+",
        desc:"Hotels"
    },
    {
        icon:images.outline_wallet_check,
        title:"24/7",
        desc:"Customer Support"
    },
    {
        icon:images.outline_note_remove,
        title:"Free",
        desc:"Cancellation"
    },
]
export default function Section4() {
    return (
        <div>
            <Container className=" mt-8" >
                <h1 className='text-2xl font-bold'>Why chose us ?</h1>
                <p className='mb-4'>The top cities to explore</p>
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
