

import { useState } from "react"
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
const c = "w-full inline-block p-4 border-b-2 rounded-t-lg font-normal max-md:p-1 max-md:py-3 whitespace-nowrap"
const ac = " text-primary cursor-pointer  border-primary active dark:text-blue-500 dark:border-blue-500 "
const nc = " border-transparent cursor-pointer  hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 "
export default function Taps({
  items,
  className = ""
}: {
  items: Array<any>,
  className?: string
}) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <div className={" text-sm font-medium  text-gray-500  dark:text-gray-400 " + className}>
        <ul className="flex   text-center border-b border-gray-200 dark:border-gray-700 space-x-8 overflow-x-aut">
          <li className="me-2 max-md:m-0 hidden max-sm:inline p-0">
            <div  className={c+" h-full border-transparent scale-125 "+(activeTab==0?" opacity-70 cursor-auto":"")} onClick={()=>{
              setActiveTab(activeTab>=1?activeTab-1:activeTab)
            }}>
              <IoIosArrowBack />
            </div>
          </li>
          {
            items.map((el: any, k: any) => {
              return <li className={" me-2 max-md:m-0 "+(k!=activeTab?"max-sm:hidden ":"max-sm:grow")} key={k} onClick={() => setActiveTab(k)}>
                <div  className={c + (activeTab == k ? ac : nc)}>{el.title}</div>
              </li>
            })
          }
          <li className="me-2 max-md:m-0  hidden max-sm:inline p-0">
            <div  className={c+" h-full border-transparent scale-125 "+(activeTab==items.length-1?" opacity-70 cursor-auto":"")} onClick={()=>{
              setActiveTab(activeTab<items.length-1?activeTab+1:activeTab)
            }}>
              <IoIosArrowForward />
            </div>
          </li>
        </ul>
        <div className="font-normal mt-6">
          {items[activeTab].body}
        </div>
      </div>
    </>
  );
}
