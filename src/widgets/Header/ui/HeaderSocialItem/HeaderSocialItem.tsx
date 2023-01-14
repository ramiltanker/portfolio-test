import { FC, memo } from "react";
import styles from "./HeaderSocialItem.module.scss";
import classNames from "classnames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

interface HeaderSocialItemProps {
  className?: string;
  href: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

const HeaderSocialItem: FC<HeaderSocialItemProps> = memo(
  ({ className, href, Icon }) => {
    return (
      <li className={classNames(styles.headerSocialItem, {}, [className])}>
        <a href={href} rel="noreferrer" target="_blank">
          <Icon className={styles.image} />
        </a>
      </li>
    );
  }
);

export { HeaderSocialItem };
