import { Button } from "../../../components/shared/Button"
import { Plus } from "lucide-react"

export function HeaderOverview() {
    return(
        <div className="flex justify-between">
            <div className="flex flex-col">
                <h1 className="text-[26px] font-bold text-black">
                    Overview
                </h1>
                <p className="text-[14px] text-[#667085]">
                    A complete view of your finances, in one place.
                </p>
            </div>
            <Button icon={<Plus size={18} />} bgColor="bg-[#2264E5]" textColor="text-[#fff]">
                Add balance
            </Button>
        </div>
    )
}