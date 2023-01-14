import { FC } from 'react';
import styles from './AppLink.module.scss';
import { Link, LinkProps } from 'react-router-dom';
import classNames from 'classnames';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  PRIMARY_INVERTED = 'primaryInverted',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

const AppLink: FC<AppLinkProps> = (props) => {
  const { className, children, to, theme = AppLinkTheme.PRIMARY, ...otherProps } = props;

  return (
    <Link to={to} className={classNames(styles.appLink, {}, [className, styles[theme]])} {...otherProps}>
      {children}
    </Link>
  );
};

export { AppLink };
