"use client"

import { useState } from "react"

interface ColorOption {
  name: string
  value: string
}

interface ColorPickerProps {
  defaultColor?: string
  onChange?: (color: string) => void
  isVertical?: boolean  // Add a prop to toggle between vertical and horizontal layouts
}

export default function ColorPicker({ defaultColor = "#FF0000", onChange, isVertical = false }: ColorPickerProps) {
  const [selectedColor, setSelectedColor] = useState(defaultColor)

  const colorOptions: ColorOption[] = [
    { name: "Red", value: "#FF0000" },
    { name: "Blue", value: "#0066FF" },
    { name: "Yellow", value: "#FFBB00" },
  ]

  const handleColorSelect = (color: string) => {
    setSelectedColor(color)
    if (onChange) {
      onChange(color)
    }
  }

  return (
    <div
      className={`flex items-center justify-start gap-2 rounded-lg ${isVertical ? "flex-col" : "flex-row"}`}
    >
      {colorOptions.map((color) => (
        <button
          key={color.name}
          className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-white"
          onClick={() => handleColorSelect(color.value)}
          aria-label={`Select ${color.name} color`}
        >
          <div
            className={
              selectedColor === color.value ? "w-8 h-8 rounded-full ring-2 ring-white" : "w-8 h-8 rounded-full"
            }
            style={{ backgroundColor: color.value }}
          />
        </button>
      ))}
    </div>
  )
}
