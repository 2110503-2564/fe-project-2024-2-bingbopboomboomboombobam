import { UserRoundCheck, UserRoundPlus } from "lucide-react";

export default function ConditionCard({ isDriver, text }: { isDriver: boolean, text: string }) {
    return (
        <div className="w-max-1/2 bg-s-grey-600 border-2 border-s-grey-400 rounded-md flex gap-2 justify-center items-center px-3 py-2">
            {isDriver ? <UserRoundCheck size={20} className="text-red-600" /> : <UserRoundPlus size={20} className="text-red-600" />}
            <div className="flex flex-col items-start">
                {isDriver ? <div className="text-xs text-s-grey-100 font-medium">Driver’s License</div> : <div className="text-xs text-s-grey-100 font-medium">Minimum Age</div>}
                <div className="text-xs text-white font-light"></div>
                <div className="text-xs text-white font-light">{text}</div>
            </div>
        </div>
    )

}