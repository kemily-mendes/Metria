import { Link } from "@tanstack/react-router";
import { LayoutGrid, Building2, ArrowLeftRight, ChartNoAxesColumnIncreasing, Settings } from 'lucide-react';

export function Sidebar() {
    return (
        <aside className="bg-[#102D4F] h-screen w-64">
            <header className="flex items-center gap-3 p-6 ">
                <div className="flex items-center justify-center w-13 h-9 rounded-xl font-bold text-[#ffffff] bg-[#2264E5]">
                    M
                </div>
                <div>
                    <h1 className="text-xl font-semibold text-[#ffffff]">MÉTRIA</h1>
                    <p className="text-xs text-[#AFC2D8]">Calculate what your investiments really deliver.</p>
                </div>
            </header>

            <nav className="mt-11 flex flex-col gap-2">
                <span className="px-6 text-[10px] font-bold text-[#7892AF]">MENU</span>
                <Link to="/" className="flex justify-between items-center w-48 h-11 mx-5 rounded-lg px-3 text-white bg-[#1B426B]">
                    <div className="flex items-center gap-3">
                        <LayoutGrid size={20}/>
                        <span className="text-[14px]">Overview</span>
                    </div>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#63A0FF]"></div>
                </Link>
                <Link to="/" className="flex justify-between items-center w-48 h-11 mx-5 rounded-lg px-3 text-white">
                    <div className="flex items-center gap-3">
                        <Building2 size={20}/>
                        <span className="text-[14px]">Institutions</span>
                    </div>
                </Link>
                <Link to="/" className="flex justify-between items-center w-48 h-11 mx-5 rounded-lg px-3 text-white">
                    <div className="flex items-center gap-3">
                        <ArrowLeftRight size={20}/>
                        <span className="text-[14px]">Transactions</span>
                    </div>
                </Link>
                <Link to="/" className="flex justify-between items-center w-48 h-11 mx-5 rounded-lg px-3 text-white">
                    <div className="flex items-center gap-3">
                        <ChartNoAxesColumnIncreasing size={20}/>
                        <span className="text-[14px]">Reports</span>
                    </div>
                </Link>
                <Link to="/" className="flex justify-between items-center w-48 h-11 mx-5 rounded-lg px-3 text-white">
                    <div className="flex items-center gap-3">
                        <Settings size={20}/>
                        <span className="text-[14px]">Settings</span>
                    </div>
                </Link>
            </nav>
        </aside>
    );
}