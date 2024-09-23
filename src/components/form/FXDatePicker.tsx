import { IInput } from "@/src/types";
import { DatePicker } from "@nextui-org/date-picker";
import { Controller } from "react-hook-form";

interface IProps extends IInput {}

const FXDatePicker = ({ label, name, variant = "bordered" }: IProps) => {
  return (
    <Controller
      name={name}
      render={({ field: { value, ...fields } }) => (
        <DatePicker
          className="max-w-[284px] min-w-full"
          label={label}
          {...fields}
          variant={variant}
        />
      )}
    />
  );
};

export default FXDatePicker;
