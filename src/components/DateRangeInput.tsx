
import React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function DateRangeInput() {
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  
  // Calculate min (today) and max (one year from now) dates
  const today = new Date();
  const maxDate = new Date();
  maxDate.setFullYear(today.getFullYear() + 1);
  
  return (
    <div className="w-full max-w-sm space-y-2">
      <Label htmlFor="date">Select a date (within one year from now)</Label>
      <div className="flex flex-col gap-2">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              disabled={(date) => {
                // Disable dates before today or after one year from now
                return date < today || date > maxDate;
              }}
              initialFocus
              className={cn("p-3 pointer-events-auto")}
            />
          </PopoverContent>
        </Popover>
        
        <div className="relative">
          <Input
            type="date"
            id="date"
            value={date ? format(date, "yyyy-MM-dd") : ""}
            onChange={(e) => {
              const selectedDate = e.target.valueAsDate;
              if (selectedDate) {
                // Check if the selected date is within the allowed range
                if (selectedDate >= today && selectedDate <= maxDate) {
                  setDate(selectedDate);
                }
              }
            }}
            min={format(today, "yyyy-MM-dd")}
            max={format(maxDate, "yyyy-MM-dd")}
            className="w-full"
          />
        </div>
      </div>
      
      <p className="text-xs text-muted-foreground">
        You can either use the calendar picker or directly input a date.
        Valid dates: {format(today, "MMM d, yyyy")} to {format(maxDate, "MMM d, yyyy")}
      </p>
    </div>
  );
}
