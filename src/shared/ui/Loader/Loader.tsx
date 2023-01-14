import { memo } from "react";
import styles from "./Loader.module.scss";

const Loader = memo(() => {
  return (
    <div className={styles.loader}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
});

export { Loader };
