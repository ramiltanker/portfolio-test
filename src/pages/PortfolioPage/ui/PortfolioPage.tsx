import { FC, useCallback, useEffect, useState } from "react";
import styles from "./PortfolioPage.module.scss";
import classNames from "classnames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
  portfolioActions,
  portfolioReducer,
} from "../model/slice/portfolioSlice";
import { useAppDispatch } from "shared/hooks/useAppDispatch/useAppDispatch";
import { getPortfolioWorks } from "../model/services/getPortfolioWorks";
import { useSelector } from "react-redux";
import { getPortfolioIsLoading } from "../model/selectors/getPortfolioIsLoading/getPortfolioIsLoading";
import { Text, TextAlign } from "shared/ui/Text/Text";
import { getPortfolioData } from "../model/selectors/getPortfolioData/getPortfolioData";
import PortfolioCard from "./PortfolioCard/ui/PortfolioCard";
import { Loader } from "shared/ui/Loader/Loader";
import { Search } from "widgets/Search/ui/Search";
import { useDebounce } from "shared/hooks/useDebounce/useDebounce";
import { PortfolioType } from "../model/types/portfolio";

interface PortfolioPageProps {
  className?: string;
}

const initialReducers: ReducersList = {
  portfolio: portfolioReducer,
};

const PortfolioPage: FC<PortfolioPageProps> = ({ className }) => {
  const [searchValue, setSearchValue] = useState("");
  const [renderWorks, setRenderWorks] = useState<PortfolioType[]>([]);
  const debouncedValue = useDebounce(searchValue, 500);

  const dispatch = useAppDispatch();
  const portfolioWorks = useSelector(getPortfolioData);
  const portfolioIsLoading = useSelector(getPortfolioIsLoading);

  useEffect(() => {
    dispatch(getPortfolioWorks());
  }, [dispatch]);

  useEffect(() => {
    setRenderWorks(portfolioWorks);
  }, [portfolioWorks]);

  const handleOnChange = useCallback((value: string) => {
    setSearchValue(value);
  }, []);

  useEffect(() => {
    if (debouncedValue === "") {
      setRenderWorks(portfolioWorks);
    }
    const filteredContacts = portfolioWorks.filter((obj) =>
      Object.values(obj).some((val) => {
        if (typeof val !== "object") {
          return val.toUpperCase().includes(debouncedValue.toUpperCase());
        }
      })
    );
    setRenderWorks(filteredContacts);
  }, [debouncedValue]);

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
      <div className={classNames(styles.portfolioPage, {}, [className])}>
        <div className={styles.container}>
          <Text title="Мои работы" align={TextAlign.LEFT} />
          {portfolioIsLoading ? (
            <Loader />
          ) : (
            <div className={styles.box}>
              <Search onChange={handleOnChange} />
              {renderWorks.length ? (
                <div className={styles.items}>
                  {renderWorks?.map((item) => {
                    return <PortfolioCard item={item} key={item.id} />;
                  })}
                </div>
              ) : (
                <Text
                  title="К сожалению, ничего не найдено"
                  className={styles.status}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </DynamicModuleLoader>
  );
};

export default PortfolioPage;
