import { useState } from "react";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";

export function Calendar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [currentView, setCurrentView] = useState<Date>(new Date());

    const daysOfWeek = ['SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB', 'DOM'];

    const formatSelectedDate = (date: Date) => {
        return date.toLocaleDateString('pt-BR', {
            day: '2-digit', month: '2-digit', year: 'numeric'
        });
    };

    const formatMonthYear = (date: Date) => {
        const month = date.toLocaleDateString('pt-BR', { month: 'long' });
        const year = date.getFullYear();
        return `${month.charAt(0).toUpperCase() + month.slice(1)} ${year}`;
    };

    const handlePrevMonth = () => {
        setCurrentView(new Date(currentView.getFullYear(), currentView.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentView(new Date(currentView.getFullYear(), currentView.getMonth() + 1, 1));
    };

    const handleSelectDate = (date: Date) => {
        setSelectedDate(date);
        setCurrentView(date);
        setIsOpen(false);
    };

    const isSameDate = (d1: Date, d2: Date) => {
        return d1.getDate() === d2.getDate() &&
            d1.getMonth() === d2.getMonth() &&
            d1.getFullYear() === d2.getFullYear();
    };

    interface CalendarDay {
        day: number;
        isCurrentMonth: boolean;
        date: Date;
    }

    const generateDays = (): CalendarDay[] => {
        const year = currentView.getFullYear();
        const month = currentView.getMonth();

        let startDayIndex = new Date(year, month, 1).getDay();
        startDayIndex = startDayIndex === 0 ? 6 : startDayIndex - 1;

        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const prevMonthDays = new Date(year, month, 0).getDate();

        const days: CalendarDay[] = [];

        for (let i = startDayIndex - 1; i >= 0; i--) {
            days.push({
                day: prevMonthDays - i,
                isCurrentMonth: false,
                date: new Date(year, month - 1, prevMonthDays - i)
            });
        }

        for (let i = 1; i <= daysInMonth; i++) {
            days.push({
                day: i,
                isCurrentMonth: true,
                date: new Date(year, month, i)
            });
        }

        const remainingDays = 42 - days.length;
        for (let i = 1; i <= remainingDays; i++) {
            days.push({
                day: i,
                isCurrentMonth: false,
                date: new Date(year, month + 1, i)
            });
        }

        return days;
    };

    const calendarDays = generateDays();

    return (
        <div className="relative inline-block w-full max-w-83">

            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full h-12 px-3.5 py-2.5 rounded-[10px] border border-[#D7DFEA] focus:outline-none bg-white"
            >
                <div className="flex items-center text-[13px] text-[#172033] font-medium tracking-wide">
                    {formatSelectedDate(selectedDate)}
                </div>
                <CalendarIcon size={14} color="#667085" />
            </button>

            {isOpen && (
                <div className="absolute left-0 z-50 w-83 h-68 top-14 bg-[#FFFFFF] border border-[#D7DFEA] rounded-[14px] p-4 font-sans shadow-lg select-none flex flex-col">

                    <div className="flex justify-between items-center mb-2.5">
                        <h2 className="text-[#172033] text-[15px] font-bold tracking-wide">
                            {formatMonthYear(currentView)}
                        </h2>

                        <div className="flex gap-1.5">
                            <button
                                type="button"
                                onClick={handlePrevMonth}
                                className="flex items-center justify-center w-7 h-7 bg-[#F8FAFD] border border-[#D7DFEA] rounded-md text-[#667085] hover:bg-[#E4EAF2] transition-colors cursor-pointer"
                            >
                                <ChevronLeft size={14} strokeWidth={2} />
                            </button>
                            <button
                                type="button"
                                onClick={handleNextMonth}
                                className="flex items-center justify-center w-7 h-7 bg-[#F8FAFD] border border-[#D7DFEA] rounded-md text-[#667085] hover:bg-[#E4EAF2] transition-colors cursor-pointer"
                            >
                                <ChevronRight size={14} strokeWidth={2} />
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-7 gap-1 mb-1.5">
                        {daysOfWeek.map((day) => (
                            <div key={day} className="text-center text-[#667085] text-[10px] font-bold">
                                {day}
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-7 gap-y-0.5 gap-x-1 flex-1 content-start">
                        {calendarDays.map((dateObj, i) => {
                            const isSelected = isSameDate(dateObj.date, selectedDate);

                            return (
                                <div key={i} className="flex justify-center items-center h-7">
                                    <button
                                        type="button"
                                        onClick={() => handleSelectDate(dateObj.date)}
                                        className={`
                                            w-7 h-7 flex items-center justify-center rounded-lg text-[13px] transition-colors cursor-pointer
                                            ${isSelected
                                                ? 'bg-[#2363EB] text-[#FFFFFF] font-medium shadow-sm hover:bg-[#2363EB]/90'
                                                : ''
                                            }
                                            ${!isSelected && dateObj.isCurrentMonth
                                                ? 'text-[#172033] hover:bg-[#F8FAFD]'
                                                : ''
                                            }
                                            ${!isSelected && !dateObj.isCurrentMonth
                                                ? 'text-[#98A2B3] hover:bg-[#F8FAFD]'
                                                : ''
                                            }
                                        `}
                                    >
                                        {dateObj.day}
                                    </button>
                                </div>
                            );
                        })}
                    </div>

                </div>
            )}
        </div>
    );
}