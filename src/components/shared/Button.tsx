type ButtonProps = {
  icon?: React.ReactNode;
  children: React.ReactNode;
};

export function Button({ icon, children }: ButtonProps) {
    return(
        <button className="flex justify-center items-center px-4 gap-2 text-[13px] w-auto h-10 rounded-lg text-white bg-[#2264E5]">
            {icon}
            {children}
        </button>
    )
}