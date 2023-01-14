import { FC, memo, useEffect } from "react";
import styles from "./BlogPage.module.scss";
import classNames from "classnames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { blogReducer } from "../model/slice/blogSlice";
import { Text, TextAlign } from "shared/ui/Text/Text";
import { useAppDispatch } from "shared/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { getBlogPostsData } from "../model/selectors/getBlogPostsData/getBlogPostsData";
import { getBlogPosts } from "../model/services/getBlogPosts";
import { getBlogIsLoading } from "../model/selectors/getBlogIsLoading/getBlogIsLoading";
import { Loader } from "shared/ui/Loader/Loader";
import PostCard from "./PostCard/PostCard";

interface BlogPageProps {
  className?: string;
}

const initialReducers: ReducersList = {
  blog: blogReducer,
};

const BlogPage: FC<BlogPageProps> = memo(({ className }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBlogPosts());
  }, [dispatch]);

  const posts = useSelector(getBlogPostsData);
  const postsIsLoading = useSelector(getBlogIsLoading);

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
      <div className={classNames(styles.blogPage, {}, [className])}>
        <div className={styles.container}>
          <Text title="Посты" align={TextAlign.LEFT} />
          {postsIsLoading ? (
            <Loader />
          ) : (
            <div className={styles.cards}>
              {[...posts]
                .sort((a, b) => {
                  const Date1: number = new Date(a.date).getTime();
                  const Date2: number = new Date(b.date).getTime();

                  return Date2 - Date1;
                })
                .map((item) => {
                  return <PostCard key={item.id} item={item} />;
                })}
            </div>
          )}
        </div>
      </div>
    </DynamicModuleLoader>
  );
});

export default BlogPage;
