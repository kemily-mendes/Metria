import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface DropdownOption {
    id: string | number;
    iconUrl?: string;
    label: string;
}

interface DropdownProps {
    options: DropdownOption[];
    value?: DropdownOption | null;
    onChange: (option: DropdownOption) => void;
    placeholder?: string
}

export function Dropdown({options, value, onChange, placeholder = "Select an option"}:DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);

    const renderIcon = (option: DropdownOption) => {
        if(option.iconUrl) {
            return <img src={option.iconUrl} alt={option.label} className="w-7 h-7 rounded-lg"/>;
        }
        return null;
    }

    return(
        <div className="relative">
            <button onClick = {() => setIsOpen(!isOpen)} className="flex items-center justify-between w-2xl h-12 rounded-[10px] border border-[#D7DFEA] px-3.5 focus:outline-none">
                <div className="flex items-center justify-center gap-2.5">
                    {value ? renderIcon(value) : null}
                    <span className="text-[13px] font-semibold text-[#172033]">
                        {value ? value.label : placeholder}
                    </span>
                </div>
                <ChevronDown size={14} color="#667085" className={`transition-transform ${isOpen ? 'rotate-180' : '' }`} />
            </button>
            
            {isOpen && (
                <div className="absolute w-2xl top-14 h-auto border border-[#D7DFEA] rounded-xl overflow-hidden">
                    {options.map((option) => {
                        const isSelected = value?.id === option.id;
                        return (
                            <div key={option.id} onClick={() => {onChange(option); setIsOpen(false); }}
                            className={`flex items-center w-2xl h-12 px-3.5 py-2.5 gap-2.5 border-b border-[#D7DFEA] cursor-pointer ${isSelected ? "bg-[#F8FAFD] font-semibold" : "bg-white"}`}>
                                {renderIcon(option)}                   
                                <span className="w-151.5 h-4 text-[13px] text-[#172033]">{option.label}</span>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    )
}