"use client"

import { FormEventHandler, useEffect, useState } from 'react'
import { Checkbox, Modal, Select, Tooltip } from "rizzui";
import { IoPerson } from "react-icons/io5";
import { IoMdPerson } from "react-icons/io";
import { ActionIcon, Button, Input } from "rizzui";
import DatePicker from "./rizzui/DatePicker";
import useLang from "@/lang/useLang";
import { PiAirplaneTakeoffFill, PiAirplaneLandingFill } from "react-icons/pi";
import { LiaExchangeAltSolid } from "react-icons/lia";
import { MdDelete, MdEmail, MdFilterList } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import TravelersInput from './Global/TravelersInput';
import { AiOutlinePlus } from 'react-icons/ai';
import CountrySearch from './Global/CountrySearch';
import { FlightApi } from '@/api/flight';
import alertError from '@/utils/alertError';
import moment from 'moment';
import { useFlightValidationSchema } from '@/hooks/validations';
import { useFormik } from "formik";
import { LuBadgeCheck } from "react-icons/lu";
type FlightInputs = {
    fullname: string,
    email: string,
    phone: string,
    type: "round_trip" | "one_way" | "multi",
    direct: boolean,
    luggage: boolean,
    refundable: boolean,
    data: {
        address_distination: string,
        address_depart: string,
        start_date?: Date | null,
        end_date?: Date | null,
    }[],
    travelers: {
        adults: number,
        children: number,
        held_infants: number,
    },
    cabin: "economy" | "premium_economy" | "business" | "first",
}
export default function FormFlights() {
    const initialValues: FlightInputs = {
        fullname: "",
        email: "",
        phone: "",
        type: "one_way",
        direct: false,
        luggage: false,
        refundable: false,
        data: [
            {
                address_distination: "",
                address_depart: "",
                start_date: new Date(),
                end_date: null,
            }
        ],
        travelers: {
            adults: 1,
            children: 0,
            held_infants: 0,
        },
        cabin: "economy",
    }
    const validationSchema = useFlightValidationSchema()
    const [loading, setLoading] = useState(false)
    const [openModal, setOpenModal] = useState(false)

    const formik = useFormik({
        initialValues,
        onSubmit: (values: FlightInputs) => {

            setLoading(true)
            FlightApi.createFlight({
                ...values,
                data: values.data.map(el => {
                    return {
                        ...el,
                        start_date: moment(el.start_date).format("yyyy-MM-DD"),
                        end_date: el.end_date ? moment(el.end_date).format("yyyy-MM-DD") : ""
                    }
                })
            }).then(res => {
                setLoading(false)
                formik.resetForm()
                setOpenModal(true)
            }).catch(err => {
                alertError(err)
                setLoading(false)
            })
        },
        validationSchema
    });
    const changeDate = (date: [Date | null | undefined, Date | null | undefined], key: number) => {
        formik.setValues({
            ...formik.values,
            data: formik.values.data.map((item, index) => ({
                ...item,
                start_date: key == index ? date[0] ?? null : item.start_date,
                end_date: key == index ? date[1] ?? null : item.end_date
            }))
        })
    };
    const changeAddress = (value: string, key: number, name?: "address_depart" | "address_distination") => {
        if (!name) {
            let dt = { ...formik.values }
            let temp = dt.data[key].address_depart
            dt.data[key].address_depart = dt.data[key].address_distination
            dt.data[key].address_distination = temp
            formik.setValues(dt)
        }
        if (name)
            formik.setValues({
                ...formik.values,
                data: formik.values.data.map((item, index: number) => ({
                    ...item,
                    [name]: key == index ? value : item[name],
                }))
            })
    };
    const { t } = useLang()
    useEffect(() => {
        if (formik.values.type != "multi")
            formik.setValues({
                ...formik.values,
                data: [
                    formik.values.data[0]
                ]
            })
    }, [formik.values.type])





    return <div className="w-full  mt-2  flex justify-center">

        <form onSubmit={formik.handleSubmit} className=' grid grid-cols-2 max-sm:grid-cols-1 w-full gap-2 my-6 bg-white text-foreground p-2 rounded-[10px]'>
            <div className="flex items-center gap-2 no-scrollbar overflow-auto col-span-full">
                {
                    [
                        {
                            label: t.header.one_way,
                            key: "one_way",
                        },
                        {
                            label: t.header.round_trip,
                            key: "round_trip",
                        },
                        {
                            label: t.header.multi_city,
                            key: "multi",
                        },
                    ].map(el => {
                        return <Button
                            key={el.key}
                            onClick={() => formik.setValues({ ...formik.values, type: el.key as typeof formik.values.type })}
                            size='sm'
                            color={formik.values.type == el.key ? "primary" : undefined}
                            variant={formik.values.type == el.key ? "solid" : "flat"}
                            className={' whitespace-nowrap ' + (formik.values.type != el.key ? "text-primary" : "")}
                            rounded='pill'>
                            {el.label}
                        </Button>
                    })
                }

            </div>
            {
                [
                    {
                        placeholder: t.header.fullname,
                        key: "fullname",
                        className: "col-span-full",
                        icon: IoMdPerson
                    },
                    {
                        placeholder: t.hotel.phone_number,
                        key: "phone",
                        className: "",
                        icon: FaPhoneAlt
                    },
                    {
                        placeholder: t.hotel.email_address,
                        key: "email",
                        className: "",
                        icon: MdEmail
                    },
                ].map(el => (
                    <Input
                        placeholder={el.placeholder}
                        type="text"
                        name={el.key}
                        error={((formik.touched[el.key as "fullname" | "phone" | "email"]) && formik.errors[el.key as "fullname" | "phone" | "email"]) ? formik.errors[el.key as "fullname" | "phone" | "email"] : undefined}
                        onBlur={formik.handleBlur}
                        value={formik.values[el.key as "fullname" | "phone" | "email"]}
                        onChange={(e) => formik.setValues({ ...formik.values, [el.key]: e.target.value })}
                        prefix={<el.icon className="h-4 w-4" />}
                        required className={"grow w-full " + el.className} />
                ))
            }

            {
                formik.values.data.map((el, k) => {
                    return <div className='ps-4 py-2   border-s-2 border-primary col-span-full'>
                        <div className="flex items-center gap-2 max-sm:flex-col max-sm:justify-center w-full" key={k}>
                            <CountrySearch
                                placeholder={t.header.where_from}
                                type="text"
                                isSearch={true}
                                valueC={el.address_depart}
                                setValue={(e) => changeAddress(e, k, "address_depart")}
                                prefix={<PiAirplaneTakeoffFill className="h-4 w-4 rtl:scale-x-[-1]" />}
                                required
                                name={`data.${k}.address_depart`}
                                onBlur={formik.handleBlur}
                                containerClassName="grow"
                                className="grow w-full" />
                            <ActionIcon onClick={() => changeAddress("", k)} variant="outline" rounded="full" className="min-w-7 min-h-7" size="sm">
                                <LiaExchangeAltSolid className='max-md:rotate-90' />
                            </ActionIcon>

                            <CountrySearch
                                placeholder={t.header.where_to}
                                type="text"
                                isSearch={true}
                                valueC={el.address_distination}
                                containerClassName="grow"
                                name={`data.${k}.address_distination`}
                                setValue={(e) => changeAddress(e, k, "address_distination")}
                                prefix={<PiAirplaneLandingFill className="h-4 w-4 rtl:scale-x-[-1]" />}
                                required className="grow w-full" />
                        </div>
                        <div className='flex items-center gap-2 w-full relative z-30 mt-2'>
                            <div className="grid grow">
                                <DatePicker
                                    key={formik.values.type}
                                    calendarClassName="w-full grow"
                                    minDate={new Date()}
                                    monthsShown={1}
                                    {
                                    ...formik.values.type == "round_trip" ?
                                        {
                                            onChange: (dates: [Date | null, Date | null]) => {
                                                const [start, end] = dates;
                                                changeDate([start, end], k)
                                            },
                                            startDate: el.start_date,
                                            endDate: el.end_date,
                                            selectsRange: true
                                        } :
                                        {
                                            onChange: (date: Date | null) => {
                                                changeDate([date, null], k)
                                            },
                                            selected: el.start_date
                                        }
                                    }

                                    placeholderText={t.header.select_date}
                                    inputProps={{
                                        clearable: true,
                                        onClear: () => {
                                            changeDate([null, null], k)
                                        },
                                        name: `data.${k}.start_date`,
                                        className: " w-full grow",
                                    }}

                                />
                            </div>
                            {formik.values.data.length > 1 && <ActionIcon onClick={() => {
                                let dt = { ...formik.values }
                                dt.data.splice(k, 1)
                                formik.setValues(dt)
                            }} size="sm" className='text-red-600' variant='text'>
                                <MdDelete />
                            </ActionIcon>}

                        </div>
                    </div>
                })
            }
            {
                formik.values.type == "multi" && <div className='col-span-full flex justify-center'>
                    <Tooltip content={t.header.add_flight}>
                        <ActionIcon onClick={() => {
                            formik.setValues({
                                ...formik.values,
                                data: [
                                    ...formik.values.data,
                                    {
                                        address_distination: "",
                                        address_depart: "",
                                        start_date: null,
                                        end_date: null,
                                    }
                                ]
                            })
                        }} className='' rounded='full' color='primary' size='sm' variant='solid' >
                            <AiOutlinePlus />
                        </ActionIcon>
                    </Tooltip>

                </div>
            }

            <TravelersInput
                placeholder={t.header.travelers}
                type="text"
                data={formik.values.travelers}
                setData={(e: any) => {
                    formik.setValues({ ...formik.values, travelers: e })
                }}
                prefix={<IoPerson className="h-4 w-4 rtl:scale-x-[-1]" />}
                required className="grow w-full" />

            <Select
                placeholder={t.header.cabin}
                prefix={<MdFilterList className="h-4 w-4 rtl:scale-x-[-1]" />}
                options={[
                    { label: t.header.economy, value: 'economy' },
                    { label: t.header.premium_economy, value: 'premium_economy' },
                    { label: t.header.business, value: 'business' },
                    { label: t.header.first, value: 'first' },
                ]}
                displayValue={(value: string) => {
                    return (
                        {
                            economy: t.header.economy,
                            premium_economy: t.header.premium_economy,
                            business: t.header.business,
                            first: t.header.first,
                        }[value]
                    )
                }}
                value={formik.values.cabin}
                onChange={(e: any) => formik.setValues({ ...formik.values, cabin: e.value })}
            />
            <div className="mt-2 p-1 flex gap-4 max-sm:flex-col col-span-full">
                {
                    [
                        {
                            label: t.header.direct,
                            key: "direct",
                        },
                        {
                            label: t.header.luggage,
                            key: "luggage",
                        },
                        {
                            label: t.header.refundable,
                            key: "refundable",
                        },
                    ].map(el => {
                        return <Checkbox
                            key={el.key}
                            onChange={(_) => formik.setValues({ ...formik.values, [el.key]: !formik.values[el.key as "direct" | "luggage" | "refundable"] })}
                            label={el.label}
                            checked={formik.values[el.key as "direct" | "luggage" | "refundable"]}
                            size='sm'
                            labelClassName='text-foreground'
                        />
                    })
                }
            </div>
            <Button isLoading={loading} type="submit" color="primary" className='w-full col-span-full'>
                {t.header.book_now}
            </Button>
        </form>

        <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
            <div className="m-auto flex text-center gap-4 items-center justify-center flex-col px-7 pt-6 pb-8">
                <LuBadgeCheck className='w-20 h-20 text-green-600' />
                <h1 className='text-xl font-semibold'>{t.header.book_success}</h1>
                <p>{t.header.will_contact_u}</p>
                <Button color='primary' onClick={() => setOpenModal(false)} >
                    OK
                </Button>
            </div>
        </Modal>
    </div>
}






