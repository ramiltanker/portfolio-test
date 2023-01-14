import { FC, memo } from "react";
import styles from "./HeaderItem.module.scss";
import classNames from "classnames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useLocation } from "react-router-dom";

interface HeaderItemProps {
  className?: string;
  path: string;
  text: string;
}

const HeaderItem: FC<HeaderItemProps> = memo(({ className, path, text }) => {
  const location = useLocation();

  const activePath = location.pathname === path;

  const mods = {
    [styles.active]: activePath,
  };

  return (
    <li className={classNames(styles.headerItem, mods, [className])}>
      <AppLink to={path} theme={AppLinkTheme.PRIMARY_INVERTED}>
        {text}
      </AppLink>
    </li>
  );
});

export { HeaderItem };
