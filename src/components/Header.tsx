"use client"
import { Avatar, Button, Dropdown } from "rizzui";

import images from "../assets";

import Container from "./Container";
import FormBookingHeader from "./FormBookingHeader";
import Link from "next/link";
import Image from "next/image";
import { UserAuth } from "@/firebase/firebase-provider";
import { IoIosArrowDown } from "react-icons/io";

import ApiConfig from "@/api/config";
import useLang from "@/lang/useLang";
import ButtonLang from "./ButtonLang";


export default function Header({ showForm = false, isHome = false }: { showForm?: Boolean, isHome?: Boolean }) {
    const { user, logOut } = UserAuth();
 
    const { t } = useLang()   

    return (
        <div className={(!showForm && !isHome ? "pt-3 pb-3" : "pt-4 pb-8") + " bg-primary ps-6 pe-6 text-white relative z-50"}>


            <Container>
                <div className="flex items-center">
                    <Link href={"/"}>
                        <Image src={images.logo} alt="" className="h-8" />
                    </Link>

                    <div className="grow"></div>
                    <span>{t.global.dzd} </span>
                    <div className="mx-2">/</div>
                    
                    <ButtonLang />
                    <div className="me-3"></div>
                    {
                        user ? <>
                            <Dropdown >
                                <Dropdown.Trigger>
                                    <div className="flex items-center gap-1 cursor-pointer">
                                        <Avatar

                                            src={ApiConfig.awsUrl + (user.image ?? "")}
                                            name={user.first_name + " " + user.last_name}
                                            className="ring-2 ring-primary ring-offset-background ring-offset-2"
                                        />
                                        <div className="text-sm flex flex-col items-start">
                                            <h1 className="font-bold">{user.first_name + " " + user.last_name}</h1>
                                            <p>{user.email}</p>
                                        </div>

                                        <IoIosArrowDown />
                                    </div>
                                </Dropdown.Trigger>
                                <Dropdown.Menu aria-label="Static Actions">
                                    <Dropdown.Item key="new" onClick={() => logOut()}>Logout</Dropdown.Item>
                                    <Dropdown.Item key="new">
                                        <Link className="h-full w-full text-start" href={"/welcome-hotel"}>
                                            Ajouter un hôtel</Link>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>


                        </> : <>
                            <Link href="/welcome-agency" >
                                <Button color="secondary" variant="solid" className="  max-md:hidden">
                                    {t.header.become_part}
                                </Button>
                            </Link>

                            <div className="me-3"></div>
                            <Link href="/auth/login">
                                <Button color="secondary" variant="solid" className=" max-md:hidden">
                                    {t.header.login_register}
                                </Button>
                            </Link>
                        </>
                    }


                </div>
                {isHome ? <div className="mt-20">
                    <h1 className="text-5xl font-normal max-md:text-4xl">
                        {t.header.title}
                    </h1>
                    <p className="text-xl max-md:text-base mt-2">
                        {t.header.subtitle}
                    </p>
                </div> : ""}
                {showForm ? <FormBookingHeader /> : ""}
            </Container>

        </div>
    )
}
