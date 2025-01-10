import styles from "./button.module.css";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "outline";
  disabled?: boolean;
  className?: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
}

const variantStyles = {
  primary: styles.primary,
  outline: styles.outline,
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
  disabled = false,
  className = "",
  type = "button",
}) => {
  const baseStyles = styles.base;

  const disabledStyles = "opacity-50 cursor-not-allowed";

  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${
        disabled ? disabledStyles : ""
      } ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
