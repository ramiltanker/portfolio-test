import { FC } from "react";
import styles from "./PageLoader.module.scss";
import classNames from "classnames";

interface PageLoaderProps {
  className?: string;
}

const PageLoader: FC<PageLoaderProps> = ({ className }) => {
  return (
    <div className={classNames(styles.pageLoader, {}, [className])}>
      {/* <Loader /> */}
    </div>
  );
};

export { PageLoader };
