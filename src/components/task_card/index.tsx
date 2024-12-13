import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";

export const TaskCard = () => {
    return (
        <div className="relative my-4 mx-auto bg-white rounded-lg border border-gray-200 sm:px-14 sm:py-5 px-6 py-4">
            <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                <Checkbox className={`flex items-center justify-center absolute left-1 top-1 sm:left-4 sm:top-4 w-4 h-4 sm:w-6 sm:h-6 rounded-full border-[3px] border-red-600 data-[state=checked]:bg-red-600 transition-colors duration-800 ease-in-out`} />
                Attend Nischals Birthday Party
            </h2>
            <div className="flex justify-between">
                <p className="text-xs sm:text-sm text-gray-600 mb-2 flex flex-1">
                    Buy gifts on the way and pick up cake from the bakery. (6aaaaa PM | Fresh Elements)
                </p>
                <div className="relative w-14 h-14 sm:w-28 sm:h-28 ml-8 break-words">
                    <Image
                        src="https://via.placeholder.com/200"
                        alt="Party"
                        className="w-full h-full rounded-xl object-cover border border-gray-300"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
            </div>
            <div className="flex items-baseline justify-between text-xs sm:text-sm font-medium">
                <p className="flex flex-col">
                    <span className="self-center">Prioridade</span>
                    <span className="text-blue-500">Moderado</span>
                </p>
                <p className="flex flex-col">
                    <span className="self-center">Status</span>
                    <span className="text-red-500">Não iniciado</span>
                </p>
                <p className="text-xs text-gray-500 mt-2 self-end">
                    20/06/2023
                </p>
            </div>
        </div >
    );
};
