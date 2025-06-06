import { useState } from "react"
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'

const FAQItem = ({item}) => {

    const [isOpen,setIsOpen] = useState(false);

    const toggleAccordion = ()=> {
        setIsOpen(!isOpen);
    };


  return (
    <div className="p-3 lg:p-5 rounded-[12px] border border-solid border-[#D9DCE2] 
    mb-5 cursor-pointer"
    onClick={toggleAccordion}>
        <div className="flex items-center justify-between gap-5">
            <h4 className="text-[16px] leading-7 lg:text-[22px] lg:leading-8">{item.question}</h4>
            <div className={`${isOpen && 'bg-primaryColor text-white border-none'}w-7 h-7 lg:w-8 lg:h-8 border border-solid border-[#141F21] rounded 
            flex items-center justify-center`}>
            {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </div>
        </div>

        {isOpen && <div className="mt-4">
        {/* Adds or removes dropdown text whenever you click on the plus or minus button. */}
          <p className="text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-textColor">
          {item.content}</p>
        </div>}
    </div>
  )
}

export default FAQItem
