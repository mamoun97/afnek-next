"use client"
import {  Dropdown } from 'rizzui'
import { useTranslation } from 'react-i18next'


export default function ButtonLang() {
    const { i18n } = useTranslation()

    
    return (
        <>

            <Dropdown>
                <Dropdown.Trigger>
                    <div className='flex items-center gap-2 cursor-pointer text-sm font-bold '>
                        {/* <Avatar src={langsicon(i18n?.language ?? "ar")}
                            className="ring-1 ring-white font-afnek ring-offset-background ring-offset-1"
                            name='' size='sm' /> */}
                        {
                            i18n.language == "ar" && "العربية" ||
                            i18n.language == "fr" && "Français" ||
                            i18n.language == "en" && "English"
                        }
                    </div>
                </Dropdown.Trigger>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => {i18n.changeLanguage("ar");localStorage.setItem("local","ar")}}>
                        <div className='flex items-center gap-2'>
                            {/* <img className='h-4' src={images.img_ar.src} alt="" /> */}
                            <span className='font-semibold'>AR</span>
                            العربية
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => {i18n.changeLanguage("fr");localStorage.setItem("local","fr")}}>
                        <div className='flex items-center gap-2'>
                            {/* <img className='h-4' src={images.img_fr.src} alt="" /> */}
                            <span className='font-semibold'>FR</span>
                            Français
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => {i18n.changeLanguage("en");localStorage.setItem("local","en")}}>
                        <div className='flex items-center gap-2'>
                            {/* <img className='h-4' src={images.img_en.src} alt="" /> */}
                            <span className='font-semibold'>EN</span>
                            English
                        </div>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}