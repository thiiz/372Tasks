import { ProgressBar } from "@/components/progessbar";
import { TasksComponent } from "@/components/tasks";

export default function DashboardPage() {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()} de ${currentDate.toLocaleString("pt-BR", {
    month: "long",
  })}`;
  return (
    <div className="w-full px-4 xl:pl-[7rem] xl:pr-12 my-10 inline-flex">
      <div className="xl:border-4 mt-6 xl:mt-0 grid xl:grid-cols-2 xl:grid-rows-2 max-h-[51rem] xl:border-gray-300 rounded-md xl:p-12">
        <TasksComponent />
        <ProgressBar className="row-span-1 hidden xl:grid xl:grid-cols-3 xl:grid-rows-3 xl:gap-1 xl:justify-between xl:items-start xl:shadow-lg xl:border-gray-300 xl:rounded-md 
        xl:px-5 px-10 py-2 w-full p-[6.5rem]"/>
      </div>
    </div >
  );
}
