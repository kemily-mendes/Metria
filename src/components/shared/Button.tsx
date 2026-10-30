type ButtonProps = {
  icon?: React.ReactNode;
  children: React.ReactNode;
  bgColor: string;
  textColor: string;
  borderColor?: string
};

export function Button({ icon, children, bgColor, textColor, borderColor = "border-transparent" }: ButtonProps) {
    return(
        <button className={`flex justify-center items-center px-4 gap-2 text-[13px] w-auto h-10 rounded-lg cursor-pointer focus:outline-none hover:brightness-110 active:scale-95 transition-all ${bgColor} ${textColor} border ${borderColor}`}>
            {icon}
            {children}
        </button>
    )
}