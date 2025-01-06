import * as Select from "@radix-ui/react-select";
import styles from "./select-combo-box.module.css";
import Avatar from "../avatar/avatar";
import { ReactNode } from "react";

interface Option {
  value: string;
  label: string;
  icon?: React.ReactNode;
  img?: string | undefined | null;
}

interface SelectComboBoxProps {
  options: Option[] | undefined;
  placeholder?: ReactNode;
  label: string;
  variant: "points" | "assignee";
  onChange: (value: string | null) => void;
  value: string;
}

interface VariantConfig {
  width: string;
  alignLabel: "center" | "left" | "right";
  justifyItems: "center" | "flex-end" | "flex-start";
}

const variantConfigs: Record<string, VariantConfig> = {
  points: {
    width: "122px",
    alignLabel: "center",
    justifyItems: "center",
  },
  assignee: {
    width: "239px",
    alignLabel: "left",
    justifyItems: "flex-start",
  },
};

export default function SelectComboBox({
  options,
  placeholder = "Select an option",
  label,
  variant = "points",
  onChange,
  value,
}: SelectComboBoxProps) {
  const config = variantConfigs[variant];

  return (
    <Select.Root onValueChange={onChange} value={value}>
      <Select.Trigger className={styles.selectTrigger}>
        <Select.Value placeholder={placeholder} />
      </Select.Trigger>
      <Select.Content
        position="popper"
        className={styles.selectContent}
        style={{ width: config.width }}
      >
        <Select.Group>
          <Select.Label
            style={{ textAlign: config.alignLabel }}
            className={styles.selectLabel}
          >
            {label}
          </Select.Label>
          {options?.length === 0 ||
            (options === undefined && <p>No Options</p>)}
          {options?.map((option) => (
            <Select.Item
              key={option.value}
              value={option.value}
              className={styles.selectItem}
              style={{ justifyContent: config.justifyItems }}
            >
              <Select.ItemText>
                <div className={styles.selectItemText}>
                  {option.icon && <span>{option.icon}</span>}
                  {option.img && (
                    <Avatar src={option.img} height="30px" width="30px" />
                  )}
                  {option.label}
                </div>
              </Select.ItemText>
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
}
