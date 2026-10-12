import { SummaryCard } from "../../../components/shared/SummaryCard";
import { CalendarDays, ChartNoAxesCombined, Sun, WalletMinimal } from "lucide-react"

export function SummaryCards() {
    return(
        <div className="flex justify-between gap-4">
            <SummaryCard
                bgColor="bg-[#102D4F]"
                title="Total Net Worth"
                titleColor="text-[#FFFFFF]"
                bgIconColor="bg-[#1C4775]"
                icon={WalletMinimal}
                iconColor="text-[#77A9F4]"
                mainValue="R$ 187.191,26"
                mainValueColor="text-[#FFFFFF]"
                subtitle="3 institutions"
                trendText="+ R$ 86,42 today"
            />
            <SummaryCard
                bgColor="bg-[#ffffff]"
                title="Today's Earnings"
                titleColor="text-[#667085]"
                bgIconColor="bg-[#EAF1FF]"
                icon={Sun}
                iconColor="text-[#2264E5]"
                mainValue="+ R$ 86,42"
                mainValueColor="text-black"
                subtitle="After Taxes"
                trendText="+0,05%"
            />
            <SummaryCard
                bgColor="bg-[#ffffff]"
                title="Monthly Earnings"
                titleColor="text-[#667085]"
                bgIconColor="bg-[#EAF1FF]"
                icon={CalendarDays}
                iconColor="text-[#2264E5]"
                mainValue="+ R$ 2.741,35"
                mainValueColor="text-black"
                subtitle="Since October 1st"
                trendText="+1,49%"
            />
            
            <SummaryCard
                bgColor="bg-[#ffffff]"
                title="Investment Returns"
                titleColor="text-[#667085]"
                bgIconColor="bg-[#EAF1FF]"
                icon={ChartNoAxesCombined}
                iconColor="text-[#2264E5]"
                mainValue="+13,84%"
                mainValueColor="text-black"
                subtitle="Over 12 Months"
                trendText="1,7 p.p. Above CDI"
            />
        </div>
    )
}