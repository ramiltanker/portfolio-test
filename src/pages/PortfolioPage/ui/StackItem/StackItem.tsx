import { FC, memo } from "react";
import styles from "./StackItem.module.scss";
import classNames from "classnames";
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";

interface StackItemProps {
  className?: string;
  name?: string;
}

const StackItem: FC<StackItemProps> = memo(({ className, name }) => {
  return (
    <li className={classNames(styles.stackItem, {}, [className])}>
      <Text
        text={name}
        theme={TextTheme.PRIMARY_INVERTED}
        align={TextAlign.LEFT}
      />
    </li>
  );
});

export default StackItem;
