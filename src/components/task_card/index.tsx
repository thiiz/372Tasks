import Image from "next/image";

export const TaskCard = () => {
    return (
        <div className="mx-auto bg-white shadow-md rounded-lg border border-gray-200 sm:p-4 p-8">
            <div className="flex items-start">
                <div className="w-full">
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">
                        Attend Nischal’s Birthday Party
                    </h2>

                    <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-600 mb-4">
                            Buy gifts on the way and pick up cake from the bakery. (6 PM | Fresh Elements)
                        </p>
                        <div className="relative w-12 h-12 sm:w-24 sm:h-24">
                            <Image
                                src="https://via.placeholder.com/100"
                                alt="Party"
                                className="w-12 h-12 rounded-md object-cover border border-gray-300"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>

                    </div>
                    <div className="flex items-baseline justify-between">
                        <p className="text-sm font-medium">
                            Priority: <span className="text-blue-500">Moderate</span>
                        </p>
                        <p className="text-sm font-medium">
                            Status: <span className="text-red-500">Not Started</span>
                        </p>
                        <p className="text-xs text-gray-500 mt-2">
                            Created on: 20/06/2023
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};
