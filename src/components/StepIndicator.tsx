import { Check } from "lucide-react"

interface StepIndicatorProps {
  steps: number
  currentStep: number
  onStepClick?: (step: number) => void
}

export default function StepIndicator({ steps, currentStep, onStepClick }: StepIndicatorProps) {
  return (
    <div className="flex flex-col gap-1 px-5 pb-4 w-96 text-white">
      <div className="flex justify-center items-center  ">
        <div className="relative flex items-center justify-center w-6 h-6 rounded-full bg-red-600">
          <div className="text-[10px] font-medium">1</div>
        </div>

        <div className={`flex-1 h-1 ${steps >= 1 ? 'bg-red-700' : 'bg-s-grey-100'}`} />
        <div className={`relative flex items-center justify-center w-6 h-6 rounded-full ${steps >= 1 ? 'bg-red-600' : 'bg-white'}`}>
          <div className={`text-[10px] font-medium ${steps >= 1 ? 'text-white':'text-red-600'}`}>2</div>
        </div>

        <div className={`flex-1 h-1 ${steps >= 2 ? 'bg-red-700' : 'bg-s-grey-100'}`} />
        <div className={`relative flex items-center justify-center w-6 h-6 rounded-full ${steps >= 2 ? 'bg-red-600' : 'bg-white'}`}>
          <Check size={15} width={100} className={`font-bold ${steps >= 2 ?  'text-white':'text-red-600'}`} />
        </div>

      </div>
      <div className="flex flex-row justify-between text-xs">
        <div className="w-20 text-left">Customer Info</div>
        <div className="w-20 text-center">Booking Info</div>
        <div className="w-20 text-right">Confirm!</div>
      </div>
    </div>
  )
}

