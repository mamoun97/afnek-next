"use client"
import Body from "@/components/Body";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import { useState, useEffect } from "react"

import { Button } from "flowbite-react";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import RegisterAgencyForm from "@/components/RegisterAgency/RegisterAgencyForm";
import ReadPolic from "@/components/RegisterAgency/ReadPolic";

const pages = [
    <RegisterAgencyForm />,
    <ReadPolic />,
]

export default function RegisterAgency() {
    const [page, setPage] = useState<number>(0)
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [page])
    return (
        <Body>
            <Header />
            <Container className="pt-8">

                <div className="bg-white rounded-md mt-8 px-7 py-4">
                    {pages[page]}

                    <div className="flex mt-8">

                        <Button color="gray"
                            onClick={() => {
                                if (page == 1)
                                    setPage(0)


                            }}> <MdArrowBackIosNew className="me-2" />
                            <span className="max-md:hidden">Back</span>
                        </Button>



                        <div className="me-2 grow"></div>

                        {
                            page == 0 ? <Button className="bg-blue-700  hover:bg-blue-600"
                                onClick={() => {
                                    setPage(1)
                                }}>
                                <span className="max-md:hidden">Next</span>
                                <MdArrowForwardIos className="ms-2" /></Button> :
                                <Button className="bg-blue-700  hover:bg-blue-600"
                                    onClick={() => {

                                    }}>
                                    <span className="max-md:hidden">Finish and save</span>
                                    <MdArrowForwardIos className="ms-2" /></Button>

                        }

                    </div>
                </div>

            </Container>
            <Footer />
        </Body>
    )
}
