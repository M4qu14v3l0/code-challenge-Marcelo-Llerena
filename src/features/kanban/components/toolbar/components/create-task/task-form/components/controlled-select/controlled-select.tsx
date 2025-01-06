import SelectComboBox from "@/components/ui/combo-box/select-combo-box";
import { ReactNode } from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

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
}

export const ControlledSelect = <T extends FieldValues>({
  control,
  name,
  options,
  placeholder,
  label,
  variant,
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
        />
      )}
    />
  );
};
