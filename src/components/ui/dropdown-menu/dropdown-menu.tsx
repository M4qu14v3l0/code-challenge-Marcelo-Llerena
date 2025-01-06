import styles from "./dropdown-menu.module.css";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import TagIcon from "@/assets/svgs/tag.svg?react";

interface Option {
  tag: string;
}

interface DropDownMenuProps {
  placeholder: string;
  label: string;
  options: Option[];
  onChange: (value: string[] | null) => void;
  value: string[] | null;
}

export default function DropDownMenu({
  placeholder,
  label,
  options,
  onChange,
  value,
}: DropDownMenuProps) {
  const handleCheckboxChange = (tag: string, checked: boolean) => {
    let updatedValues: string[];

    if (checked) {
      updatedValues = value ? [...value, tag] : [tag];
    } else {
      updatedValues = value ? value.filter((val) => val !== tag) : [];
    }

    onChange(updatedValues);
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className={styles.triggerButton}>
        {value && value.length !== 0 ? (
          value[0]
        ) : (
          <>
            <TagIcon />
            {placeholder}
          </>
        )}
      </DropdownMenu.Trigger>
      <DropdownMenu.Content
        onCloseAutoFocus={(e) => e.preventDefault()}
        className={styles.dropwDownContent}
      >
        <DropdownMenu.Label className={styles.dropdownLabel}>
          {label}
        </DropdownMenu.Label>
        {options.map((option) => (
          <DropdownMenu.Item
            key={option.tag}
            className={styles.dropdownItem}
            onSelect={(e) => e.preventDefault()}
          >
            <input
              type="checkbox"
              id={option.tag}
              checked={value ? value.includes(option.tag) : false}
              onChange={(e) => {
                handleCheckboxChange(option.tag, e.target.checked);
              }}
              className={styles.checkbox}
            />
            <span className={styles.customCheckbox}></span>
            <label htmlFor={option.tag} className={styles.label}>
              {option.tag}
            </label>
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
