import images from "../assets";
import Container from "./Container";
import { RiFacebookFill } from "react-icons/ri";
import { CiInstagram } from "react-icons/ci";
import { IoLogoTwitter } from "react-icons/io5";
import Image from "next/image";
const items = [
    {
        title: "Company",
        items: [
            {
                text: "About",
                src: "#"
            },
            {
                text: "Careers",
                src: "#"
            },
            {
                text: "Mobile",
                src: "#"
            }
        ]
    },
    {
        title: "Contact",
        items: [
            {
                text: "Help/FAQ",
                src: "#"
            },
            {
                text: "Press",
                src: "#"
            },
            {
                text: "Affilates",
                src: "#"
            }
        ]
    },
    {
        title: "More",
        items: [
            {
                text: "Hotels",
                src: "#"
            },
            {
                text: "Low fare tips",
                src: "#"
            }
        ]
    }
]
const socialItems = [
    {
        src: "#",
        icon: <RiFacebookFill />
    },
    {
        src: "#",
        icon: <CiInstagram />
    },
    {
        src: "#",
        icon: <IoLogoTwitter />
    }
]
export default function Footer() {
    return (
        <Container className="mt-16 pb-16 pt-10">
            <div className="grid grid-cols-12 max-md:grid-cols-3 gap-2">
                <div className="col-span-3 max-md:col-span-3 ">
                    <div>
                        <img src={images.logo_blue} height={40} alt="" />
                    </div>
                    <div className="text-sm/4 max-w-[200px] mt-5 text-gray-500 ">
                        Copyright 2023 Afnek Hôtel Booking Tous droits réservés
                    </div>

                </div>
                {
                    items.map((el, k) => {
                        return <LinkGroup key={k} {...el} />
                    })
                }
                <div className="col-span-3 ">
                    <div className="flex justify-around">
                        {
                            socialItems.map((el, k) => {
                                return <Social {...el} key={k} />
                            })
                        }
                    </div>
                    <h1 className="mt-2">Discover our app</h1>
                    <div className="grid grid-cols-2 gap-2 mt-2">

                        <Image src={images.playstore} alt="" className="" />

                        <Image src={images.appstore} alt=""  />




                    </div>
                </div>
            </div>
        </Container>
    )
}
const LinkGroup = (props: any) => {
    
    return <div className="col-span-2 max-md:col-span-1 max-[480px]:col-span-3">
        <h1 className="text-lg font-bold">{props.title}</h1>
        <ul className="mt-6">
            {
                props.items.map((el: any, k: any) => {
                    return <li key={k} className="mb-2">
                        <a href={el.src} className="text-sm text-gray-400 hover:text-gray-950 font-semibold" target="_blank" rel="noopener noreferrer">
                            {el.text}
                        </a>
                    </li>
                })
            }
        </ul>
    </div>
}
const Social = (props: any) => {

    return <a href={props.src} className="text-gray-600 hover:text-gray-950 " target="_blank" rel="noopener noreferrer">
        <div className="h-[44px] w-[44px] text-xl shadow-xl drop-shadow-2xl rounded-full flex items-center justify-center">
            {props.icon}
        </div>
    </a>
}