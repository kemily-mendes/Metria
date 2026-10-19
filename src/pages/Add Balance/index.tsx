import { Header } from "./components/HeaderAddBalance"
import { Dropdown, type DropdownOption } from "../../components/shared/Dropdown"
import { useState } from "react";
import { CurrencyInput } from "../../components/shared/CurrencyInput";

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
            <div className="flex flex-col gap-5 w-180 h-156.75 bg-white rounded-[20px] p-6">
                <Header />
                <div className="flex flex-col gap-2">
                    <label className="font-bold text-[11px] text-[#667085]">FINANCIAL INSTITUTION</label>
                    <Dropdown options={banksMock} value={selectedBank} onChange={setSelectedBank}/>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-bold text-[11px] text-[#667085]">CURRENT NET BALANCE</label>
                    <CurrencyInput />
                </div>
                <div className="flex items-center justify-between w-2xl gap-4">
                    <div className="flex flex-col gap-2 w-83">
                        <label className="font-bold text-[11px] text-[#667085]">ENTRY DATE</label>
                        <CurrencyInput /> {/*improvised*/}
                    </div>
                    <div className="flex flex-col gap-2 w-83">
                        <label className="font-bold text-[11px] text-[#667085]">BALANCE SOURCE </label>
                        <Dropdown options={balanceSourcesMock} value={selectedBalanceSource} onChange={setSelectedBalanceSource}/>
                    </div>
                </div>
            </div>
        </main>
    )
}