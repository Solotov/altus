import React, { createContext, ReactElement, useState } from "react";

export const TabContext = createContext(undefined);

export const TabProvider = ({
  children
}: {
  children: React.ReactNode;
}): ReactElement => {
  const initialTabState: TabState = {
    tabs: [],
    activeTabId: ""
  };

  const [tabState, setTabState] = useState(initialTabState);

  return (
    <TabContext.Provider value={{ tabState, setTabState }}>
      {children}
    </TabContext.Provider>
  );
};
