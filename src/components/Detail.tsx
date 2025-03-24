import React from "react";

export default function Detail({ label, value, children }: { label: string, value: string, children: React.ReactNode }) {
    return (
        <div className="flex flex-row px-3 py-1 justify-left gap-x-2 items-center">
            <div className="text-red-500">
                {children}
            </div>
            <div className="flex flex-col items-start justify-center">
                <div className="text-white text-sm/tight medium">
                    {label}
                </div>
                <div className="text-s-grey-100 text-base/tight font-medium">
                    {value}
                </div>
            </div>
        </div>
    )
}