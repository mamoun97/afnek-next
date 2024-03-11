import React from "react"
import { MdCheck } from "react-icons/md"
export default function Steps({
    activeStep,
    setActiveStep,
    steps,
    className = "",
    isNumber = false
}: {
    activeStep: number, setActiveStep: Function,
    className?: string,
    steps: Array<any>, isNumber?: boolean
}) {
    if (setActiveStep) {

    }
    return (
        <>
            <ol className={"flex items-center w-full mb-4 sm:mb-5 justify-center p-4 rounded-md pb-12 ps-8 pe-8 max-md:p-4 " + className}>

                {
                    steps.map((el, k) => {
                        const isActive = k <= activeStep
                        return <React.Fragment key={k}>
                            <li className="">

                                <div className={"relative flex cursor-pointer items-center justify-center w-14 rounded-full h-14 text-xl max-md:w-10 max-md:h-10 max-md:text-base " + (isActive ? "text-white bg-blue-600" : "text-gray-900 bg-gray-200")}
                                    onClick={el.onClick}>
                                    {isActive && isNumber ? <MdCheck /> : el.icon}
                                    <div className="max-md:hidden mt-3 text-center text-black text-sm whitespace-nowrap absolute top-full left-1/2 translate-x-[-50%]">
                                        {el.name}
                                    </div>
                                </div>
                            </li>
                            {
                                k < steps.length - 1 && <div className={"grow border-2 w-full " + (k < activeStep ? "border-blue-200" : "border-gray-200")}></div>
                            }
                        </React.Fragment>
                    })
                }


            </ol>
        </>
    )
}
