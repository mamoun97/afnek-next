
"use client"
import BasicInformation from "@/components/RegisterHotel/BasicInformation";
import ContactDetails from "@/components/RegisterHotel/ContactDetails";
import FinanceAndLegal from "@/components/RegisterHotel/FinanceAndLegal";
import KindOfBedroom from "@/components/RegisterHotel/KindOfBedroom";
import PhotoGallery from "@/components/RegisterHotel/PhotoGallery";
import SocialMedia from "@/components/RegisterHotel/SocialMedia";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import { IoMdInformationCircle, IoIosBed } from "react-icons/io";
import { FaPhoneAlt, FaSave } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa6";
import { FaFile } from "react-icons/fa";
import { useState } from "react";
import Steps from "@/components/Steps";
import Container from "@/components/Container";
import Header from "@/components/Header";
import Body from "@/components/Body";
import { Button } from "flowbite-react";
import Footer from "@/components/Footer";
const steps = [
    {
        icon: <IoMdInformationCircle />,
        name: "Basic information",
        src: "/register-hotel/"
    },
    {
        icon: <FaPhoneAlt />,
        name: "Contact details",
        src: "/register-hotel/contact-details"
    },
    {
        icon: <GrGallery />,
        name: "Photo gallery",
        src: "/register-hotel/photo-gallery"
    },
    {
        icon: <IoIosBed />,
        name: "Kind of bedroom",
        src: "/register-hotel/kind-of-bedroom"
    },
    {
        icon: <FaFacebook />,
        name: "Social media",
        src: "/register-hotel/social-media"
    },
    {
        icon: <FaFile />,
        name: "Finance and legal",
        src: "/register-hotel/finance-and-legal"
    },

]
const pages = [
    <BasicInformation />,
    <ContactDetails />,
    <PhotoGallery />,
    <KindOfBedroom />,
    <SocialMedia />,
    <FinanceAndLegal />
]

export default function Page() {
    const [activeStep, setActiveStep] = useState<number>(0)
    return (
        <>
            <Body>
                <Header />
                <Container className="pt-8">

                    <Steps className="bg-white" {...{
                        activeStep, setActiveStep, steps: steps.map((el, k) => {
                            return { ...el, onClick: () => { setActiveStep(k) } }
                        })
                    }} />
                    {pages[activeStep]}
                    <div className="bg-white rounded-md mt-8 px-7 py-4">
                        <div className="flex mt-8">
                            <Button color="gray"
                                onClick={() => {
                                    setActiveStep(activeStep > 0 ? activeStep - 1 : activeStep)
                                }}> <MdArrowBackIosNew className="me-2" />
                                <span className="max-md:hidden">Back</span>
                            </Button>
                            <div className="me-2"></div>
                            <Button className="bg-black hover:bg-[#000D]">
                                <FaSave className="me-2" />
                                <span className="max-md:hidden">Save</span>

                            </Button>
                            <div className="me-2 grow"></div>

                            {
                                activeStep != 5 ? <Button className="bg-blue-700  hover:bg-blue-600"
                                    onClick={() => {
                                        setActiveStep(activeStep < steps.length - 1 ? activeStep + 1 : activeStep)
                                    }}>
                                    <span className="max-md:hidden">Next</span>
                                    <MdArrowForwardIos className="ms-2" /></Button> :
                                    <Button className="bg-blue-700  hover:bg-blue-600"
                                        onClick={() => {

                                        }}>
                                        <span className="max-md:hidden">Finish Save this property</span>
                                        <MdArrowForwardIos className="ms-2" /></Button>

                            }

                        </div>
                    </div>

                </Container>
                <Footer />
            </Body>
        </>
    )
}
