import React, {
  FC,
  InputHTMLAttributes,
  memo,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./Input.module.scss";
import classNames from "classnames";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange" | "size"
>;

export enum InputSize {
  MEDIUM = "size_medium",
  LARGE = "size_large",
}

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  readonly?: boolean;
  size?: InputSize;
}

const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = "text",
    size = InputSize.MEDIUM,
    readonly,
    ...otherProps
  } = props;

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const mods = {
    [styles[size]]: size,
  };

  return (
    <div className={classNames(styles.inputWrapper, {}, [])}>
      <input
        type={type}
        value={value}
        onChange={handleOnChange}
        className={classNames(styles.input, mods, [className])}
        readOnly={readonly}
        {...otherProps}
      />
    </div>
  );
});

export { Input };
