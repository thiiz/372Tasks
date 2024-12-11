import { Ellipsis } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full px-16">
      <div className="border-4 grid grid-cols-2 grid-rows-2 border-gray-300 rounded-md p-12">
        <div className="max-w-[50%] px-10 py-2 shadow-lg">

          <div>
            <span>icon</span>
            <span>TAREFAS</span>
            <button>adicionar tarefa</button>
          </div>
          <div>
            <span>20 Jun.</span>
            <span>hoje</span>
          </div>

          <div className="flex flex-col w-full items-center space-y-4">
            <div className="border-2 border-gray-300 rounded-xl py-3 px-6">

              <div className="">
                <div className="flex justify-between">
                  <p className="font-bold capitalize">Title</p>
                  <button className="translate-x-4 -translate-y-3 cursor-pointer z-10">
                    <Ellipsis />
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <span>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                  <Image src={''} alt="" fill />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>

                  prioridade
                </div>
                <div>
                  data
                </div>
              </div>
            </div>
            <div className="border-2 border-gray-300 rounded-xl p-3 px-6">

              <div className="">
                <p>Title</p>
                <div className="flex items-center justify-between">
                  <span>Tarefa</span>
                  <Image src={''} alt="" fill />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>

                  prioridade
                </div>
                <div>
                  data
                </div>
              </div>
            </div>
          </div>



        </div>
        <div className="shadow-lg border-gray-300 rounded-md p-12">

        </div>
      </div>
    </main>
  );
}
