import SelectComboBox from "@/components/ui/combo-box/select-combo-box";
import { ReactNode } from "react";
import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  Path,
} from "react-hook-form";
import { TaskFormValues } from "../../schema/task-squema";

interface Option {
  value: string;
  label: string;
  icon?: ReactNode;
  img?: string | undefined | null;
}

interface ControlledSelectProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  options: Option[] | undefined;
  placeholder?: React.ReactNode;
  label: string;
  variant: "points" | "assignee";
  errors: FieldErrors<TaskFormValues> | undefined;
}

export const ControlledSelect = <T extends FieldValues>({
  control,
  name,
  options,
  placeholder,
  label,
  variant,
  errors,
}: ControlledSelectProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <SelectComboBox
          options={options}
          placeholder={placeholder}
          label={label}
          onChange={onChange}
          value={value}
          variant={variant}
          errors={errors}
        />
      )}
    />
  );
};
