import { TaskCard } from "@/components/task_card";

export default function DashboardPage() {
  return (
    <div className="w-full px-5 sm:px-16 my-10">
      <div className="border-4 grid grid-cols-2 grid-rows-2 border-gray-300 rounded-md p-12">
        <div className="sm:px-2 px-10 py-2 shadow-lg w-full">
          <div className="sm:p-4 p-8">
            <div className="flex items-center justify-between">
              <div>
                <span>icon</span>
                <span>TAREFAS</span>
              </div>
              <button>adicionar tarefa</button>
            </div>
            <div className="flex items-start space-x-4 font-medium ">
              <span>20 Junho</span>
              <div className="text-gray-400 flex items-baseline">
                <span className="relative capitalize before:w-1 before:h-1 before:bg-gray-400 before:rounded-full before:absolute before:-left-2 before:bottom-2">hoje</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full items-center space-y-4">
            <TaskCard />
          </div>



        </div>
        <div className="shadow-lg border-gray-300 rounded-md p-12">

        </div>
      </div>
    </div>
  );
}
