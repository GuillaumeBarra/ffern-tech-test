import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  initialValue?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, initialValue, ...props }, ref) => {
    const [inputValue, setInputValue] = React.useState(initialValue ?? '');
    const hasInput = inputValue.length > 0;

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    };

    return (
      <div className="relative">
        <input
          onInput={handleInputChange}
          type={type}
          className={cn(
            "border-ashLight peer h-14 pt-2 w-full rounded-md border bg-white px-3 py-3 text-md placeholder-transparent focus:pt-4 focus:pb-1 focus-visible:outline-none focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            hasInput ? "pt-4 pb-1" : "py-3",
            className
          )}
          ref={ref}
          {...props}
        />
        <label
          htmlFor={props.id}
          className={cn(
            "text-ash absolute left-3 top-4 text-md transition-all duration-200 peer-focus:top-1.5 peer-focus:left-2 peer-focus:text-xs peer-focus:text-slate-300 peer-placeholder-shown:top-4 peer-placeholder-shown:left-3 peer-placeholder-shown:text-md",
            hasInput && "top-1.5 left-2 text-xs text-ash"
          )}
        >
          {label}
        </label>
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };