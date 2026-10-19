import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface DropdownOption {
    id: number | string;
    label: string;
    iconUrl?: string;
}

interface DropdownProps {
    options: DropdownOption[];
    value?: DropdownOption | null;
    onChange: (selectedOption: DropdownOption) => void;
    placeholder?: string;
}

export function Dropdown({options, value, onChange, placeholder = "Select an option"}: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false)

    const renderIcon = (option: DropdownOption) => {
        if (option.iconUrl) {
            return <img src={option.iconUrl} alt={option.label}  className="w-7 h-7 rounded-lg"/>
        }
        return null;
    }

    return(
        <div className="relative">
            <button onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-between w-full h-12 px-3.5 py-2.5 rounded-[10px] border border-[#D7DFEA] focus:outline-none">
                <div className="flex items-center gap-2.5 w-157.5 h.7">
                    {value ? renderIcon(value) : null}
                    <span className={`w-auto text-[13px] font-semibold ${value ? "" : "text-[#98A2B3]"}`}>{value ? value.label : placeholder}</span>
                </div>
                <ChevronDown size={14} color="#667085" className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}/>
            </button>

            {isOpen && (
                <div className="absolute w-full h-auto top-14 overflow-hidden rounded-xl border border-[#D7DFEA]">
                    {options.map((item) => {
                        const isSelected = value?.id === item.id
                        return (
                            <div key={item.id} onClick={() => {onChange(item); setIsOpen(false)}} className={`flex items-center w-2xl h-12 px-3.5 py-2.5 gap-2.5 border-b border-[#D7DFEA] cursor-pointer hover:bg-gray-100 ${isSelected ? "bg-[#F8FAFD] font-semibold" : ""}`}>
                                {renderIcon(item)}
                                <span className="flex items-center w-151.5 h-4 text-[13px]}">{item.label}</span>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}