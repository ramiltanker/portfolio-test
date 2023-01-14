import { FC, memo } from "react";
import styles from "./Search.module.scss";
import classNames from "classnames";
import { Input } from "shared/ui/Input/Input";
import { Button } from "shared/ui/Button/Button";

interface SearchProps {
  className?: string;
  onChange?: (e: string) => void;
}

const Search: FC<SearchProps> = memo(({ className, onChange }) => {
  return (
    <div className={styles.box}>
      <Input className={styles.input} onChange={onChange} placeholder="Поиск" />
    </div>
  );
});

export { Search };
