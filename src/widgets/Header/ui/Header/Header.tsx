import { FC, memo } from "react";
import styles from "./Header.module.scss";
import classNames from "classnames";
import {
  NavigationItemsList,
  SocialNetworksList,
} from "widgets/Header/model/types/items";
import { HeaderItem } from "../HeaderItem/HeaderItem";
import { ThemeSwitcher } from "widgets/ThemeSwitcher/ui/ThemeSwitcher";
import { HeaderSocialItem } from "../HeaderSocialItem/HeaderSocialItem";
import { Theme, useTheme } from "app/providers/ThemeProvider";

interface HeaderProps {
  className?: string;
}

const Header: FC<HeaderProps> = memo(({ className }) => {
  const { theme } = useTheme();

  return (
    <header className={classNames(styles.header, {}, [className])}>
      <div className={styles.header_container}>
        <nav className={styles.navigation}>
          <ul className={styles.list}>
            {NavigationItemsList.map(({ path, text }) => {
              return <HeaderItem path={path} text={text} key={path} />;
            })}
          </ul>
        </nav>
        <div className={styles.right}>
          <ul className={styles.list}>
            {SocialNetworksList.map(({ IconDark, IconLight, href }) => {
              return (
                <HeaderSocialItem
                  Icon={theme === Theme.DARK ? IconDark : IconLight}
                  href={href}
                  key={href}
                />
              );
            })}
          </ul>
          <ThemeSwitcher className={styles.themeButton} />
        </div>
      </div>
    </header>
  );
});

export { Header };
