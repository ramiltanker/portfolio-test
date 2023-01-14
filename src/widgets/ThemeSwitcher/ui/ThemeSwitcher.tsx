import { FC, memo } from "react";
import styles from "./ThemeSwitcher.module.scss";
import classNames from "classnames";
import { Button } from "shared/ui/Button/Button";
import { Theme, useTheme } from "app/providers/ThemeProvider";

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      className={classNames(styles.themeSwitcher, className)}
    >
      {theme === Theme.LIGHT ? "Светлая" : "Тёмная"}
    </Button>
  );
});

export { ThemeSwitcher };
