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
        </aside>
    );
}