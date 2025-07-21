/* eslint-disable @typescript-eslint/no-explicit-any */
// components/form/CustomInputField.tsx

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import type { Control } from "react-hook-form";
import { Textarea } from "../ui/textarea";

interface CustomTextAreaFieldProps {
  control: Control<any>;
  name: string;
  label: string;
  placeholder?: string;
}

export const CustomTextAreaField = ({
  control,
  name,
  label,
  placeholder = "",
}: CustomTextAreaFieldProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Textarea
              placeholder={placeholder}
              className="resize-none"
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
