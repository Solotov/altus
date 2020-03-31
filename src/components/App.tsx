import React, { useEffect, ReactElement, useContext } from "react";
import { TabProvider } from "../context/TabContext";
import TabLayout from "./TabLayout";

const App = (): ReactElement => {
  return (
    <div id="app">
      <TabProvider>
        <TabLayout />
      </TabProvider>
    </div>
  );
};

export default App;
