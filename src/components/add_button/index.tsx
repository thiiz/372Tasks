'use client'

import { Plus } from "lucide-react"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
export const AddButton = () => {
    return (
        <AlertDialog>
            <AlertDialogTrigger className="transition-colors ease-in-out duration-200 group flex items-center space-x-1 
        text-orange-600 hover:bg-orange-600 hover:text-secondary 
        sm:px-2 sm:py-2 px-1 py-1 rounded-xl border-2 border-gray-400 hover:border-orange-600">
                <Plus size={20} />
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Adicionar Tarefa</AlertDialogTitle>
                    <div className="text-base h-[30rem] flex flex-1">
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </div>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Salvar</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}