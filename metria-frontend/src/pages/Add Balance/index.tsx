import { X } from 'lucide-react';
import { Dropdown, type DropdownOption } from "../../components/shared/Dropdown"
import { Calendar} from "../../components/shared/Calendar"
import { useState } from "react";
import { CurrencyInput } from "../../components/shared/CurrencyInput";
import { Button } from "../../components/shared/Button"

const banksMock: DropdownOption[] = [
    { id: 1, label: "Nubank", iconUrl: "/logos-bancos/nubank.svg" },
    { id: 2, label: "Inter", iconUrl: "/logos-bancos/inter.svg" },
    { id: 3, label: "Mercado Pago", iconUrl: "/logos-bancos/mercado-pago.svg" },
    { id: 4, label: "Banco do Brasil", iconUrl: "/logos-bancos/bb.svg" }
];

const balanceSourcesMock: DropdownOption[] = [
    { id: 1, label: "Carteira" },
    { id: 2, label: "Conta corrente" },
    { id: 3, label: "Conta poupança" },
    { id: 4, label: "Caixinhas, cofrinhos ou porquinhos" }
];

export function AddBalance() {
    const [selectedBank, setSelectedBank] = useState<DropdownOption | null>(null);
    const [selectedBalanceSource, setSelectedBalanceSource] = useState<DropdownOption | null>(null);

    return (
        <main className="flex items-center justify-center">
            <div className="flex flex-col gap-5 w-180 min-h-156.75 h-auto bg-white rounded-[20px] p-6">
                <div className="flex justify-between items-center gap-5">
                    <div className="flex flex-col">
                        <h1 className="text-[24px] font-bold">Add Balance</h1>
                        <p className="w-140 h-9.5 text-[13px] text-[#667085]">
                            Manually record an institution's current net balance to account for periods without automatic updates. 
                            The entry will be added to your balance history and reflected in your total net worth.
                        </p>
                    </div>
                    <div>
                        <button className="flex items-center justify-center w-8 h-8 rounded-[10px] focus:outline-none bg-[#F8FAFD] cursor-pointer">
                            <X size={20} color='#98A2B3'/>
                        </button>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label className="font-bold text-[11px] text-[#667085]">FINANCIAL INSTITUTION</label>
                        <Dropdown options={banksMock} value={selectedBank} onChange={setSelectedBank} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-bold text-[11px] text-[#667085]">CURRENT NET BALANCE</label>
                        <CurrencyInput />
                    </div>
                    <div className="flex items-start justify-between w-2xl gap-4">
                        <div className="flex flex-col gap-2 w-83">
                            <label className="font-bold text-[11px] text-[#667085]">ENTRY DATE</label>
                            <Calendar />
                        </div>
                        <div className="flex flex-col gap-2 w-83">
                            <label className="font-bold text-[11px] text-[#667085]">BALANCE SOURCE </label>
                            <Dropdown options={balanceSourcesMock} value={selectedBalanceSource} onChange={setSelectedBalanceSource} />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-3 w-2xl h-auto p-4 rounded-[14px] border border-[#E4EAF2] bg-[#F8FAFD]">
                    <p className="flex items-center h-4 font-bold text-[13px] text-[#172033]">What happens after saving?</p>
                    <div className="flex flex-col gap-2.5 w-160 h-16.25">    
                        <div className="flex items-center justify-between gap-2 w-160 h-3.75">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#2264E5]"></div>
                            <p className="flex items-center w-156.5 h-3.75 text-[12px] text-[#667085]">The value will be added to the selected institution's history.</p>
                        </div>
                        <div className="flex items-center justify-between gap-2 w-160 h-3.75">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#2264E5]"></div>
                            <p className="flex items-center w-156.5 h-3.75 text-[12px] text-[#667085]">The total net worth will be recalculated based on the provided date.</p>
                        </div>
                        <div className="flex items-center justify-between gap-2 w-160 h-3.75">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#2264E5]"></div>
                            <p className="flex items-center w-156.5 h-3.75 text-[12px] text-[#667085]">The net worth evolution chart will reflect the new historical data point.</p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-end w-2xl h-10">
                    <div className="flex gap-3">
                        <Button bgColor="bg-[#ffff]" textColor="text-[#102D4F]" borderColor="border-[#D7DFEA]">
                            Cancel
                        </Button>
                        <Button bgColor="bg-[#2264E5]" textColor="text-[#fff]">
                            Save
                        </Button>
                    </div>
                </div>

            </div>
        </main>
    )
}