"use client";

import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

interface Props {
  range: DateRange | undefined;
  onChange: (range: DateRange | undefined) => void;
}

export default function DateRangePicker({
  range,
  onChange,
}: Props) {
  const today = new Date();

  return (
    <div className="rounded-xl bg-gray-800 p-4">
      <DayPicker
        mode="range"
        selected={range}
        onSelect={onChange}
        disabled={{ before: today }}
        className="text-white"
      />
    </div>
  );
}