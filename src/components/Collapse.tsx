"use client"
import { useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function Collapse({
  title,
  children,
  childClassName = "",
  className = "",
  defaultOpen = false,
}: {
  title: any;
  children?: any;
  childClassName?: string;
  className?: string;
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [height, setHeight] = useState(0);
  const refH = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && refH.current) {
      setHeight(refH.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className={"border rounded-md bg-gray-100 overflow-hidden " + className}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 cursor-pointer flex items-center hover:bg-gray-200"
      >
        {title}
        <div className="flex-grow"></div>
        <IoIosArrowDown className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </div>
      <div
        className={`transition-[max-height] duration-300 ease-in-out overflow-hidden ${childClassName}`}
        style={{ maxHeight: `${height}px` }}
      >
        <div className="p-4" ref={refH}>
          {children}
        </div>
      </div>
    </div>
  );
}
