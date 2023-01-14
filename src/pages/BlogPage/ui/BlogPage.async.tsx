import { lazy } from "react";

const BlogAsyncPage = lazy(async () => await import("./BlogPage"));

export { BlogAsyncPage as BlogPage };
