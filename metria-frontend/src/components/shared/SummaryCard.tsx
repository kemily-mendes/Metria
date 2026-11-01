import { TrendingUp } from "lucide-react";

interface SummaryCardProps {
    bgColor: string;
    title: string;
    titleColor: string;
    bgIconColor: string;
    icon: React.ElementType;
    iconColor: string;
    mainValue: string;
    mainValueColor: string;
    subtitle: string;
    trendText: string;
}

export function SummaryCard({
    bgColor,
    title,
    titleColor,
    icon: Icon,
    bgIconColor,
    iconColor,
    mainValue,
    mainValueColor, 
    subtitle,
    trendText,
    }: SummaryCardProps) {
    return(
        <div className={`flex flex-col justify-between w-68.5 h-38.5 p-5 rounded-2xl ${bgColor}`}>
            <div className="flex items-center justify-between w-58.5 h-7.5">
                <p className={`text-[13px] font-semibold ${titleColor}`}>{title}</p>
                <div className={`flex items-center justify-center w-7.5 h-7.5 rounded-lg ${bgIconColor}`}>
                    <Icon size={20} strokeWidth={1.5} className={iconColor}/>
                </div>
            </div>
            <div>
                <p className={`text-[25px] ${mainValueColor}`}>{mainValue}</p>
                <div className="flex justify-between">
                    <p className="text-[11px] text-[#9EB4CA]">{subtitle}</p>
                    <div className="flex justify-center items-center gap-1">
                        <TrendingUp size={16} strokeWidth={1.5} color="#16835B"/>
                        <p className="text-[12px] text-[#16835B]">{trendText}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}