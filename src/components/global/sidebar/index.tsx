import { Link } from "@tanstack/react-router";
import { LayoutGrid, PiggyBank } from 'lucide-react';

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
                <Link to="/" activeProps={{className: "bg-[#1B426B]"}} className="flex justify-between items-center w-48 h-11 mx-5 rounded-lg px-3 text-white focus:outline-none">
                    {( {isActive} ) => (
                        <>
                            <div className="flex items-center gap-3">
                                <LayoutGrid size={20}/>
                                <span className="text-[14px]">Overview</span>
                            </div>
                            {isActive && <div className="w-1.5 h-1.5 rounded-full bg-[#63A0FF]"></div>}
                        </>
                    )}
                </Link>
                <Link to="/addBalance" activeProps={{className: "bg-[#1B426B]"}} className="flex justify-between items-center w-48 h-11 mx-5 rounded-lg px-3 text-white focus:outline-none">
                    {({isActive}) => (
                        <>
                            <div className="flex items-center gap-3">
                                <PiggyBank size={20}/>
                                <span className="text-[14px]">Add Balance</span>
                            </div>
                            {isActive && <div className="w-1.5 h-1.5 rounded-full bg-[#63A0FF]"></div>}
                        </>
                    )}
                </Link>
            </nav>
        </aside>
    );
}