import type { Meta } from "@storybook/react";
import Avatar from "../src/Avatar";
import { User } from "../src/icons";

const meta: Meta<typeof Avatar> = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  component: Avatar,

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  render: (props) => <Avatar size="sm" icon={<User />} {...props} />,
};

export default meta;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Core = {
  args: {
    divSize: "sm",
    showBadge: false,
  },
  argTypes: {
    divSize: {
      options: ["sm", "md", "lg", "xl"],
      control: { type: "radio" },
    },
    showBadge: {
      control: { type: "boolean" },
    },
  },
};
