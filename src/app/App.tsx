import React, { Suspense, useEffect } from "react";
import { AppRouter } from "./providers/router";
import { useTheme } from "./providers/ThemeProvider";
import { Header } from "widgets/Header";
import classNames from "classnames";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [])}>
      <Suspense fallback="loading">
        <Header />
        <div className="content-page">
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
