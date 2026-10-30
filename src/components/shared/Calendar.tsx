import { useState } from "react";
import { Calendar as CalendarIcon } from "lucide-react";


export function Calendar() {
    const [isOpen, setIsOpen] = useState(false)

    return(
        <div className="relative">
            <button onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-between w-full h-12 px-3.5 py-2.5 rounded-[10px] border border-[#D7DFEA] focus:outline-none">
                <div className="flex items-center w-19 h-4 text-[13px] text-[#172033]">
                    29/10/2026
                </div>
                <CalendarIcon size={14} color="#667085"/>
            </button>

            {isOpen && (
                <div className="absolute w-full h-auto top-14 overflow-hidden rounded-xl border border-[#D7DFEA]">
                    
                </div>
            )}
        </div>
    )
}