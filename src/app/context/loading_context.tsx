"use client";

import React, { createContext, useContext, useState } from "react";

type LoadingContextType = {
  hasLoaded: boolean;
  setHasLoaded: (value: boolean) => void;
};

const LoadingContext = createContext<LoadingContextType>({
  hasLoaded: false,
  setHasLoaded: () => {},
});

export const useLoading = () => useContext(LoadingContext);

export const LoadingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [hasLoaded, setHasLoaded] = useState(false);

  return (
    <LoadingContext.Provider value={{ hasLoaded, setHasLoaded }}>
      {children}
    </LoadingContext.Provider>
  );
};
