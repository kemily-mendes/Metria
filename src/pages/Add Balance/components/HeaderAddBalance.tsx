import { X } from 'lucide-react';

export function Header() {
    return (
        <div className="flex justify-between items-center">
            <div className="flex flex-col">
                <h1 className="text-[24px] font-bold">Add Balance</h1>
                <p className=" w-140 h-9.5 text-[13px] text-[#667085]">
                    Manually record an institution's current net balance to account for periods without automatic updates. 
                    The entry will be added to your balance history and reflected in your total net worth.
                </p>
            </div>
            <div>
                <button className="flex items-center justify-center w-8 h-8 rounded-[10px] focus:outline-none bg-[#F8FAFD]">
                    <X size={20} color='#98A2B3'/>
                </button>
            </div>
        </div>
    )
}