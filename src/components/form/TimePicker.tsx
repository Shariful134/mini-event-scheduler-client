// /* eslint-disable @typescript-eslint/no-explicit-any */

// import TimePicker from "react-time-picker";
// import "react-time-picker/dist/TimePicker.css";
// import { useController } from "react-hook-form";

// interface Props {
//   name: string;
//   control: any;
//   label: string;
// }

// export const CustomTimePicker = ({ name, control, label }: Props) => {
//   const {
//     field: { value, onChange },
//     fieldState: { error },
//   } = useController({ name, control });

//   const timeValue = value === "" ? null : value;

//   return (
//     <div className="flex flex-col gap-1">
//       <label className="text-sm font-medium">{label}</label>
//       <TimePicker
//         onChange={(val) => {
//           if (val === null) {
//             onChange("");
//           } else {
//             onChange(val);
//           }
//         }}
//         value={timeValue}
//         disableClock={true}
//         clearIcon={null}
//         clockIcon={null}
//         locale="en-US"
//         format="hh:mm a"
//         className="rounded border border-gray-300 p-2"
//       />
//       {error && <p className="text-red-500 text-sm">{error.message}</p>}
//     </div>
//   );
// };
