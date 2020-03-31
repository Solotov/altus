declare module "eva-icons";

declare module "react-dragula" {
  export default function(
    containers: Array<HTMLElement>,
    options: import("dragula").DragulaOptions
  ): import("dragula").Drake;
}

declare module "*.png" {
  const value: any;
  export default value;
}

interface TabObject {
  title: string;
  icon?: string;
  id: string;
}

interface TabContext {
  tabState: TabState;
  setTabState: (value: any) => void;
}

interface TabState {
  tabs: TabObject[] | [];
  activeTabId: string | "";
}
