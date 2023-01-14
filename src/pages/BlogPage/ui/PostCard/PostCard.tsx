import { FC, memo } from "react";
import styles from "./PostCard.module.scss";
import classNames from "classnames";
import { Text, TextAlign, TextTheme, TitleSize } from "shared/ui/Text/Text";
import { PostType } from "pages/BlogPage/model/types/blog";
import { DAYS_OF_WEEK, MONTH } from "shared/constants/date";

interface PostCardProps {
  className?: string;
  item: PostType;
}

const PostCard: FC<PostCardProps> = memo(({ className, item }) => {
  const date = new Date(item.date);

  const day = date.getUTCDate();
  const dayOfWeek = DAYS_OF_WEEK[date.getUTCDay() - 1];
  const month = MONTH[date.getUTCMonth()];
  const year = date.getUTCFullYear();

  return (
    <div className={classNames(styles.postCard, {}, [className])}>
      <div className={styles.top}>
        <Text
          title={item.title}
          theme={TextTheme.PRIMARY_INVERTED}
          titleSize={TitleSize.SMALL}
          align={TextAlign.LEFT}
        />
        <Text
          text={`${dayOfWeek.slice(0, 3)}, ${day}, ${month}, ${year}`}
          theme={TextTheme.PRIMARY_INVERTED}
          className={styles.date}
        />
      </div>
      <img src={item.image} alt={item.title} className={styles.image} />
      <Text
        text={item.text}
        theme={TextTheme.PRIMARY_INVERTED}
        align={TextAlign.LEFT}
      />
    </div>
  );
});

export default PostCard;
