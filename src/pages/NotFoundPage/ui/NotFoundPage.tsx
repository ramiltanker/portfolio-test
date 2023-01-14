import { FC } from "react";
import styles from "./NotFoundPage.module.scss";
import classNames from "classnames";

interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
  return (
    <div className={classNames(styles.notFoundPage, {}, [className])}>
      Страница не найдена
    </div>
  );
};

export { NotFoundPage };
