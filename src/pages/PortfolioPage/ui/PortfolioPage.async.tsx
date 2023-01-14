import { lazy } from "react";

const PortfolioAsyncPage = lazy(async () => await import("./PortfolioPage"));

export { PortfolioAsyncPage as PortfolioPage };
