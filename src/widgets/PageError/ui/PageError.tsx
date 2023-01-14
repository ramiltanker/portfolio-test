import { FC } from "react";
import styles from "./PageError.module.scss";
import classNames from "classnames";

interface PageErrorProps {
  className?: string;
}

const PageError: FC<PageErrorProps> = ({ className }) => {
  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={classNames(styles.pageError, {}, [className])}>
      <p>Произошла непредвиденная ошибка</p>
      <button onClick={reloadPage}>Обновить страницу</button>
    </div>
  );
};

export { PageError };
