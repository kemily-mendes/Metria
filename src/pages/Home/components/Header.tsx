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
            <div className="">
                <Button icon={<Plus size={18} />}>
                    Add balance
                </Button>
            </div>
        </div>
    )
}