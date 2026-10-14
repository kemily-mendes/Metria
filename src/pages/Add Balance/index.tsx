import { Header } from "./components/HeaderAddBalance"
import { Dropdown } from "../../components/shared/Dropdown"

export function AddBalance() {
    return (
        <main className="flex items-center justify-center">
            <div className="flex flex-col gap-5 w-180 h-156.75 bg-white rounded-[20px] p-6">
                <Header />
                <label className="font-bold text-[11px] text-[#667085]">FINANCIAL INSTITUTION</label>
                <Dropdown />
            </div>
        </main>
    )
}