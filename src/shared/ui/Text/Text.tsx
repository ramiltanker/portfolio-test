import { FC, memo } from "react";
import styles from "./Text.module.scss";
import classNames from "classnames";

export enum TextTheme {
  PRIMARY = "primary",
  PRIMARY_INVERTED = "primary_inverted",
}

export enum TextAlign {
  RIGHT = "right",
  LEFT = "left",
  CENTER = "center",
}

export enum TitleSize {
  SMALL = "title_size_small",
  MEDIUM = "title_size_medium",
  LARGE = "title_size_large",
}

export enum TextSize {
  MEDIUM = "text_size_medium",
  LARGE = "text_size_large",
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
  titleSize?: TitleSize;
  textSize?: TextSize;
}

const Text: FC<TextProps> = memo(
  ({
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
    align = TextAlign.CENTER,
    titleSize = TitleSize.MEDIUM,
    textSize = TextSize.MEDIUM,
  }) => {
    const mods = {
      [styles[theme]]: theme,
      [styles[align]]: align,
    };

    const titleMods = {
      [styles[theme]]: theme,
      [styles[titleSize]]: titleSize,
    };

    const textMods = {
      [styles[theme]]: theme,
      [styles[textSize]]: textSize,
    };

    return (
      <div className={classNames(styles.box, mods, [className])}>
        {title && (
          <p className={classNames(styles.title, titleMods)}>{title}</p>
        )}
        {text && <p className={classNames(styles.text, textMods)}>{text}</p>}
      </div>
    );
  }
);

export { Text };
