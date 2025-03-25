"use client"

import { useState } from "react"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import { createTheme, ThemeProvider } from "@mui/material/styles"

// Custom theme to match the design
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ef4444", // red-500 equivalent for the focus ring
    },
    background: {
      default: "#111827", // gray-900 equivalent
      paper: "#111827",
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#1f2937", // gray-800 equivalent
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ef4444", // red-500 equivalent
          },
        },
        input: {
          padding: "8px 12px",
          fontSize: "0.875rem",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "0.875rem",
        },
      },
    },
  },
})

export default function DateRangePicker({ booking }: { booking?: { startDate?: Date; endDate?: Date } }) {
  // Simple state just to make the component functional
  const [startDate, setStartDate] = useState<Date | null>(booking?.startDate || null)
  const [endDate, setEndDate] = useState<Date | null>(booking?.endDate || null)

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ThemeProvider theme={darkTheme}>
        <div className="w-full flex flex-row bg-[#111827] border border-[#0f172a] rounded-md text-white items-center">
          <div className="w-1/2 pr-1">
            <DatePicker
              label="Start Date"
              value={startDate}
              onChange={(newValue) => setStartDate(newValue)}
              slotProps={{
                textField: {
                  fullWidth: true,
                  size: "small",
                  placeholder: "Start Date",
                  InputProps: {
                    className: "rounded-l-md rounded-r-none border-r-0",
                  },
                },
              }}
            />
          </div>
          <div className="h-7 w-[2px] bg-[#0f172a] relative z-10" />
          <div className="w-1/2 pl-1">
            <DatePicker
              label="End Date"
              value={endDate}
              onChange={(newValue) => setEndDate(newValue)}
              slotProps={{
                textField: {
                  fullWidth: true,
                  size: "small",
                  placeholder: "End Date",
                  InputProps: {
                    className: "rounded-r-md rounded-l-none",
                  },
                },
              }}
            />
          </div>
        </div>
      </ThemeProvider>
    </LocalizationProvider>
  )
}

