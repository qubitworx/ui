"use client";

// Source taken from: https://www.joshuawootonn.com/vercel-tabs-component
import { CSSTabs } from "./tabs";
import { Tab, useTabs } from "./useTabs";

interface Props {
  items: Tab[];
}

const Tabs = (props: Props) => {
  const css = useTabs({
    initialTabId: props.items[0].id,
    tabs: props.items,
  });

  return (
    <>
      <CSSTabs {...css.tabProps} />
      <div className="flex flex-col">{css.selectedTab.children}</div>
    </>
  );
};

export { Tabs };
