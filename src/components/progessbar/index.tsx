import { cn } from "@/lib/utils"
import { Progress } from "./progress"
import { FC } from "react";

interface ProgressBarProps {
    className?: string; // Tornando 'className' opcional
}

export const ProgressBar: FC<ProgressBarProps> = ({ className }) => {
    return (
        <div className={cn(className)}>
            <Progress />
            <Progress />
            <Progress />
        </div>
    )
}