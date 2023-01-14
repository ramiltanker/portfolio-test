import { FC, memo, useEffect } from "react";
import styles from "./PortfolioCard.module.scss";
import classNames from "classnames";
import {
  Text,
  TextAlign,
  TextSize,
  TextTheme,
  TitleSize,
} from "shared/ui/Text/Text";
import { PortfolioType } from "pages/PortfolioPage/model/types/portfolio";
import StackItem from "../../StackItem/StackItem";

interface PortfolioCardProps {
  className?: string;
  item: PortfolioType;
}

const PortfolioCard: FC<PortfolioCardProps> = memo(({ className, item }) => {
  return (
    <div className={classNames(styles.portfolioCard, {}, [className])}>
      <Text
        title={item.title}
        align={TextAlign.LEFT}
        theme={TextTheme.PRIMARY_INVERTED}
        titleSize={TitleSize.SMALL}
      />
      <img src={item.image} alt={item.title} className={styles.image} />
      <Text
        text={item.description}
        theme={TextTheme.PRIMARY_INVERTED}
        align={TextAlign.LEFT}
      />
      <Text
        text="Стек"
        theme={TextTheme.PRIMARY_INVERTED}
        align={TextAlign.LEFT}
        textSize={TextSize.LARGE}
        className={styles.stackTitle}
      />
      <ul className={styles.stack}>
        {item.stack.map(({ id, name }) => {
          return <StackItem key={id} name={name} />;
        })}
      </ul>
    </div>
  );
});

export default PortfolioCard;
