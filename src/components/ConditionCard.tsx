import { UserRoundPlus } from "lucide-react";

export default function ConditionCard() {
    return (
        <div className="w-1/2 bg-s-grey-600 border-2 border-s-grey-400 rounded-md flex gap-2 justify-center items-center px-3 py-2">
            <UserRoundPlus className="text-red-600" />
            <div className="flex flex-col items-start">
                <div className="text-xs text-s-grey-100 font-medium">Driver’s License</div>
                <div className="text-xs text-white font-light">International or Category 2 with 2+ years of experience.</div>
            </div>
        </div>
    )

}