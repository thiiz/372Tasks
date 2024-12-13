import { ScrollArea } from "@radix-ui/react-scroll-area"
import { TaskCard } from "@/components/task_card"
import { Clipboard, Clock } from "lucide-react"
import { AddButton } from "@/components/add_button"
import { ProgressBar } from "@/components/progessbar"

export const TasksComponent = () => {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()} de ${currentDate.toLocaleString("pt-BR", {
        month: "long",
    })}`;
    return (
        <div className="sm:px-5 px-2 py-2 shadow-lg w-full pb-[6.5rem] row-span-2">
            <div className="sm:px-4 px-1 pb-2">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-center space-x-2">
                        <div className="relative text-gray-400 inline-block">
                            <Clipboard size={28} />
                            <div className="bg-white absolute -right-1 -bottom-1 w-5 h-5 rounded-full flex items-center justify-center" >
                                <Clock className="bottom-0 right-0" />
                            </div>
                        </div>
                        <span className="text-theme-primary capitalize font-medium text-lg">tarefas</span>
                    </div>
                    <AddButton />
                </div>
                <div className="flex items-start space-x-4 font-normal mt-4 ">
                    <span>{formattedDate}</span>
                    <div className="text-gray-400 flex items-baseline">
                        <span className="relative capitalize before:w-1 before:h-1 before:bg-gray-400 before:rounded-full before:absolute before:-left-2 before:bottom-2">hoje</span>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center flex-1">
                <ProgressBar className="xl:hidden flex flex-wrap  gap-4 justify-around items-start shadow-lg border-gray-300 rounded-md 
        py-2 w-full"/>
            </div>
            <ScrollArea className="h-full flex flex-col w-full items-center sm:px-7 overflow-auto">
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
            </ScrollArea>
        </div>
    )
}