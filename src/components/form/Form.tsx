import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { CustomInputField } from "./Input";
import { formatTor12Hour } from "@/utils/formatter";
import { CustomTextAreaField } from "./TextArea";
import { X } from "lucide-react";
interface FormComponentProps {
  onClose: () => void;
}
export function FormComponent({ onClose }: FormComponentProps) {
  const formSchema = z.object({
    title: z.string().min(2, {
      message: "Title is required",
    }),
    time: z.string().nonempty({ message: "Time is required" }),
    date: z.string().nonempty({ message: "Date is required" }),
    notes: z.string().optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      time: "",
      date: "",
      notes: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const formattedTime = formatTor12Hour(data?.time);
    const finalData = {
      ...data,
      time: formattedTime,
    };
    console.log(finalData);
    try {
      const res = await fetch("http://localhost:5000/api/v1/events/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalData),
      });
      const response = await res.json();
      console.log("response: ", response);
    } catch (error) {
      console.log(error);
    }
    onClose();
  };
  return (
    <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-6 sm:p-10 border border-gray-200 dark:border-zinc-700 transition">
        <button
          onClick={onClose}
          className="absolute top-10 right-4 md:right-6 lg:right-8  text-gray-500 hover:text-red-500 transition"
          aria-label="Close form"
        >
          <X className="w-7 h-7 border rounded-2xl hover:border-red-500" />
        </button>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6 text-center">
          Schedule Your Event
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <CustomInputField
                type="text"
                control={form.control}
                name="title"
                label="Title"
                placeholder="Enter your title"
              />
              <CustomInputField
                type="date"
                control={form.control}
                name="date"
                label="Date"
                placeholder="Select date"
              />
              <CustomInputField
                type="time"
                control={form.control}
                name="time"
                label="Time"
                placeholder="Select time"
              />
              <div className="sm:col-span-2">
                <CustomTextAreaField
                  control={form.control}
                  name="notes"
                  label="Notes"
                  placeholder="Enter any notes (optional)"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <Button
                className="bg-green-600 hover:bg-green-700 text-white font-medium px-8 py-2 rounded-lg shadow-md transition"
                type="submit"
              >
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
