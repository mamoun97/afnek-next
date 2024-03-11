"use client"
import { Button } from "flowbite-react";


import images from "../assets";

import Container from "./Container";
import FormBookingHeader from "./FormBookingHeader";
import Link from "next/link";
import Image from "next/image";
import { UserAuth } from "@/firebase/firebase-provider";
import { IoIosArrowDown } from "react-icons/io";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, User } from "@nextui-org/react";


export default function Header({ showForm = false, isHome = false }: { showForm?: Boolean, isHome?: Boolean }) {
    const { user, logOut } = UserAuth();
    return (
        <div className={(!showForm && !isHome ? "pt-3 pb-3" : "pt-4 pb-8") + " bg-[#003b95] ps-6 pe-6 text-white"}>


            <Container>
                <div className="flex items-center">
                    <Link href={"/"}>
                        <Image src={images.logo} alt="" className="h-8" />
                    </Link>

                    <div className="grow"></div>
                    <span>DZD</span>
                    <div className="me-3"></div>
                    <div className="w-8 h-8  rounded-full bg-cover bg-center" style={{
                        backgroundImage: "url(" + images.len.src + ")"
                    }}>


                    </div>
                    <div className="me-3"></div>
                    {
                        user ? <>
                            <Dropdown type={"listbox"}>
                                <DropdownTrigger>
                                    <div className="flex items-center gap-1 cursor-pointer">
                                        <User
                                            name={user.displayName}
                                            description={
                                                <span className="text-white">{user.email}</span>
                                            }
                                            avatarProps={{
                                                src: user.photoURL ?? ""
                                            }}
                                        />
                                        <IoIosArrowDown/>
                                    </div>
                                </DropdownTrigger>
                                <DropdownMenu aria-label="Static Actions">
                                    <DropdownItem key="new" onClick={() => logOut()}>Logout</DropdownItem>

                                </DropdownMenu>
                            </Dropdown>


                        </> : <>
                            <Link href="/welcome-agency" >
                                <Button color="light" className="text-[#003b95]  max-md:hidden">
                                    Become A Partner
                                </Button>
                            </Link>

                            <div className="me-3"></div>
                            <Link href="/login">
                                <Button color="light" className="text-[#003b95] max-md:hidden">
                                    Sign In / Register
                                </Button>
                            </Link>
                        </>
                    }


                </div>
                {isHome ? <div className="mt-20">
                    <h1 className="text-5xl font-normal max-md:text-4xl">
                        Find your next stay
                    </h1>
                    <p className="text-xl max-md:text-base mt-2">
                        Search low prices on hotels, in every corner on algeria...
                    </p>
                </div> : ""}
                {showForm ? <FormBookingHeader /> : ""}
            </Container>

        </div>
    )
}
