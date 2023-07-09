import type { Meta } from "@storybook/react";
import { Button } from "../src/Button";

const meta: Meta<typeof Button> = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  component: Button,

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  render: (props) => <Button {...props} />,
};

export default meta;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Core = {
  args: {
    variant: "primary",
    loading: false,
    children: "Button",
  },
  argTypes: {
    children: {
      control: { type: "text" },
    },
    variant: {
      options: ["primary", "secondary", "error"],
      control: { type: "radio" },
    },
    loading: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
};
