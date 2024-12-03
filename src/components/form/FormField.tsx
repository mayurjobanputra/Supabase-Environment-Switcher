import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface FormFieldProps {
  label: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  isValid: boolean;
  errorMessage?: string;
  tooltip?: string;
  isMonospace?: boolean;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  id,
  value,
  onChange,
  placeholder,
  isValid,
  errorMessage,
  tooltip,
  isMonospace,
}) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <Label htmlFor={id} className="text-gray-200">{label}</Label>
        {tooltip && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <HelpCircle className="h-4 w-4 text-gray-400" />
              </TooltipTrigger>
              <TooltipContent>
                <p>{tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
      {!isValid && value && (
        <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
      )}
      <Input
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`bg-gray-900 border-gray-600 text-white placeholder:text-gray-400 ${
          isMonospace ? 'font-mono text-sm' : ''
        } ${!isValid ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
      />
    </div>
  );
};