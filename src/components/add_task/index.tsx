import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DatePicker } from "../date_picker"

export const AddTask = () => {
    return (
        <div className="text-base h-[30rem] space--4">
            This action cannot be undone. This will permanently delete your account
            and remove your data from our servers.
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="Email" />
            </div>
            <Label htmlFor="email">Email</Label>
            <div className="fixed z-50">
                <DatePicker />
            </div>
        </div>
    )
}