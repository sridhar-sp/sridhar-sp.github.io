import React, { useState, createContext, useContext, useEffect } from "react";

const DEFAULT_QUERIES = {
  isMobile: "(max-width: 768px)",
  isDesktop: "(min-width: 769px)",
};

const defaultValue = {};
const ScreenSizeContext = createContext(defaultValue);

const ScreenSizeProvider = ({ children, queries = DEFAULT_QUERIES }) => {
  const [queryMatch, setQueryMatch] = useState({});

  useEffect(() => {
    const mediaQueryLists = {};
    const keys = Object.keys(queries);
    let isAttached = false;

    const handleQueryListener = () => {
      const updatedMatches = keys.reduce((acc, media) => {
        acc[media] = !!(
          mediaQueryLists[media] && mediaQueryLists[media].matches
        );
        return acc;
      }, {});
      setQueryMatch(updatedMatches);
    };

    if (window && window.matchMedia) {
      const matches = {};
      keys.forEach((media) => {
        if (typeof queries[media] === "string") {
          mediaQueryLists[media] = window.matchMedia(queries[media]);
          matches[media] = mediaQueryLists[media].matches;
        } else {
          matches[media] = false;
        }
      });
      setQueryMatch(matches);
      isAttached = true;
      keys.forEach((media) => {
        if (typeof queries[media] === "string") {
          mediaQueryLists[media].addListener(handleQueryListener);
        }
      });
    }
    return () => {
      if (isAttached) {
        keys.forEach((media) => {
          if (typeof queries[media] === "string") {
            mediaQueryLists[media].removeListener(handleQueryListener);
          }
        });
      }
    };
  }, [queries]);

  return (
    <ScreenSizeContext.Provider value={queryMatch}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

const useScreenSize = () => {
  const context = useContext(ScreenSizeContext);
  if (context === defaultValue) {
    throw new Error("useBreakpoint must be used within BreakpointProvider");
  }
  return context;
};

export { ScreenSizeProvider, useScreenSize };
