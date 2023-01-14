import { FC } from "react";
import styles from "./AboutPage.module.scss";
import classNames from "classnames";
import AboutInfo from "./AboutInfo/AboutInfo";

interface AboutPageProps {
  className?: string;
}

const AboutPage: FC<AboutPageProps> = ({ className }) => {
  return (
    <div className={classNames(styles.aboutPage, {}, [className])}>
      <div className={styles.container}>
        <AboutInfo />
      </div>
    </div>
  );
};

export default AboutPage;
