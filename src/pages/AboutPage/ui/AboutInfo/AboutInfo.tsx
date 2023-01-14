import { FC, memo } from "react";
import styles from "./AboutInfo.module.scss";
import { Text, TextAlign, TitleSize } from "shared/ui/Text/Text";
import myPhoto from "shared/assets/images/my-photo.jpg";
import classNames from "classnames";

interface AboutInfoProps {
  className?: string;
}

const AboutInfo: FC<AboutInfoProps> = memo(({ className }) => {
  return (
    <div className={classNames(styles.aboutInfo, {}, [className])}>
      <div className={styles.left}>
        <Text
          title="Обо мне"
          text="Frontend-developer"
          align={TextAlign.LEFT}
          titleSize={TitleSize.LARGE}
        />
        <Text
          text="Я фронтент разработчик с трёх летнем опытом разработки. Участвовал в коммерческой разработке на фрилансерской платформе. 
          Также я работал в MindSet и участвовал в разработке стартап-проекта для быстрого 
          распознавания различных изображений и определения всех объектов на них. 
          Разрабатывал GameFi проект Moon Robots на базе блокчейн сети Harmony с собственными токенами. Писал no-code приложение 
          связанное с созданием динамических пайплайнов для гибкого распознавания типов документов."
          align={TextAlign.LEFT}
          titleSize={TitleSize.LARGE}
          className={styles.info}
        />
        <Text title="Мои навыки" text="Soft-skills" align={TextAlign.LEFT} />
        <Text
          text="Способность находодить общий язык с людьми / Критическое мышление / Развитая логика / Решение конфликтов
          / Работа в команде / Желание развиваться / Гибкость / Ответственность"
          align={TextAlign.LEFT}
          titleSize={TitleSize.LARGE}
          className={styles.info}
        />
        <Text title="Мои навыки" text="Hard-skills" align={TextAlign.LEFT} />
        <Text
          text="JavaScript / TypeScript / React / Redux / Redux-toolkit / Storybook / Jest / Webpack 
          / Eslint / Stylelint"
          align={TextAlign.LEFT}
          titleSize={TitleSize.LARGE}
          className={styles.info}
        />
      </div>
      <img src={myPhoto} alt="My Photo" className={styles.myPhoto} />
    </div>
  );
});

export default AboutInfo;
