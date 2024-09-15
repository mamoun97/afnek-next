"use client"
import { Avatar, Dropdown } from 'rizzui'
import { useTranslation } from 'react-i18next'
import images from '@/assets'

export default function ButtonLang() {
    const { i18n } = useTranslation()

    const langsicon = (l: any) =>
        l == "fr" && images.img_fr.src ||
        l == "en" && images.img_en.src ||
        l == "dz" && images.img_ar.src || images.img_ar.src
    return (
        <>

            <Dropdown>
                <Dropdown.Trigger>
                    <div className='flex items-center gap-2 cursor-pointer text-sm font-bold '>
                        <Avatar src={langsicon(i18n?.language ?? "ar")}
                            className="ring-1 ring-white font-afnek ring-offset-background ring-offset-1"
                            name='' size='sm' />
                        {
                            i18n.language == "ar" && "العربية" ||
                            i18n.language == "fr" && "Français" ||
                            i18n.language == "en" && "English"
                        }
                    </div>
                </Dropdown.Trigger>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => i18n.changeLanguage("ar")}>
                        <div className='flex items-center gap-2'>
                            <img className='h-4' src={images.img_ar.src} alt="" />
                            العربية
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => i18n.changeLanguage("fr")}>
                        <div className='flex items-center gap-2'>
                            <img className='h-4' src={images.img_fr.src} alt="" />
                            Français
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => i18n.changeLanguage("en")}>
                        <div className='flex items-center gap-2'>
                            <img className='h-4' src={images.img_en.src} alt="" />
                            English
                        </div>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}