/* eslint-disable @typescript-eslint/no-explicit-any */
// components/form/CustomInputField.tsx

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { Control } from "react-hook-form";

interface CustomInputFieldProps {
  type: string;
  control: Control<any>;
  name: string;
  label: string;
  placeholder?: string;
}

export const CustomInputField = ({
  type,
  control,
  name,
  label,
  placeholder = "",
}: CustomInputFieldProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input type={type} placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
