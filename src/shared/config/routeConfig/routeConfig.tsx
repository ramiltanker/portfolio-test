import { NotFoundPage } from "pages/NotFoundPage";
import { RouteProps } from "react-router-dom";
import { PortfolioPage } from "pages/PortfolioPage";
import { AboutPage } from "pages/AboutPage";
import { BlogPage } from "pages/BlogPage";

export type AppRoutesProps = RouteProps & {};

export enum AppRoutes {
  ABOUT = "about",
  PORTFOLIO = "portfolio",
  BLOG = "blog",
  NOT_FOUND = "not-found",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.ABOUT]: "/",
  [AppRoutes.PORTFOLIO]: "/portfolio",
  [AppRoutes.BLOG]: "/blog",
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.PORTFOLIO]: {
    path: RoutePath.portfolio,
    element: <PortfolioPage />,
  },
  [AppRoutes.BLOG]: {
    path: RoutePath.blog,
    element: <BlogPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath["not-found"],
    element: <NotFoundPage />,
  },
};
