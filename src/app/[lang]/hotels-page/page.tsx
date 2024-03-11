
"use client"
import HotelApi from "@/api/hotel"
import Container from "@/components/Container"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Details1 from "@/components/HotelPage/Details"
import EnjoyYourTrip from "@/components/HotelPage/EnjoyYourTrip.tsx"
import HotelPage1 from "@/components/HotelPage/HotelPage1"
import Payment from "@/components/HotelPage/Payment"
import Steps from "@/components/Steps"
import { useState } from "react"



const steps = [
    {
        icon: 1,
        name: "Select a hotel"
    },
    {
        icon: 2,
        name: "Choose a room"
    },
    {
        icon: 3,
        name: "Enter your details"
    },
    {
        icon: 4,
        name: "Make your payment"
    },
    {
        icon: 5,
        name: "Enjoy your trip"
    },


]
export default function HotelPage() {
    const [activeStep, setActiveStep] = useState(0)
    const {data,}=HotelApi.useReadAll("")
    const StepsComponent = () => {
        return <div className="mt-6 mb-6 ">
            <Steps
                className={(activeStep==0||activeStep==1)?"bg-gray-100":"bg-white"}
                {...{
                    activeStep, setActiveStep, isNumber: true, steps: steps.map((el, k) => {
                        return { ...el, onClick: () => { setActiveStep(k) } }
                    })
                }} />
        </div>
    }
    return (
        <div className={activeStep==0||activeStep==1?"":"bg-gray-100"}>
            
            <Header isHome={false} showForm={true} />
            <Container className="mt-8">
                {(activeStep==0||activeStep==1)&&<HotelPage1 isChoseRoom={activeStep==1} stepsComponent={<StepsComponent/>}/>}
                {activeStep==2&&<Details1 stepsComponent={<StepsComponent/>}/>}
                {activeStep==3&&<Payment stepsComponent={<StepsComponent/>}/>}
                {activeStep==4&&<EnjoyYourTrip stepsComponent={<StepsComponent/>}/>}
                


            </Container>
            <Footer />
        </div>
    )
}


