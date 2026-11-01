import React, { useState } from "react"

export function CurrencyInput() {
    const [value, updateValue] = useState("")

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const numbers = e.target.value.replace(/\D/g, "")

        const formatted = numbers ? (Number(numbers) / 100).toLocaleString("pt-BR", {minimumFractionDigits: 2, maximumFractionDigits:2}) : ""

        updateValue(formatted)
    }

    return(
        <div className="flex items-center gap-2 w-full h-12 px-3.5 py-2.5 rounded-[10px] border border-[#D7DFEA] focus:outline-none">
            <span className="text-[13px] text-[#98A2B3]">R$</span>
            <input type="text" value={value} onChange={handleChange} step={0.01} placeholder="0,00" className=" w-full h-4.2 border border-none focus:outline-none placeholder:text-[#98A2B3] placeholder:text-[13px]"/>
        </div>
    )
}