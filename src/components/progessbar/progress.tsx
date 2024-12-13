import { cn } from "@/lib/utils"
import { FC } from "react";
interface ProgressProps {
    className?: string; // Tornando 'className' opcional
}

export const Progress: FC<ProgressProps> = ({ className }) => {
    return (
        <div className="relative flex items-center w-[5rem] h-[5rem] xl:w-40 xl:h-40 rounded-full">
            <svg className="relative w-full h-full">
                <circle className="w-full h-full fill-transparent stroke-slate-400 stroke-[6%]" cx="50%" cy="50%" r="46%" strokeLinecap="round"></circle>
                <circle className={cn('w-full h-full fill-transparent stroke-slate-500 stroke-[6%]', className)} cx="50%" cy="50%" r="46%" strokeLinecap="round" strokeDasharray="calc(192 * 0.46 * 2 * 3.1416)" strokeDashoffset="calc(192 * 0.46 * 2 * 3.1416 - (192 * 0.46 * 2 * 3.1416 * 90) / 100)"></circle>
            </svg>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <h2 className="text-xl xl:text-5xl font-bold text-slate-500">90<span>%</span></h2>
            </div>
        </div >
    )
}