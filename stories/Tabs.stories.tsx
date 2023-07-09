import type { Meta } from "@storybook/react";
import { Tabs } from "../src/Tabs";

const meta: Meta<typeof Tabs> = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  component: Tabs,

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  render: (props) => <Tabs {...props} />,
};

export default meta;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Core = {
  args: {
    items: [
      {
        label: "Circle",
        children: <div>Circle</div>,
        id: "Circle",
      },
      {
        label: "Triangle",
        children: <div>Triangle</div>,
        id: "Triangle",
      },
      {
        label: "Square",
        children: <div>Square</div>,
        id: "Square",
      },
    ],
  },
};
