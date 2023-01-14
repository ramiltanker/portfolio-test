import { ButtonHTMLAttributes, FC, memo } from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

export enum ButtonTheme {
  CLEAR = "clear",
}

export enum ButtonSize {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  size?: ButtonSize;
  disabled?: boolean;
  children?: React.ReactNode;
}

const Button = memo(
  ({
    className = "",
    children,
    theme = ButtonTheme.CLEAR,
    size = ButtonSize.M,
    disabled,
    ...buttonProps
  }: ButtonProps) => {
    const mods = {
      [styles[theme]]: true,
      [styles[size]]: true,
      [styles.disabled]: disabled,
    };

    return (
      <button
        type="button"
        className={classNames(styles.button, mods, [className])}
        disabled={disabled}
        {...buttonProps}
      >
        {children}
      </button>
    );
  }
);

export { Button };
