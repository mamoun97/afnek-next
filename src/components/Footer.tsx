"use client"
import images from "../assets";
import Container from "./Container";
import { RiFacebookFill } from "react-icons/ri";

import Image from "next/image";
import useLang from "@/lang/useLang";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";

const socialItems = [
    {
        src: "https://web.facebook.com/profile.php?id=61573391572411",
        icon: <RiFacebookFill />
    },
    {
        src: "https://www.instagram.com/afnek2025/",
        icon: <FaInstagram />
    }
]
export default function Footer() {
    const { t } = useLang()
    const items = [
        {
            title: t.footer.company,
            items: [
                {
                    text: t.footer.about,
                    src: "/about-us"
                },
                {
                    text: t.terms.privacy_policy.title,
                    src: "/privacy-policy"
                },
                {
                    text: t.terms.terms_conditions.title,
                    src: "/terms-conditions"
                }
            ]
        },
        {
            title: t.footer.contact,
            items: [
                {
                    text: t.footer.help_faq,
                    src: "/faqs"
                },
                {
                    text: t.footer.press,
                    src: "#"
                },
                {
                    text: t.footer.affiliates,
                    src: "#"
                }
            ]
        },
        {
            title: t.footer.more,
            items: [
                {
                    text: t.footer.hotels,
                    src: "/search"
                },
                {
                    text: t.footer.low_fare_tips,
                    src: "#"
                }
            ]
        }
    ]
    return (
        <div className="bg-primary">
            <Container className="mt-16 pb-16 pt-10  text-white">
                <div className="grid grid-cols-12 max-md:grid-cols-3 gap-2">
                    <div className="col-span-3 max-md:col-span-3 ">
                        <div>
                            <Link href={"/"}>
                                <Image src={images.logo} alt="" className="h-8" />
                            </Link>
                        </div>
                        <div className="text-sm/4 max-w-[200px] mt-5 text-white/70 ">
                            {t.footer.copyright}
                        </div>

                    </div>
                    {
                        items.map((el, k) => {
                            return <LinkGroup key={k} {...el} />
                        })
                    }
                    <div className="col-span-3 ">
                        <div className="flex justify-center gap-2">
                            {
                                socialItems.map((el, k) => {
                                    return <Social {...el} key={k} />
                                })
                            }
                        </div>
                        <h1 className="mt-2">{t.footer.discover_app}</h1>
                        <div className="grid grid-cols-2 gap-2 mt-2">

                            <Image src={images.playstore} alt="" className="" />

                            <Image src={images.appstore} alt="" />




                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
const LinkGroup = (props: any) => {

    return <div className="col-span-2 max-md:col-span-1 max-[480px]:col-span-3">
        <h1 className="text-lg font-bold text-white">{props.title}</h1>
        <ul className="mt-6">
            {
                props.items.map((el: any, k: any) => {
                    return <li key={k} className="mb-2">
                        <Link href={el.src} className="text-sm text-white/75 hover:text-white font-semibold" rel="noopener noreferrer">
                            {el.text} 
                        </Link>
                    </li>
                })
            }
        </ul>
    </div>
}
const Social = (props: any) => {

    return <a href={props.src} className="text-white/75 hover:text-white group  " target="_blank" rel="noopener noreferrer">
        <div className="h-[44px] w-[44px] text-xl shadow-xl drop-shadow-2xl rounded-full flex items-center justify-center border border-white group-hover:bg-white/15">
            {props.icon}
        </div>
    </a>
}